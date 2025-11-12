import React from "react";

import { FormikProps } from "formik";

import DatePicker from "@/components/DatePicker";
import InputField from "@/components/InputField";
import { Select } from "@/components/Select";
import Typography from "@/components/Typography";

import { PreventionProgramFormType } from "../../prevention-program.types";

import { StyledDiv } from "./style";

type Props = {
  formik: FormikProps<PreventionProgramFormType>;
};

const ProjectProfileForm = ({ formik }: Props) => {
  return (
    <StyledDiv className="project-profile-form-wrapper">
      <Typography as="p" className="form-title">
        Project Profile
      </Typography>

      <div className="project-form-list">
        <InputField
          label="Project Title"
          placeholder="Auto-populated from event"
          className="bg-color"
          disabled
          readOnly
        />
        <Select
          name="event_title"
          label="Event Title"
          options={[{ label: "test", value: "test" }]}
          value={formik.values.event_title}
          onChange={(e) => formik.setFieldValue("event_title", e?.value)}
          className="bg-color"
        />

        <InputField
          name="activity_code"
          label="Activity Code"
          placeholder="Enter activity code"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.activity_code}
        />
        <InputField
          label="Fund Code"
          placeholder="Auto populated"
          className="bg-color"
          disabled
          readOnly
        />
        <InputField
          name="organizer"
          label="Organizer"
          placeholder="Enter Organizer name"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.organizer}
        />

        <DatePicker
          placeholder="dd/mm/yyyy"
          label="Start Date"
          className="bg-color"
          selected={formik.values.start_date}
          onChange={(value) => formik.setFieldValue("start_date", value)}
        />
        <DatePicker
          placeholder="dd/mm/yyyy"
          label="End Date"
          className="bg-color"
          selected={formik.values.end_date}
          onChange={(value) => formik.setFieldValue("end_date", value)}
        />
      </div>
    </StyledDiv>
  );
};

export default ProjectProfileForm;
