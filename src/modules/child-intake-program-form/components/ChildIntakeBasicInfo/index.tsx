import React from "react";

import { FormikProps } from "formik";

import CheckBox from "@/components/CheckBox";
import DatePicker from "@/components/DatePicker";
import InputField from "@/components/InputField";
import { Select } from "@/components/Select";
import Typography from "@/components/Typography";
import { ETHNICITY_OPTIONS } from "@/constant/ethnicity-options.constant";
import { GENDER_OPTION_LIST } from "@/constant/gender-options.constants";
import { REFERRED_OPTION_LIST } from "@/constant/referred-options.constant";
import { RELIGION_OPTIONS } from "@/constant/religion-options.constant";

import { ChildIntakeProgramFormType } from "../../child-intake-program-form.types";

import { StyledDiv } from "./style";

const vitialDoucmentsOption = [
  { label: "Birth Certificate", value: "birth-certificate" },
  { label: "Citizenship", value: "citizenship" },
  { label: "Death Certificate", value: "death-certificate" },
  { label: "Referral Letter", value: "refferal-letter" },
  { label: "School Certiciate", value: "school-certificate" },
  { label: "Other", value: "other" },
];

type Props = {
  formik: FormikProps<ChildIntakeProgramFormType>;
};

const ChildIntakeBasicInfo = ({ formik }: Props) => {
  return (
    <StyledDiv>
      <Typography as="p" className="form-title">
        Step 1: Basic Information
      </Typography>

      <div className="child-intake-basic-form-wrapper">
        <InputField
          name="case_code"
          label="Case Code"
          placeholder="System generated"
          className="bg-color"
          value={formik.values.case_code}
          readOnly
        />
        <InputField
          name="full_name"
          label="Full Name"
          placeholder="Enter child full name"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.full_name}
        />

        <InputField
          name="registration_number"
          label="Registration Number(Old Beneficiaries)"
          placeholder="if applicable"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.registration_number}
        />

        <DatePicker
          label="Registration Date"
          placeholder="dd/mm/yyyy"
          selected={formik.values.registration_date}
          onChange={(value) => formik.setFieldValue("registration_date", value)}
          className="bg-color"
        />

        <InputField
          name="indentification_cues"
          label="Identification Cues"
          placeholder="Appearance markkers, scars, birthmarks, etc"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.indentification_cues}
        />

        <Select
          options={GENDER_OPTION_LIST}
          placeholder="Select gender"
          label="Gender"
          onChange={(item) => formik.setFieldValue("gender", item?.value)}
          value={formik.values.gender}
          className="bg-color"
        />

        <DatePicker
          label="Date of Birth (B.S)"
          placeholder="dd/mm/yyyy"
          selected={formik.values.date_of_birth_bs}
          onChange={(value) => formik.setFieldValue("date_of_birth_bs", value)}
          className="bg-color"
        />

        <DatePicker
          label="Date of Birth (A.D)"
          placeholder="dd/mm/yyyy"
          selected={formik.values.date_of_birth_ad}
          onChange={(value) => formik.setFieldValue("date_of_birth_ad", value)}
          className="bg-color"
        />

        <InputField
          name="age"
          label="Age"
          placeholder="Enter age"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.age}
        />

        <InputField
          name="nationality"
          label="Nationality"
          placeholder="e.g Nepali"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.nationality}
        />

        <InputField
          name="nationality"
          label="Nationality"
          placeholder="e.g Nepali"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.nationality}
        />

        <Select
          options={REFERRED_OPTION_LIST}
          placeholder="Select referral source"
          label="Referred From"
          onChange={(item) =>
            formik.setFieldValue("referred_from", item?.value)
          }
          value={formik.values.referred_from}
          className="bg-color"
        />

        <Select
          options={REFERRED_OPTION_LIST}
          placeholder="Select referral source"
          label="Referred To"
          onChange={(item) => formik.setFieldValue("referred_to", item?.value)}
          value={formik.values.referred_to}
          className="bg-color"
        />

        <Select
          options={RELIGION_OPTIONS}
          placeholder="Select religion"
          label="Religion"
          onChange={(item) => formik.setFieldValue("religion", item?.value)}
          value={formik.values.religion}
          className="bg-color"
        />

        <Select
          options={ETHNICITY_OPTIONS}
          placeholder="Select ethnicity"
          label="Ethnic or Case Identity"
          onChange={(item) => formik.setFieldValue("ethnic", item?.value)}
          value={formik.values.ethnic}
          className="bg-color"
        />

        <InputField
          name="mother_tounge"
          label="Mother Tounge"
          placeholder="Enter mother tounge"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.mother_tounge}
        />

        <CheckBox
          label="Vital documents"
          selectedValues={formik.values.vital_doucments}
          options={vitialDoucmentsOption}
          onChange={(value: Array<string>) =>
            formik.setFieldValue("vital_doucments", value)
          }
        />

        <InputField
          name="hospital_name"
          label="Hospital Name"
          placeholder="Enter hispital name"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.hospital_name}
        />

        <InputField
          name="hospital_address"
          label="Hospital address"
          placeholder="Enter hispital address"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.hospital_address}
        />

        <InputField
          name="birth_year"
          label="Birth year"
          placeholder="e.g 2070 B.S"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.birth_year}
        />
      </div>
    </StyledDiv>
  );
};

export default ChildIntakeBasicInfo;
