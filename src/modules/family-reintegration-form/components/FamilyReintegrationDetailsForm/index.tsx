import React from "react";

import { FormikProps } from "formik";

import DatePicker from "@/components/DatePicker";
import InputField from "@/components/InputField";
import { Select } from "@/components/Select";
import TextArea from "@/components/TextArea";
import Typography from "@/components/Typography";
import { BOOLEAN_OPTIONS } from "@/constant/boolean-select-options.constants";

import { FamilyReintegrationFormType } from "../../family-reintegration.types";

import { StyledDiv } from "./style";

type Props = {
  formik: FormikProps<FamilyReintegrationFormType>;
};

const FamilyReintegrationDetailsForm = ({ formik }: Props) => {
  return (
    <StyledDiv>
      <Typography as="p" className="form-title">
        Step 1: Basic Reintegration Details
      </Typography>
      <div className="family-reintegration-details-from-wrapper">
        <DatePicker
          label="Date of Reintegration"
          selected={formik.values.date_reintegration}
          onChange={(value) =>
            formik.setFieldValue("date_reintegration", value)
          }
          className="bg-color"
        />

        <InputField
          name="total_duration_of_service"
          label="Total Duration of Service"
          placeholder="e.g 2 years 3 months"
          className="bg-color"
          value={formik.values.total_duration_of_service}
          onChange={formik.handleChange}
        />

        <TextArea
          name="address_during_reintegration"
          label="Address During Reintegration"
          placeholder="Enter complete address where child/youth will be reintegrated (Province, District, Municipality, Ward, Tole)"
          className="bg-color"
          value={formik.values.address_during_reintegration}
          onChange={formik.handleChange}
        />

        <InputField
          name="age_during_reintegration"
          label="Age During Reintegration"
          placeholder="Enter current age"
          className="bg-color"
          value={formik.values.age_during_reintegration}
          onChange={formik.handleChange}
        />

        <InputField
          name="education"
          label="Education (School/College)"
          placeholder="Enter school or collage name"
          className="bg-color"
          value={formik.values.education}
          onChange={formik.handleChange}
        />

        <InputField
          name="grade"
          label="Grade"
          placeholder="e.g Grade 10, Bachelor`s 1st year"
          className="bg-color"
          value={formik.values.grade}
          onChange={formik.handleChange}
        />

        <Select
          options={BOOLEAN_OPTIONS}
          placeholder="Select"
          label="Medication Required?"
          onChange={(item) =>
            formik.setFieldValue("medication_required", item?.value)
          }
          value={formik.values.medication_required}
          className="bg-color"
        />

        <InputField
          name="medication_details"
          label="Medication Details"
          placeholder="If yes, describe medications, dosage, and duration"
          className="bg-color"
          value={formik.values.medication_details}
          onChange={formik.handleChange}
        />
      </div>
    </StyledDiv>
  );
};

export default FamilyReintegrationDetailsForm;
