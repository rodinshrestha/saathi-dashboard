import React from "react";

import { FormikProps } from "formik";

import InputField from "@/components/InputField";
import { Select } from "@/components/Select";
import Typography from "@/components/Typography";
import { PreventionProgramFormType } from "@/modules/prevention-program-form/prevention-program.types";

import { StyledDiv } from "./style";

type Props = {
  formik: FormikProps<PreventionProgramFormType>;
};

const LocationDetailForm = ({ formik }: Props) => {
  return (
    <StyledDiv className="location-details-form-wrapper">
      <Typography as="p" className="form-title">
        Location Details
      </Typography>

      <div className="location-details-form-list">
        <Select
          label="Province"
          options={[{ label: "test", value: "test" }]}
          value={formik.values.province}
          onChange={(e) => formik.setFieldValue("province", e?.value)}
          className="bg-color"
        />

        <Select
          label="District"
          options={[{ label: "test", value: "test" }]}
          value={formik.values.district}
          onChange={(e) => formik.setFieldValue("district", e?.value)}
          className="bg-color"
        />

        <InputField
          name="address"
          label="Address"
          placeholder="Enter address"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.address}
        />

        <InputField
          name="ward"
          label="Ward"
          placeholder="Enter ward number"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.ward}
        />
        <InputField
          name="event_venue"
          label="Event Venue"
          placeholder="Enter venue name"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.event_venue}
        />
      </div>
    </StyledDiv>
  );
};

export default LocationDetailForm;
