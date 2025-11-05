"use client";
import React from "react";

import { useFormik } from "formik";
import { SingleValue } from "react-select";

import Button from "@/components/Button";
import DatePicker from "@/components/DatePicker";
import InputField from "@/components/InputField";
import Modal from "@/components/Modal";
import { Option, Select } from "@/components/Select";
import useToaster from "@/hooks/useToaster";
import { authAxios } from "@/utils/axios";
import { getApiResponseErrorObj } from "@/utils/get-api-response-error";
import { getApiResponseErrorToast } from "@/utils/get-api-response-error-toast";
import { setFormikResponseError } from "@/utils/set-formik-response-error";

import { convertDistrictList } from "../../utils/convert-district-list";
import { convertProvinceList } from "../../utils/convert-province-list";

import { programOption } from "./data";
import { projectSchema } from "./project.schema";
import { StyledDiv } from "./style";

type Props = {
  isCreateModalOpen: boolean;
  setIsCreateModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CreateProjectModal = ({
  isCreateModalOpen,
  setIsCreateModalOpen,
}: Props) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [provinceLoader, setProvinceLoader] = React.useState(false);
  const [districtLoader, setDistrictLoader] = React.useState(false);
  const [provinceList, setProvinceList] = React.useState<
    Array<{ label: string; value: string }>
  >([]);
  const [districtList, setDistrictList] = React.useState<
    Array<{ label: string; value: string }>
  >([]);

  const { successToast, errorToast } = useToaster();

  const formik = useFormik({
    initialValues: {
      program_id: "",
      title: "",
      province_id: "",
      district_id: "",
      start_date: null as Date | null,
      end_date: null,
    },
    validationSchema: projectSchema,
    onSubmit: () => {
      setIsLoading(true);
      console.log(formik.values);
      authAxios
        .post("/create/project", { ...formik.values })
        .then((res) => {
          console.log(res);
          successToast("Project created successfully.");
        })
        .catch((err) => {
          const errorObj = getApiResponseErrorObj(err);
          setFormikResponseError(formik, errorObj);
          getApiResponseErrorToast(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
  });

  // Fetch Province list
  React.useEffect(() => {
    if (!isCreateModalOpen) return;
    setProvinceLoader(true);
    authAxios("/provinces")
      .then((res) => {
        const { data = [] } = res || {};
        setProvinceList(convertProvinceList(data));
      })
      .catch((err) => {
        getApiResponseErrorToast(err);
      })
      .finally(() => {
        setProvinceLoader(false);
      });
  }, [isCreateModalOpen]);

  const handleProvinceChange = (item: SingleValue<Option>) => {
    const { value = "" } = item || {};

    if (!value) {
      errorToast("Province value is empty");
      return;
    }
    setDistrictLoader(true);
    formik.setFieldValue("province_id", item?.value);

    authAxios
      .get(`/districts/${value}`)
      .then((res) => {
        const { data = [] } = res || [];
        console.log(data);
        setDistrictList(convertDistrictList(data));
      })
      .catch((err) => {
        getApiResponseErrorToast(err);
      })
      .finally(() => {
        setDistrictLoader(false);
      });
  };

  return (
    <Modal
      isOpen={isCreateModalOpen}
      onClose={() => setIsCreateModalOpen(false)}
      headerTitle="Create New Project"
      headerSubTitle="Enter the project details below"
    >
      <StyledDiv>
        <Select
          name="program_id"
          options={programOption}
          placeholder="Select Program"
          label="Program"
          onChange={(item) => formik.setFieldValue("program_id", item?.value)}
          value={formik.values.program_id}
          onBlur={() => formik.setFieldTouched("program", true)}
          error={formik.errors.program_id}
          touched={formik.touched.program_id}
        />

        <InputField
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          label="Project title"
          type="text"
          placeholder="Enter project title"
          onBlur={formik.handleBlur}
          error={formik.errors.title}
          touched={formik.touched.title}
        />

        <Select
          name="province_id"
          options={provinceList}
          placeholder="Select province"
          label="Province"
          onChange={handleProvinceChange}
          value={formik.values.province_id}
          onBlur={() => formik.setFieldTouched("province_id", true)}
          error={formik.errors.province_id}
          touched={formik.touched.province_id}
          disabled={provinceLoader}
          isLoading={provinceLoader}
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
          disabled={!formik.values.province_id || districtLoader}
          isLoading={districtLoader}
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
            selected={formik.values.end_date}
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

        <div className="project-modal-btn-wrapper">
          <Button
            variant="outline"
            className="project-modal-cancel-btn"
            onClick={() => setIsCreateModalOpen(false)}
          >
            Cancel
          </Button>
          <Button
            onClick={() => formik.handleSubmit()}
            disabled={!formik.isValid || isLoading}
            loading={isLoading}
          >
            Create Project
          </Button>
        </div>
      </StyledDiv>
    </Modal>
  );
};

export default CreateProjectModal;
