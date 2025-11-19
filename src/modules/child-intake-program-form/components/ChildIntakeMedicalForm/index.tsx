import React from "react";

import { FormikProps } from "formik";

import InputField from "@/components/InputField";
import { Select } from "@/components/Select";
import TextArea from "@/components/TextArea";
import Typography from "@/components/Typography";
import { BOOLEAN_OPTIONS } from "@/constant/boolean-select-options.constants";

import { ChildIntakeProgramFormType } from "../../child-intake-program-form.types";

import { StyledDiv } from "./style";

type Props = {
  formik: FormikProps<ChildIntakeProgramFormType>;
};

const ChildIntakeMedicalForm = ({ formik }: Props) => {
  return (
    <StyledDiv>
      <Typography as="p" className="form-title">
        Step 3: Health And Medical Information
      </Typography>

      <div className="child-intake-medical-form-wrapper">
        <InputField
          name="weight"
          label="Weight (KG)"
          placeholder="Enter weight"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.weight}
        />

        <InputField
          name="height"
          label="height (cm)"
          placeholder="Enter height"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.height}
        />

        <Select
          options={BOOLEAN_OPTIONS}
          placeholder="Select"
          label="Any Health Issues?"
          onChange={(item) =>
            formik.setFieldValue("any_health_issues", item?.value)
          }
          value={formik.values.any_health_issues}
          className="bg-color"
        />

        <TextArea
          name="health_issue_details"
          label="Health Issues Details"
          placeholder="If yes, describe health issues, conditions, or chronic, illnesses"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.health_issue_details}
        />

        <Select
          options={BOOLEAN_OPTIONS}
          placeholder="Select"
          label="Any Disability?"
          onChange={(item) =>
            formik.setFieldValue("any_disability", item?.value)
          }
          value={formik.values.any_disability}
          className="bg-color"
        />

        <TextArea
          name="type_of_disability"
          label="Type of Disability"
          placeholder="If yes, specify type"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.type_of_disability}
        />

        <Select
          options={BOOLEAN_OPTIONS}
          placeholder="Select"
          label="Any Ongoing Medication??"
          onChange={(item) =>
            formik.setFieldValue("any_ongoing_medication", item?.value)
          }
          value={formik.values.any_ongoing_medication}
          className="bg-color"
        />

        <TextArea
          name="medication_details"
          label="Medication Details"
          placeholder="If yes, describe medications, dosage, frequency, and duration"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.medication_details}
        />
      </div>
    </StyledDiv>
  );
};

export default ChildIntakeMedicalForm;
