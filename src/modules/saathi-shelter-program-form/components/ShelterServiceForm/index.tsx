import { FormikProps } from "formik";

import CheckBox from "@/components/CheckBox";
import InputField from "@/components/InputField";
import { Select } from "@/components/Select";
import Typography from "@/components/Typography";
import { BOOLEAN_OPTIONS } from "@/constant/boolean-select-options.constants";

import { SaathiShelterProgramFormType } from "../../saathi-shelter.types";

import { StyledDiv } from "./style";

const serviceProvidedOption = [
  { label: "Shelter", value: "shelter" },
  { label: "Vocational Training", value: "vocational-training" },
  { label: "Medical", value: "medical" },
  { label: "Formal Education", value: "formal-education" },
  { label: "Legal", value: "legal" },
  { label: "Non Formal Education", value: "non-formal-education" },
  { label: "Counseling", value: "counseling" },
  { label: "Life Skill Session", value: "life-skill-session" },
  { label: "Immediate Support", value: "immediate-support" },
  { label: "Long Term Support", value: "long-term-support" },
  { label: "Family Reintegration", value: "family-reintegration" },
  {
    label: "Reintegration in New Community",
    value: "reintegration-in-new-community",
  },
  { label: "Counseling Via Phone", value: "counseling-via-phone" },
  {
    label: "Counseling to Police (Out of Shelter Case)",
    value: "counseling-to-police",
  },
];

type Props = {
  formik: FormikProps<SaathiShelterProgramFormType>;
};

const ShelterServiceForm = ({ formik }: Props) => {
  return (
    <StyledDiv>
      <Typography as="p" className="form-title">
        Section 5: Types of Support Provided
      </Typography>
      <div className="shelter-support-form-list-wrapper">
        <CheckBox
          options={serviceProvidedOption}
          label="Services Provided (Multi-select)"
          selectedValues={formik.values.service_provided}
          onChange={(value: Array<string>) =>
            formik.setFieldValue("service_provided", value)
          }
        />

        <Select
          name="first_time_in_shelter"
          options={BOOLEAN_OPTIONS}
          placeholder="Select option"
          label="Is this this your first time in shelter?"
          onChange={(e) =>
            formik.setFieldValue("first_time_in_shelter", e.value)
          }
          value={formik.values.first_time_in_shelter}
          className="bg-color"
        />

        <InputField
          name="previous_stay_duration"
          label="If no, specify previous stay duration"
          placeholder="Duration"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.previous_stay_duration}
        />
      </div>
    </StyledDiv>
  );
};

export default ShelterServiceForm;
