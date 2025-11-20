import React from "react";

import { FormikProps } from "formik";

import CheckBox from "@/components/CheckBox";
import InputField from "@/components/InputField";
import { Select } from "@/components/Select";
import TextArea from "@/components/TextArea";
import Typography from "@/components/Typography";
import { BOOLEAN_OPTIONS } from "@/constant/boolean-select-options.constants";

import { ChildIntakeProgramFormType } from "../../child-intake-program-form.types";

import { StyledDiv } from "./style";

const childrenProgramOptions = [
  {
    label: "Residential support in safer home",
    value: "residental-support-in-safer-home",
  },
  { label: "Medical support", value: "medical-support" },
  { label: "Psychosocial counselling", value: "psychosocial-counselling" },
  { label: "Formal Education", value: "formal-education" },
  { label: "Vocational Training", value: "vocational-training" },
  { label: "Diploma course", value: "diploma-course" },
  { label: "Summer clothes", value: "summer-clothes" },
  { label: "Winter clothes", value: "winter-clothes" },
  { label: "Festival clothes", value: "festival-clothes" },
  { label: "Stationery", value: "stationery" },
  { label: "Life skill training", value: "life-skill-training" },
  { label: "Family support", value: "family-support" },
  { label: "Legal support", value: "legal-support" },
];

const diplomaCourseOption = [
  { label: "Six Month", value: "six-month" },
  { label: "Nine Month", value: "nine-month" },
  { label: "One year", value: "one-year" },
  { label: "Eighteen Month", value: "eighteen-month" },
  { label: "Three years", value: "three-years" },
];

const vocationalTrainingDurationOption = [
  { label: "Three month", value: "three-month" },
  { label: "Six month", value: "six-month" },
  { label: "One year", value: "one-year" },
];

const vocationalTrainingSupport = [
  { label: "House Rent", value: "house-rent" },
  { label: "Fooding", value: "fooding" },
  { label: "Pocket Money", value: "pocket-money" },
  { label: "Stationery", value: "stationery" },
  { label: "Tiffin and Transportation", value: "tiffin-and-transportation" },
  { label: "Medical Support", value: "medical-support" },
  { label: "Family Support", value: "family-support" },
  { label: "Clothes", value: "clothes" },
  { label: "Miscellaneous", value: "miscellaneous" },
  {
    label: "Support for Foreign Language Test",
    value: "support-for-foreign-language-test",
  },
];

type Props = {
  formik: FormikProps<ChildIntakeProgramFormType>;
};

const ChildIntakeServiceForm = ({ formik }: Props) => {
  return (
    <StyledDiv>
      <Typography as="p" className="form-title">
        Step 8: Service and Suport
      </Typography>
      <div className="child-intake-service-form-wrapper">
        <CheckBox
          label="Children Program - Safer Home"
          options={childrenProgramOptions}
          onChange={(value: Array<string>) =>
            formik.setFieldValue("children_program", value)
          }
          selectedValues={formik.values.children_program}
        />
        <InputField
          name="formal_education_school_name"
          label="School Name"
          placeholder="Name of school"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.formal_education_school_name}
        />

        <InputField
          name="formal_education_grade"
          label="School grade"
          placeholder="grade"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.formal_education_grade}
        />

        <InputField
          name="formal_education_school_address"
          label="School address"
          placeholder="School address"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.formal_education_school_address}
        />

        <TextArea
          name="legal_support_details"
          label="Legal support details (Court process / Brith certificate / Citizenship / Family Property)"
          placeholder="Describe legal support provided"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.legal_support_details}
        />

        <CheckBox
          label="Diploma course"
          options={diplomaCourseOption}
          onChange={(value: Array<string>) =>
            formik.setFieldValue("diploma_course_duration", value)
          }
          selectedValues={formik.values.diploma_course_duration}
        />

        <TextArea
          name="diploma_course_details"
          label="Diploma course details"
          placeholder="Describe course details"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.diploma_course_details}
        />

        <InputField
          name="bachelor"
          label="Bachelor"
          placeholder="Bachelor program details"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.bachelor}
        />

        <InputField
          name="master"
          label="Master"
          placeholder="Master program details"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.master}
        />

        <CheckBox
          label="Vocational Training"
          options={vocationalTrainingDurationOption}
          onChange={(value: Array<string>) =>
            formik.setFieldValue("vocational_training_duration", value)
          }
          selectedValues={formik.values.vocational_training_duration}
        />

        <InputField
          name="vocational_training_details"
          label="Vocational training details"
          placeholder="Training details"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.vocational_training_details}
        />

        <CheckBox
          label="Vocational Training Support"
          options={vocationalTrainingSupport}
          onChange={(value: Array<string>) =>
            formik.setFieldValue("vocational_training_support", value)
          }
          selectedValues={formik.values.vocational_training_support}
        />

        <TextArea
          name="abroad_support_internship"
          label="Abroad Support Internship"
          placeholder="Internship details"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.abroad_support_internship}
        />

        <TextArea
          name="loan_support_for_abroad"
          label="Loan Support for Abroad"
          placeholder="loan details..."
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.loan_support_for_abroad}
        />

        <TextArea
          name="internship_details"
          label="Internship"
          placeholder="Internship details"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.internship_details}
        />

        <TextArea
          name="job_placement"
          label="Job Placement"
          placeholder="Job placement details..."
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.job_placement}
        />

        <TextArea
          name="follow_up"
          label="Follow Up"
          placeholder="Follow up details..."
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.follow_up}
        />

        <Select
          label="Has scholarship in program"
          options={BOOLEAN_OPTIONS}
          onChange={(e) =>
            formik.setFieldValue("has_scholarship_in_program", e?.value)
          }
          value={formik.values.has_scholarship_in_program}
          className="bg-color"
        />

        <TextArea
          name="scholarship_details"
          label="Scholarship details"
          placeholder="Scholarship details..."
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.scholarship_details}
        />

        <InputField
          name="staff_name"
          label="Staff Name"
          placeholder="Enter staff name"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.staff_name}
        />

        <InputField
          name="staff_position"
          label="Staff Position"
          placeholder="Enter staff position"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.staff_position}
        />
      </div>
    </StyledDiv>
  );
};

export default ChildIntakeServiceForm;
