"use client";
import React from "react";

import { useFormik } from "formik";
import { Plus, Trash } from "lucide-react";
import { SingleValue } from "react-select";

import Button from "@/components/Button";
import DatePicker from "@/components/DatePicker";
import InputField from "@/components/InputField";
import Modal from "@/components/Modal";
import { Option, Select } from "@/components/Select";
import Typography from "@/components/Typography";
import useToaster from "@/hooks/useToaster";
import { getApiResponseErrorObj } from "@/utils/get-api-response-error";
import { getApiResponseErrorToast } from "@/utils/get-api-response-error-toast";
import { getConvertedDate } from "@/utils/get-converted-date";
import { setFormikResponseError } from "@/utils/set-formik-response-error";

import useFetchProjectData from "../../hooks/useFetchProjectData";
import { createProject, updateProject } from "../../http/get-project";
import { ProjectDataType } from "../../projects.types";
import { useProjectStore } from "../../store/useProjectStore";
import { convertDistrictList } from "../../utils/convert-district-list";
import { convertProgramList } from "../../utils/convert-program-list";
import { convertProvinceList } from "../../utils/convert-province-list";
import { initializeDistrictList } from "../../utils/initialize-district-list";

import { projectSchema } from "./project.schema";
import { StyledDiv } from "./style";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  selectedValue?: ProjectDataType | null;
  isEdit?: boolean;
};

