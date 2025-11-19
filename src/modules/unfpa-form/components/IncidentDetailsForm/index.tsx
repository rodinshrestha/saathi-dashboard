import React from "react";

import { FormikProps } from "formik";

import DatePicker from "@/components/DatePicker";
import InputField from "@/components/InputField";
import { Select } from "@/components/Select";
import TextArea from "@/components/TextArea";
import Typography from "@/components/Typography";
import { BOOLEAN_OPTIONS } from "@/constant/boolean-select-options.constants";
import { GENDER_OPTION_LIST } from "@/constant/gender-options.constants";
import { VIOLENCE_OPTIONS_LIST } from "@/constant/violence-options.constant";

import { UNFPAFormType } from "../../unfpa.types";

import { StyledDiv } from "./style";

type Props = {
  formik: FormikProps<UNFPAFormType>;
};

const incidentOptions = [
  {
    label: "Home",
    value: "home",
  },
  {
    label: "Work Place",
    value: "work-place",
  },
  {
    label: "Public Place",
    value: "public-place",
  },
  {
    label: "School",
    value: "school",
  },
  {
    label: "Other",
    value: "other",
  },
];

const subTypeOptions = [
  { label: "Rape", value: "rape" },
  { label: "Attempted Rape", value: "attempted-rape" },
  { label: "Domestic Violence", value: "domestic-violence" },
  { label: "Child Marriage", value: "child-marriage" },
  {
    label: "Polygamy",
    value: "polygamy",
  },
  {
    label: "Dowry",
    value: "dowry",
  },
  { label: "Other", value: "other" },
];

const perpetratorRelationshipOptions = [
  { label: "Husband", value: "husband" },
  { label: "Father", value: "father" },
  { label: "Relative", value: "relative" },
  { label: "Stranger", value: "stranger" },
  { label: "Employer", value: "employer" },
  { label: "Other", value: "other" },
];

const policeCaseOptions = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" },
  { label: "Pending", value: "pending" },
];

const legalProtectionOrderOption = [
  { label: "Interim", value: "interim" },
  { label: "Final", value: "final" },
  { label: "None", value: "none" },
];

const IncidentDetailsForm = ({ formik }: Props) => {
  return (
    <StyledDiv>
      <Typography as="p" className="form-title">
        Section 3: Incident Details
      </Typography>

      <div className="unfa-form-list">
        <DatePicker
          placeholder="dd/mm/yyyy"
          label="Date of Incident"
          selected={formik.values.date_of_incident}
          onChange={(value) => formik.setFieldValue("date_of_incident", value)}
          className="bg-color"
        />

        <Select
          name="location_of_incident"
          label="Location of Incident"
          options={incidentOptions}
          value={formik.values.location_of_incident}
          onChange={(e) =>
            formik.setFieldValue("location_of_incident", e?.value)
          }
          className="bg-color"
        />

        <Select
          name="type_of_violence"
          label="Type of Violence"
          options={VIOLENCE_OPTIONS_LIST}
          value={formik.values.type_of_violence}
          onChange={(e) => formik.setFieldValue("type_of_violence", e?.value)}
          className="bg-color"
        />

        <Select
          name="subtype"
          label="Subtype"
          options={subTypeOptions}
          value={formik.values.subtype}
          onChange={(e) => formik.setFieldValue("subtype", e?.value)}
          className="bg-color"
        />

        <Select
          name="perpetrator_relationship"
          label="Perpetrator Relationship"
          options={perpetratorRelationshipOptions}
          value={formik.values.perpetrator_relationship}
          onChange={(e) =>
            formik.setFieldValue("perpetrator_relationship", e?.value)
          }
          className="bg-color"
        />

        <Select
          name="perpetrator_gender"
          label="Perpetrator Gender"
          options={GENDER_OPTION_LIST}
          value={formik.values.perpetrator_gender}
          onChange={(e) => formik.setFieldValue("perpetrator_gender", e?.value)}
          className="bg-color"
        />

        <InputField
          name="perpetrator_age"
          label="Perpetrator Age"
          placeholder="Age"
          onChange={formik.handleChange}
          value={formik.values.perpetrator_age}
          className="bg-color"
        />
        <InputField
          name="perpetrator_address"
          label="Perpetrator Address"
          placeholder="Address"
          onChange={formik.handleChange}
          value={formik.values.perpetrator_address}
          className="bg-color"
        />

        <Select
          name="police_case_filed"
          label="Police Case Filed?"
          options={policeCaseOptions}
          value={formik.values.police_case_filed}
          onChange={(e) => formik.setFieldValue("police_case_filed", e?.value)}
          className="bg-color"
        />
        <InputField
          name="case_registration_number"
          label="Case Registration Number"
          placeholder="Case number"
          onChange={formik.handleChange}
          value={formik.values.case_registration_number}
          className="bg-color"
        />

        <Select
          name="legal_protection_order"
          label="Legal Protection Order"
          options={legalProtectionOrderOption}
          value={formik.values.legal_protection_order}
          onChange={(e) =>
            formik.setFieldValue("legal_protection_order", e?.value)
          }
          className="bg-color"
        />

        <Select
          name="previous_incidents_or_repeated_violence"
          label="Previous Incidents or Repeated Violence?"
          options={BOOLEAN_OPTIONS}
          value={formik.values.previous_incidents_or_repeated_violence}
          onChange={(e) =>
            formik.setFieldValue(
              "previous_incidents_or_repeated_violence",
              e?.value
            )
          }
          className="bg-color"
        />

        <TextArea
          name="specify_details"
          label="If yes, Specify details"
          placeholder="Describe previous incidents..."
          onChange={formik.handleChange}
          value={formik.values.specify_details}
          className="bg-color"
        />
      </div>
    </StyledDiv>
  );
};

export default IncidentDetailsForm;
