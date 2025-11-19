import React from "react";

import { FormikProps } from "formik";

import { Select } from "@/components/Select";
import Typography from "@/components/Typography";

import { SaathiShelterProgramFormType } from "../../saathi-shelter.types";

import { StyledDiv } from "./style";

type Props = {
  formik: FormikProps<SaathiShelterProgramFormType>;
};

const ShelterDurationForm = ({ formik }: Props) => {
  const durationOption = [
    { label: "0-3months", value: "0-3months" },
    { label: "4-6 months", value: "4-6months" },
    { label: "7-12 months", value: "7-12months" },
    { label: "13-24 months", value: "13-24months" },
    { label: "Over 24 months", value: "over-24-months" },
  ];

  return (
    <StyledDiv>
      <Typography as="p" className="form-title">
        Section 4: Duration of Stay
      </Typography>
      <div>
        <Select
          name="duration_range"
          options={durationOption}
          placeholder="Select duration"
          label="Select Dueration range"
          onChange={(e) => formik.setFieldValue("duration_range", e?.value)}
          value={formik.values.duration_range}
          className="bg-color"
        />
      </div>
    </StyledDiv>
  );
};

export default ShelterDurationForm;
