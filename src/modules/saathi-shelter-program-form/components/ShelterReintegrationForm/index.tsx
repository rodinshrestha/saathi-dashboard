import React from "react";

import { FormikProps } from "formik";

import InputField from "@/components/InputField";
import { Select } from "@/components/Select";
import TextArea from "@/components/TextArea";
import Typography from "@/components/Typography";
import { BOOLEAN_OPTIONS } from "@/constant/boolean-select-options.constants";

import { SaathiShelterProgramFormType } from "../../saathi-shelter.types";

import { StyledDiv } from "./style";

const familyReintegrationOption = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" },
  { label: "In Progress", value: "in-progress" },
];

const communityReintegrationOption = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" },
  { label: "Planned", value: "planned" },
];

type Props = {
  formik: FormikProps<SaathiShelterProgramFormType>;
};

const ShelterReintegrationForm = ({ formik }: Props) => {
  return (
    <StyledDiv>
      <Typography as="p" className="form-title">
        Section 6: Reintegration and COunseling
      </Typography>
      <div className="shelter-reintegration-form-list-wrapper">
        <TextArea
          name="immediate_support"
          label="Immediate Support"
          placeholder="Describe immediate support provided..."
          onChange={formik.handleChange}
          value={formik.values.immediate_support}
          className="bg-color"
        />

        <TextArea
          name="long_term_support"
          label="Long-term Support"
          placeholder="Describe long-term support plan..."
          onChange={formik.handleChange}
          value={formik.values.long_term_support}
          className="bg-color"
        />

        <InputField
          name="reintegration_status"
          label="Reintegration Status"
          placeholder="Status"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.reintegration_status}
        />

        <Select
          name="family_reintegration"
          options={familyReintegrationOption}
          placeholder="Select option"
          label="Family Reintegration"
          onChange={(e) =>
            formik.setFieldValue("family_reintegration", e?.value)
          }
          value={formik.values.family_reintegration}
          className="bg-color"
        />

        <Select
          name="reintegration_new_community"
          options={communityReintegrationOption}
          placeholder="Select option"
          label="Reintegration in New Community"
          onChange={(e) =>
            formik.setFieldValue("reintegration_new_community", e?.value)
          }
          value={formik.values.reintegration_new_community}
          className="bg-color"
        />

        <Select
          name="counseling_via_phone"
          options={BOOLEAN_OPTIONS}
          placeholder="Select option"
          label="Counseling via Phone"
          onChange={(e) =>
            formik.setFieldValue("counseling_via_phone", e?.value)
          }
          value={formik.values.counseling_via_phone}
          className="bg-color"
        />

        <Select
          name="counseling_to_police"
          options={BOOLEAN_OPTIONS}
          placeholder="Select option"
          label="Counseling to Police (out of Shelter Case)"
          onChange={(e) =>
            formik.setFieldValue("counseling_to_police", e?.value)
          }
          value={formik.values.counseling_to_police}
          className="bg-color"
        />
      </div>
    </StyledDiv>
  );
};

export default ShelterReintegrationForm;
