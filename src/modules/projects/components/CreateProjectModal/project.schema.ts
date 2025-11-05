import * as Yup from "yup";

export const projectSchema = Yup.object({
  program_id: Yup.string().required("Program is required"),
  event_title: Yup.string().required("Event title is requried"),
  project_title: Yup.string().required("project title is required"),
  province_id: Yup.string().required("province is required"),
  district_id: Yup.string().required("Distrcit is required"),
  start_date: Yup.string().required("Start date is required"),
  end_date: Yup.string().required("End Date is required"),
});
