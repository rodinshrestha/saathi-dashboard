import React from "react";

import { FormikProps } from "formik";

import DatePicker from "@/components/DatePicker";
import InputField from "@/components/InputField";
import { Select } from "@/components/Select";
import Typography from "@/components/Typography";

import { YouthProgramFormType } from "../../youth-program-form.types";

import { StyledDiv } from "./style";

const facuiltyOptions = [
  { label: "Humanities", value: "humanities" },
  { label: "Management", value: "management" },
  { label: "Science", value: "science" },
  { label: "Engineering", value: "engineering" },
  { label: "Medicine", value: "medicine" },
  { label: "Law", value: "law" },
  { label: "Education", value: "education" },
  { label: "other", value: "other" },
];

type Props = {
  formik: FormikProps<YouthProgramFormType>;
};

const YouthBasicInfoForm = ({ formik }: Props) => {
  return (
    <StyledDiv>
      <Typography as="p" className="form-title">
        Step 1: Basic & Academic Information
      </Typography>

      <div className="youth-basic-inforamtion-form-wrapper">
        <InputField
          name="registration_no"
          label="Registration No."
          placeholder="Enter registration number"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.registration_no}
        />
        <DatePicker
          label="Registration Date"
          selected={formik.values.enter_date_at_saathi}
          placeholder="dd/mm/yyyy"
          onChange={(value) =>
            formik.setFieldValue("enter_date_at_saathi", value)
          }
          className="bg-color"
        />
        <InputField
          name="name"
          label="Name"
          placeholder="Enter youth`s full name"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <InputField
          name="age"
          label="Age"
          placeholder="Enter age"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.age}
        />

        <InputField
          name="grade"
          label="Grade/Level"
          placeholder="e.g, Bachelor`s 1st year"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.grade}
        />

        <InputField
          name="college_name"
          label="College Name"
          placeholder="Enter college name"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.college_name}
        />

        <Select
          options={facuiltyOptions}
          placeholder="Select faculty"
          label="Faculty"
          onChange={(item) => formik.setFieldValue("facuilty", item?.value)}
          value={formik.values.facuilty}
          className="bg-color"
        />

        <InputField
          name="current_semester_year"
          label="Current Semester/year"
          placeholder="e.g, 2 semester"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.current_semester_year}
        />

        <DatePicker
          label="Date of Joining College"
          selected={formik.values.date_of_joining_college}
          placeholder="dd/mm/yyyy"
          onChange={(value) =>
            formik.setFieldValue("date_of_joining_college", value)
          }
          className="bg-color"
        />

        <InputField
          name="duration_of_course"
          label="Duration of course"
          placeholder="e.g, 4 years"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.duration_of_course}
        />

        <InputField
          name="attendance"
          label="Attendance %"
          placeholder="enter attendance percentage"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.attendance}
        />

        <DatePicker
          label="College Visit Date"
          selected={formik.values.college_visit_date}
          placeholder="dd/mm/yyyy"
          onChange={(value) =>
            formik.setFieldValue("college_visit_date", value)
          }
          className="bg-color"
        />
        <DatePicker
          label="Date Settled in Youth Program"
          selected={formik.values.date_settled_in_youth_program}
          placeholder="dd/mm/yyyy"
          onChange={(value) =>
            formik.setFieldValue("date_settled_in_youth_program", value)
          }
          className="bg-color"
        />
      </div>
    </StyledDiv>
  );
};

export default YouthBasicInfoForm;
