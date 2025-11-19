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

const ChildIntakeEducationForm = ({ formik }: Props) => {
  return (
    <StyledDiv>
      <Typography as="p" className="form-title">
        Step 4: Education Details
      </Typography>

      <div className="child-intake-form-education-wrapper">
        <InputField
          name="school_name"
          label="School Name"
          placeholder="Enter school name"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.school_name}
        />

        <InputField
          name="school_address"
          label="School Address"
          placeholder="Enter school address"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.school_address}
        />

        <InputField
          name="school_grade"
          label="School grade"
          placeholder="Enter school grade"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.school_grade}
        />

        <TextArea
          name="reason_for_dropout"
          label="If not studying: Reason for Dropout"
          placeholder="If child is not studying, explain the reason for dropout or not enrolling"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.reason_for_dropout}
        />

        <Select
          options={BOOLEAN_OPTIONS}
          placeholder="Select"
          label="Was the child engaged in labour"
          onChange={(item) =>
            formik.setFieldValue("child_engaged_in_labour", item?.value)
          }
          value={formik.values.child_engaged_in_labour}
          className="bg-color"
        />

        <TextArea
          name="child_labour_details"
          label="Child labour details"
          placeholder="If yes, describe type of labour, duration, working conditions and impact"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.child_labour_details}
        />
      </div>
    </StyledDiv>
  );
};

export default ChildIntakeEducationForm;
