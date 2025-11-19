import React from "react";

import { FormikProps } from "formik";

import TextArea from "@/components/TextArea";
import Typography from "@/components/Typography";

import { SaathiShelterProgramFormType } from "../../saathi-shelter.types";

import { StyledDiv } from "./style";

type Props = {
  formik: FormikProps<SaathiShelterProgramFormType>;
};

const ShelterAdditionalForm = ({ formik }: Props) => {
  return (
    <StyledDiv>
      <Typography as="p" className="form-title">
        Section 7: Current Status and Remarks
      </Typography>
      <div className="shelter-additional-form-wrapper">
        <TextArea
          name="current_status_of_survivor_and_dependents"
          label="Current Status of survivor and Dependents"
          placeholder="Describe current status..."
          onChange={formik.handleChange}
          value={formik.values.current_status_of_survivor_and_dependents}
          className="bg-color"
        />
        <TextArea
          name="other_remarks"
          label="Other Remarks / Notes"
          placeholder="Additional Information"
          onChange={formik.handleChange}
          value={formik.values.other_remarks}
          className="bg-color"
        />
      </div>
    </StyledDiv>
  );
};

export default ShelterAdditionalForm;
