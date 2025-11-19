import React from "react";

import { FormikProps } from "formik";

import TextArea from "@/components/TextArea";
import Typography from "@/components/Typography";

import { YouthProgramFormType } from "../../youth-program-form.types";

import { StyledDiv } from "./style";

type Props = {
  formik: FormikProps<YouthProgramFormType>;
};

const YouthAssessmentForm = ({ formik }: Props) => {
  return (
    <StyledDiv>
      <Typography as="p" className="form-title">
        Step 2: Assessment & Performance
      </Typography>

      <div className="youth-assessment-form-wrapper">
        <TextArea
          label="Background"
          name="background"
          placeholder="Enter basic information, family background, circumstances leading to youth program enrollment"
          value={formik.values.background}
          onChange={formik.handleChange}
          className="bg-color"
        />

        <TextArea
          label="Academic Performance"
          name="academic_performance"
          placeholder="Enter current academic performance, grades, achievements, strengths, and areas needing improvement"
          value={formik.values.academic_performance}
          onChange={formik.handleChange}
          className="bg-color"
        />

        <TextArea
          label="Behavior & Attitude"
          name="behaviour_and_attitude"
          placeholder="Enter observation about behaviour, attitude, social interactions, participations, discipline, and overall adjustment in college environment"
          value={formik.values.behaviour_and_attitude}
          onChange={formik.handleChange}
          className="bg-color"
        />

        <TextArea
          label="College Result"
          name="college_result"
          placeholder="Enter exam results, grades obtained, GPA/percentage, subject-wise performance"
          value={formik.values.college_result}
          onChange={formik.handleChange}
          className="bg-color"
        />

        <TextArea
          label="Overall Comments"
          name="overall_comments"
          placeholder="Enter overall assessment, progress evalution, recommendations, support needed, and fure plans"
          value={formik.values.overall_comments}
          onChange={formik.handleChange}
          className="bg-color"
        />
      </div>
    </StyledDiv>
  );
};

export default YouthAssessmentForm;
