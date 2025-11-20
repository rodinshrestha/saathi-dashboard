import React from "react";

import { FormikProps } from "formik";

import CheckBox from "@/components/CheckBox";
import TextArea from "@/components/TextArea";
import Typography from "@/components/Typography";

import { FamilyReintegrationFormType } from "../../family-reintegration.types";

import { StyledDiv } from "./style";

const supportOptions = [
  { label: "Medical", value: "medical" },
  { label: "Education", value: "education" },
  { label: "Food", value: "food" },
  { label: "Legal", value: "legal" },
  { label: "Psychological", value: "psychological" },
  { label: "Family Support", value: "family-support" },
  { label: "Coordination & Referral", value: "coordination-and-referral" },
  { label: "Follow Up", value: "follow-up" },
];

type Props = {
  formik: FormikProps<FamilyReintegrationFormType>;
};

const FamilyReintegrationNeedForm = ({ formik }: Props) => {
  return (
    <StyledDiv>
      <Typography as="p" className="form-title">
        Step 4: Child/Youth Needs
      </Typography>

      <div className="family-reintegration-need-form-wrapper">
        <CheckBox
          label="Select All Support Needs"
          options={supportOptions}
          selectedValues={formik.values.supports_need}
          onChange={(value) => formik.setFieldValue("supports_need", value)}
        />

        <TextArea
          name="coordination_and_referral_details"
          label="Coordination & Referral Details"
          placeholder="Specify organizations, agencies, or services for coordination and referral"
          className="bg-color"
          value={formik.values.coordination_and_referral_details}
          onChange={formik.handleChange}
        />

        <TextArea
          name="future_plan"
          label="Describe the future plan for the child/youth after reintegration, including educational goals, vocational training, family support plans, follow-up schedule, and long-term objectives"
          placeholder="Specify organizations, agencies, or services for coordination and referral"
          className="bg-color"
          value={formik.values.future_plan}
          onChange={formik.handleChange}
        />
      </div>
    </StyledDiv>
  );
};

export default FamilyReintegrationNeedForm;
