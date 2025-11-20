import React from "react";

import { FormikProps } from "formik";

import TextArea from "@/components/TextArea";
import Typography from "@/components/Typography";

import { ChildIntakeProgramFormType } from "../../child-intake-program-form.types";

import { StyledDiv } from "./style";

type Props = {
  formik: FormikProps<ChildIntakeProgramFormType>;
};

const ChildIntakeCaseHistoryForm = ({ formik }: Props) => {
  return (
    <StyledDiv>
      <Typography as="p" className="form-title">
        Step 6: Case History & Pschosocial Assessment
      </Typography>

      <div className="child-intake-case-history-form-wrapper">
        <TextArea
          name="family_background"
          label="Family Background"
          placeholder="Describe family structure, socio-economic status, living conditions, family dynamics, and relationships"
          value={formik.values.family_background}
          onChange={formik.handleChange}
          className="bg-color"
        />

        <TextArea
          name="reason_for_comming_to_shelter"
          label="Reason for comming to shelter"
          placeholder="Describe the incident for circumstances that led to the child comming to the shelter, including timeline and key events"
          value={formik.values.reason_for_comming_to_shelter}
          onChange={formik.handleChange}
          className="bg-color"
        />

        <TextArea
          name="initial_psychosocial_assessment"
          label="Initial Pschosocial Assessment"
          placeholder="Counselor`s initial observation about mental and emotional state, trauma indicators, coping mechanisms, behavioral patterns, and immediate psychological needs"
          value={formik.values.initial_psychosocial_assessment}
          onChange={formik.handleChange}
          className="bg-color"
        />
      </div>
    </StyledDiv>
  );
};

export default ChildIntakeCaseHistoryForm;
