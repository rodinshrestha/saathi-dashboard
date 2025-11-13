import React from "react";

import { FormikProps } from "formik";

import TextArea from "@/components/TextArea";
import Typography from "@/components/Typography";

import { UNFPAFormType } from "../../unfpa.types";

import { StyledDiv } from "./style";

type Props = {
  formik: FormikProps<UNFPAFormType>;
};

const AdditionalInfoForm = ({ formik }: Props) => {
  return (
    <StyledDiv>
      <Typography as="p" className="form-title">
        Section 4: Additional Information
      </Typography>
      <div className="unfa-form-list">
        <TextArea
          name="additional_information_or_notes"
          label="Additional Information / Notes"
          placeholder="Any additional relevant information..."
          onChange={formik.handleChange}
          value={formik.values.additional_information_or_notes}
          className="bg-color"
        />
      </div>
    </StyledDiv>
  );
};

export default AdditionalInfoForm;
