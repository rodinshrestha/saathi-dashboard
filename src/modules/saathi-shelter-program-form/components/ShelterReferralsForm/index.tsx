import React from "react";

import { FormikProps } from "formik";

import DatePicker from "@/components/DatePicker";
import InputField from "@/components/InputField";
import Typography from "@/components/Typography";

import { SaathiShelterProgramFormType } from "../../saathi-shelter.types";

import { StyledDiv } from "./style";

type Props = {
  formik: FormikProps<SaathiShelterProgramFormType>;
};

const ShelterReferralsForm = ({ formik }: Props) => {
  return (
    <StyledDiv>
      <Typography as="p" className="form-title">
        Section 3: Referrals
      </Typography>
      <div className="shelter-referrals-form-list-wrapper">
        <InputField
          name="referred_form"
          label="Referred Form"
          placeholder="Referring organization"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.referred_form}
        />
        <InputField
          name="referred_to_by_saathi"
          label="Referred to by Saathi"
          placeholder="Referring to organization"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.referred_to_by_saathi}
        />

        <DatePicker
          name="date_of_entry"
          label="Date of Entry"
          placeholder="dd/mm/yyyy"
          className="bg-color"
          onChange={(value) =>
            formik.setFieldValue("referred_date_of_entry", value)
          }
          selected={formik.values.referred_date_of_entry}
        />

        <DatePicker
          name="date_of_discharge"
          label="Date of Discharge"
          placeholder="dd/mm/yyyy"
          className="bg-color"
          onChange={(value) => formik.setFieldValue("date_of_discharge", value)}
          selected={formik.values.date_of_discharge}
        />
      </div>
    </StyledDiv>
  );
};

export default ShelterReferralsForm;
