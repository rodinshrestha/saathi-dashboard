import React from "react";

import { FormikProps } from "formik";

import DatePicker from "@/components/DatePicker";
import InputField from "@/components/InputField";
import { Select } from "@/components/Select";
import TextArea from "@/components/TextArea";
import Typography from "@/components/Typography";
import { REFERRED_OPTION_LIST } from "@/constant/referred-options.constant";

import { ChildFormType } from "../../child-form.types";

import { StyledDiv } from "./style";

const educationStatusOption = [
  { label: "Enrolled", value: "enrolled" },
  { label: "Not Enrolled", value: "not-enrolled" },
  { label: "Dropout", value: "dropout" },
];

type Props = {
  formik: FormikProps<ChildFormType>;
};

const ChildBasicInformation = ({ formik }: Props) => {
  return (
    <StyledDiv>
      <Typography as="p" className="form-title">
        Step 1: Basic Information
      </Typography>

      <div className="child-basic-information-form-wrapper">
        <InputField
          name="registration_no"
          label="Registration No."
          placeholder="Enter registration number"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.registration_no}
        />

        <DatePicker
          label="Registration Date"
          selected={formik.values.registration_date}
          placeholder="dd/mm/yyyy"
          onChange={(value) => formik.setFieldValue("registration_date", value)}
          className="bg-color"
        />

        <InputField
          name="full_name"
          label="Name"
          placeholder="Enter child full name"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.full_name}
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
          name="grade"
          label="Grade"
          placeholder="e.g Grade 5"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.grade}
        />

        <InputField
          name="school"
          label="School"
          placeholder="Enter school name"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.school}
        />

        <Select
          name="education_status"
          options={educationStatusOption}
          placeholder="Select education status"
          label="Education Status"
          onChange={(item) =>
            formik.setFieldValue("education_status", item?.value)
          }
          value={formik.values.education_status}
          className="bg-color"
        />

        <Select
          name="education_status"
          options={REFERRED_OPTION_LIST}
          placeholder="Select referral source"
          label="Reffered By"
          onChange={(item) => formik.setFieldValue("referred_by", item?.value)}
          value={formik.values.referred_by}
          className="bg-color"
        />
        <TextArea
          name="current_address"
          label="Current address"
          placeholder="Enter complete current address (Province, District, Municipality, Ward)"
          onChange={formik.handleChange}
          value={formik.values.current_address}
          className="bg-color"
        />
      </div>
    </StyledDiv>
  );
};

export default ChildBasicInformation;
