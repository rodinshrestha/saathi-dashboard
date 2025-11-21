import React from "react";

import { FormikProps } from "formik";

import DatePicker from "@/components/DatePicker";
import InputField from "@/components/InputField";
import { Select } from "@/components/Select";
import Typography from "@/components/Typography";

import { UNFPAFormType } from "../../unfpa.types";

import { StyledDiv } from "./style";

type Props = {
  formik: FormikProps<UNFPAFormType>;
};

const caseTypeOptions = [
  { label: "New", value: "new" },
  { label: "Follow-up", value: "follow-up" },
  { label: "Referred", value: "referred" },
];

const GeneralInfoForm = ({ formik }: Props) => {
  return (
    <StyledDiv>
      <Typography as="p" className="form-title">
        Section 1: General Information
      </Typography>

      <div className="unfa-form-list">
        <DatePicker
          placeholder="dd/mm/yyyy"
          label="Registration Date"
          className="bg-color"
          selected={formik.values.registration_date}
          onChange={(value) => formik.setFieldValue("registration_date", value)}
        />
        <Select
          name="case_type"
          label="Case Type"
          options={caseTypeOptions}
          value={formik.values.case_type}
          onChange={(e) => formik.setFieldValue("case_type", e?.value)}
          className="bg-color"
        />

        <InputField
          name="safe_house_shelter_name"
          label="Safe House / Shelter Name"
          placeholder="Shelter name"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.safe_house_shelter_name}
        />
      </div>
    </StyledDiv>
  );
};

export default GeneralInfoForm;