const ProjectFormModal = ({
  isOpen,
  onClose,
  selectedValue = null,
  isEdit,
}: Props) => {
  const { loader, programData, provinceData } = useProjectStore();

  const [isLoading, setIsLoading] = React.useState(false);
  const [districtList, setDistrictList] = React.useState<Array<Option>>(
    initializeDistrictList(provinceData, selectedValue?.province?.id)
  );

  const { successToast, errorToast } = useToaster();
  const { fetchProjectData } = useFetchProjectData();

  const formik = useFormik({
    initialValues: {
      program_id: selectedValue?.program?.id || "",
      project_title: selectedValue?.project_title || "",
      event_title: selectedValue?.event_title || "",
      province_id: selectedValue?.province?.id || "",
      district_id: selectedValue?.district?.id || "",
      start_date: selectedValue?.start_date || null,
      end_date: selectedValue?.end_date || null,
      funders: selectedValue?.funders?.length
        ? selectedValue.funders
        : [{ name: "" }],
    },
    validationSchema: projectSchema,
    onSubmit: () => {
      setIsLoading(true);
      const {
        district_id,
        program_id,
        province_id,
        start_date,
        end_date,
        ...rest
      } = formik.values;
      const body = {
        district_id: Number(district_id),
        program_id: Number(program_id),
        province_id: Number(province_id),
        start_date: getConvertedDate(start_date),
        end_date: getConvertedDate(end_date),
        ...rest,
      };

      const { id } = selectedValue || {};

      const httpRequest = isEdit
        ? updateProject(body, id)
        : createProject(body);

      httpRequest
        .then(() => {
          fetchProjectData()
            .then(() => {
              successToast("Project created successfully.");
              setIsLoading(false);
              onClose();
            })
            .catch(() => {
              setIsLoading(false);
            });
        })
        .catch((err) => {
          const errorObj = getApiResponseErrorObj(err);
          setFormikResponseError(formik, errorObj);

          console.log(err);
          getApiResponseErrorToast(err);
          setIsLoading(false);
        });
    },
  });

  const handleProvinceChange = (item: SingleValue<Option>) => {
    const { value = "" } = item || {};

    if (!value) {
      errorToast("Province value is empty");
      return;
    }
    formik.setFieldValue("province_id", value);

    const selectedDistrict =
      provinceData.find((province) => province.id === value)?.districts || [];

    setDistrictList(convertDistrictList(selectedDistrict));
  };

  const handleAddFunder = () => {
    formik.setFieldValue("funders", [...formik.values.funders, { name: "" }]);
  };

  const handleRemoveFunder = (index: number) => {
    const updated = [...formik.values.funders];
    updated.splice(index, 1);
    formik.setFieldValue("funders", updated);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      headerTitle="Create New Project"
      headerSubTitle="Enter the project details below"
    >
      <StyledDiv>
        <Select
          name="program_id"
          options={convertProgramList(programData)}
          placeholder="Select Program"
          label="Program"
          onChange={(item) => formik.setFieldValue("program_id", item?.value)}
          value={formik.values.program_id}
          onBlur={() => formik.setFieldTouched("program", true)}
          error={formik.errors.program_id}
          touched={formik.touched.program_id}
          disabled={loader}
          isLoading={loader}
          requiredField
        />

        <InputField
          name="project_title"
          value={formik.values.project_title}
          onChange={formik.handleChange}
          label="Project title"
          type="text"
          placeholder="Enter project title"
          onBlur={formik.handleBlur}
          error={formik.errors.project_title}
          touched={formik.touched.project_title}
          requiredField
        />

        {formik.values.program_id && (
          <InputField
            name="event_title"
            value={formik.values.event_title}
            onChange={formik.handleChange}
            label="Event title"
            type="text"
            placeholder="Enter event title"
            onBlur={formik.handleBlur}
            error={formik.errors.event_title}
            touched={formik.touched.event_title}
            requiredField
          />
        )}

        <Select
          name="province_id"
          options={convertProvinceList(provinceData)}
          placeholder="Select province"
          label="Province"
          onChange={handleProvinceChange}
          value={formik.values.province_id}
          onBlur={() => formik.setFieldTouched("province_id", true)}
          error={formik.errors.province_id}
          touched={formik.touched.province_id}
          disabled={loader}
          isLoading={loader}
        />

        <Select
          name="district_id"
          options={districtList}
          placeholder="Select district"
          label="District"
          onChange={(item) => formik.setFieldValue("district_id", item?.value)}
          value={formik.values.district_id}
          onBlur={() => formik.setFieldTouched("district_id", true)}
          error={formik.errors.district_id}
          touched={formik.touched.district_id}
          showTooltip={!formik.values.province_id}
          tooltipMsg="First select the province"
          disabled={!formik.values.province_id}
        />

        <div className="project-modal-date-wrapper">
          <DatePicker
            name="start_id"
            label="Start Date"
            onChange={(e) => formik.setFieldValue("start_date", e)}
            selected={formik.values.start_date}
            onBlur={() => formik.setFieldTouched("start_date", true)}
            touched={formik.touched.start_date}
            error={formik.errors.start_date}
          />
          <DatePicker
            name="end_date"
            label="End Date"
            onChange={(e) => formik.setFieldValue("end_date", e)}
            selected={formik.values.end_date as Date}
            onBlur={() => formik.setFieldTouched("end_date", true)}
            touched={formik.touched.end_date}
            error={formik.errors.end_date}
            openToDate={formik.values.start_date}
            minDate={formik.values.start_date}
            disabled={!formik.values.start_date}
            tooltipMsg="First select the start date"
            showToolttip={!formik.values.start_date}
          />
        </div>

        <div className="project-dynamic-input-field">
          <div className="dynamic-input-label-wrapper">
            <Typography as="p" className="input-form-label">
              Funded By
            </Typography>
            <div className="dynamic-funder-btn-wrapper">
              <Button variant="outline" onClick={handleAddFunder}>
                <Plus size={14} />
                Add Funder
              </Button>
            </div>
          </div>
          {formik.values.funders.map((funder, i) => {
            return (
              <div key={i} className="dynamic-input-field-wrapper">
                <InputField
                  name={`funders[${i}].name`}
                  value={funder.name}
                  onChange={formik.handleChange}
                  type="text"
                  placeholder="Enter funder name (eg, UNFPA, UNICEF)"
                  onBlur={formik.handleBlur}
                  className="input-dynamic-field"
                />
                {formik.values.funders.length > 1 && (
                  <div
                    className="dynamic-input-remove-icon-wrapper"
                    onClick={() => handleRemoveFunder(i)}
                  >
                    <Trash size={16} color="#D4183D" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="project-modal-btn-wrapper">
          <Button
            variant="outline"
            className="project-modal-cancel-btn"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            onClick={() => formik.handleSubmit()}
            disabled={!formik.isValid || isLoading}
            loading={isLoading}
          >
            {isEdit ? "Update Project" : "Create Project"}
          </Button>
        </div>
      </StyledDiv>
    </Modal>
  );
};

export default ProjectFormModal;
