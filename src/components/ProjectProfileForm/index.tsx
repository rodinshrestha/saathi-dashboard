import React from "react";

import { FormikProps } from "formik";
import { SingleValue } from "react-select";

import DatePicker from "@/components/DatePicker";
import InputField from "@/components/InputField";
import { Option, Select } from "@/components/Select";
import Typography from "@/components/Typography";
import { getEventProject } from "@/http/get-event-list";
import { PreventionProgramFormType } from "@/modules/prevention-program-form/prevention-program.types";
import { EventDataTypes } from "@/types/event-data.types";
import { getApiResponseErrorToast } from "@/utils/get-api-response-error-toast";
import { getEventOptionList } from "@/utils/get-event-option-list";

import { StyledDiv } from "./style";

type Props = {
  formik: FormikProps<PreventionProgramFormType>;
  eventData: Array<EventDataTypes>;
};

const ProjectProfileForm = ({ formik, eventData }: Props) => {
  const [projectTitle, setProjectTitle] = React.useState("");
  const [loader, setLoader] = React.useState(false);

  const handleEventChange = (e: SingleValue<Option>) => {
    setLoader(true);
    const value = e?.value;
    formik.setFieldValue("event_id", value);
    formik.setFieldValue("project_id", value);

    getEventProject(value as number)
      .then((res) => {
        const { project_title = "" } = res?.data?.data || {};

        setProjectTitle(project_title);
      })
      .catch((err) => {
        getApiResponseErrorToast(err);
      })
      .finally(() => {
        setLoader(false);
      });
  };

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
          value={projectTitle}
          loader={loader}
          disabled
          readOnly
        />
        <Select
          name="event_title"
          label="Event Title"
          options={getEventOptionList(eventData)}
          value={formik.values.event_id}
          onChange={handleEventChange}
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
