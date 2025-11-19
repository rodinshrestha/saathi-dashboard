import React from "react";

import { FormikProps } from "formik";
import { SingleValue } from "react-select";

import CheckBox from "@/components/CheckBox";
import DatePicker from "@/components/DatePicker";
import InputField from "@/components/InputField";
import { Option, Select } from "@/components/Select";
import TextArea from "@/components/TextArea";
import Typography from "@/components/Typography";
import { DISABILITY_OPTIONS } from "@/constant/disability-options.constant";
import { ETHNICITY_OPTIONS } from "@/constant/ethnicity-options.constant";
import { MARITAL_OPTIONS_LIST } from "@/constant/marital-status.options.constant";
import { PREGNANCY_OPTIONS_LIST } from "@/constant/pregnancy-options.constant";
import { VIOLENCE_IMPACT_OPTIONS } from "@/constant/violence-impact-options.constant";
import { VIOLENCE_OPTIONS_LIST } from "@/constant/violence-options.constant";
import useToaster from "@/hooks/useToaster";
import { convertDistrictList } from "@/modules/projects/utils/convert-district-list";
import { convertProvinceList } from "@/modules/projects/utils/convert-province-list";
import { initializeDistrictList } from "@/modules/projects/utils/initialize-district-list";
import { useGlobalStore } from "@/store/useGlobalConfigStore";

import { SaathiShelterProgramFormType } from "../../saathi-shelter.types";

import { StyledDiv } from "./style";

type Props = {
  formik: FormikProps<SaathiShelterProgramFormType>;
};

const ShelterSurvivorForm = ({ formik }: Props) => {
  const { errorToast } = useToaster();
  const { provinceData, globalLoader } = useGlobalStore();

  const [districtList, setDistrictList] = React.useState<Array<Option>>(
    initializeDistrictList(provinceData, Number(formik.values.province))
  );

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

  return (
    <StyledDiv>
      <Typography as="p" className="form-title">
        Section 3: Referral and Case Details
      </Typography>

      <div className="shelter-survivor-form-list-wrapper">
        <InputField
          name="name"
          label="Name"
          placeholder="Survivor name"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.name}
        />

        <DatePicker
          placeholder="dd/mm/yyyy"
          label="Registration Date"
          className="bg-color"
          selected={formik.values.date_of_entry}
          onChange={(value) => formik.setFieldValue("date_of_entry", value)}
        />

        <InputField
          name="code_no"
          label="Code No"
          placeholder="Unique code"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.code_no}
        />
        <InputField
          name="age_of_survivor"
          label="Age of Survivor"
          placeholder="Age"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.age_of_survivor}
        />

        <InputField
          name="number_of_dependent_children"
          label="Number of Dependents (Children)"
          placeholder="Number"
          type="number"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.number_of_dependent_children}
        />

        <InputField
          name="dependent_age_gender"
          label="Dependent Age / Gender"
          placeholder="E.g 5/M 8/F"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.dependent_age_gender}
        />

        <Select
          name="province"
          options={convertProvinceList(provinceData)}
          placeholder="province"
          label="Province"
          onChange={handleProvinceChange}
          value={formik.values.province}
          disabled={globalLoader}
          isLoading={globalLoader}
          className="bg-color"
        />

        <Select
          name="district"
          options={districtList}
          placeholder="Select district"
          label="District"
          onChange={(item) => formik.setFieldValue("district", item?.value)}
          value={formik.values.district}
          showTooltip={!formik.values.province}
          tooltipMsg="First select the province"
          disabled={!formik.values.province}
          className="bg-color"
        />

        <Select
          name="enthnicity"
          options={ETHNICITY_OPTIONS}
          placeholder="Select ethnicity"
          label="Ethnicity"
          onChange={(item) => formik.setFieldValue("enthnicity", item?.value)}
          value={formik.values.enthnicity}
          className="bg-color"
        />

        <Select
          name="violence"
          options={VIOLENCE_OPTIONS_LIST}
          placeholder="Select type"
          label="Type of Violence"
          onChange={(item) =>
            formik.setFieldValue("type_of_violence", item?.value)
          }
          value={formik.values.type_of_violence}
          className="bg-color"
        />

        <Select
          name="marital_status"
          options={MARITAL_OPTIONS_LIST}
          placeholder="Select status"
          label="Marital Status"
          onChange={(item) =>
            formik.setFieldValue("marital_status", item?.value)
          }
          value={formik.values.marital_status}
          className="bg-color"
        />

        <Select
          name="pregnancy_status"
          options={PREGNANCY_OPTIONS_LIST}
          placeholder="Select status"
          label="Pregnancy Status"
          onChange={(item) =>
            formik.setFieldValue("pregnancy_status", item?.value)
          }
          value={formik.values.pregnancy_status}
          className="bg-color"
        />

        <Select
          name="disability_status"
          options={DISABILITY_OPTIONS}
          placeholder="Select status"
          label="Disability Status"
          onChange={(item) =>
            formik.setFieldValue("disability_status", item?.value)
          }
          value={formik.values.disability_status}
          className="bg-color"
        />

        <CheckBox
          label="Impact of Violence (Multi-select)"
          options={VIOLENCE_IMPACT_OPTIONS}
          selectedValues={formik.values.impact_of_violence}
          onChange={(values: string[]) =>
            formik.setFieldValue("impact_of_violence", values)
          }
        />

        <TextArea
          name="reason_for_comming_to_shelter"
          label="Reason for Comming to Shelter"
          placeholder="Describe the reason"
          onChange={formik.handleChange}
          value={formik.values.reason_for_comming_to_shelter}
          className="bg-color"
        />
      </div>
    </StyledDiv>
  );
};

export default ShelterSurvivorForm;
