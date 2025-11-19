import React from "react";

import { FormikProps } from "formik";

import TextArea from "@/components/TextArea";
import Typography from "@/components/Typography";

import { ChildFormType } from "../../child-form.types";

import { StyledDiv } from "./style";

type Props = {
  formik: FormikProps<ChildFormType>;
};

const ChildAssessmentForm = ({ formik }: Props) => {
  return (
    <StyledDiv>
      <Typography as="p" className="form-title">
        Step 2: Assessment
      </Typography>

      <div className="child-assessment-form-wrapper">
        <TextArea
          name="background"
          label="Background"
          placeholder="Enter brief case background, family sitation, and circumstances that led to registration"
          value={formik.values.background}
          onChange={formik.handleChange}
          className="bg-color"
        />
        <TextArea
          name="health_status"
          label="Health Status"
          placeholder="Enter current physcial health condition, medical needs, ongoing treatments, medications, or special care requirements"
          value={formik.values.health_status}
          onChange={formik.handleChange}
          className="bg-color"
        />

        <TextArea
          name="psychosocial_assessment"
          label="Psychosocial Assessment"
          placeholder="Enter summary of mental/emotional well-being, behabioral ovservations, trauma indicators, coping mechanisms, and counseling needs"
          value={formik.values.psychosocial_assessment}
          onChange={formik.handleChange}
          className="bg-color"
        />

        <TextArea
          name="overall_assessment"
          label="Overall Assessment"
          placeholder="Enter overall remarks, recommendations, immediate actions needed, and case management plan"
          value={formik.values.overall_assessment}
          onChange={formik.handleChange}
          className="bg-color"
        />
      </div>
    </StyledDiv>
  );
};

export default ChildAssessmentForm;
