import * as Yup from "yup";

export const projectSchema = Yup.object({
  program_id: Yup.string().required("Program is required"),
  event_title: Yup.string().required("Event title is requried"),
  project_title: Yup.string().required("project title is required"),
});
