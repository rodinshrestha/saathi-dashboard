import React from "react";

import { FormikProps } from "formik";

import CheckBox from "@/components/CheckBox";
import { Select } from "@/components/Select";
import Typography from "@/components/Typography";
import { BOOLEAN_OPTIONS } from "@/constant/boolean-select-options.constants";

import { FamilyReintegrationFormType } from "../../family-reintegration.types";

import { StyledDiv } from "./style";

const housingTypeOption = [
  { label: "Own House", value: "own-house" },
  { label: "Rented", value: "rented" },
  { label: "Flat", value: "flat" },
  { label: "Other", value: "other" },
];

const utilityOptions = [
  { label: "Electricity", value: "electricity" },
  { label: "Water Supply", value: "water-supply" },
  { label: "Toilet", value: "toilet" },
  { label: "Bathroom", value: "bathroom" },
  { label: "Sewage System", value: "sewage-system" },
];

type Props = {
  formik: FormikProps<FamilyReintegrationFormType>;
};

const FamilyReintegrationHousingForm = ({ formik }: Props) => {
  return (
    <StyledDiv>
      <Typography as="p" className="form-title">
        Step 3: Housing and Safety Status
      </Typography>
      <div className="family-reintegration-housing-form-wrapper">
        <Select
          options={housingTypeOption}
          placeholder="Select"
          label="Housing Type"
          onChange={(item) => formik.setFieldValue("housing_type", item?.value)}
          value={formik.values.housing_type}
          className="bg-color"
        />

        <CheckBox
          label="Utilities Available"
          options={utilityOptions}
          onChange={(value) =>
            formik.setFieldValue("utilities_available", value)
          }
          selectedValues={formik.values.utilities_available}
        />

        <Select
          options={BOOLEAN_OPTIONS}
          placeholder="Select"
          label="Is Perpetrator Living in Same House"
          onChange={(item) =>
            formik.setFieldValue(
              "is_perpetrator_living_in_same_house",
              item?.value
            )
          }
          value={formik.values.is_perpetrator_living_in_same_house}
          className="bg-color"
        />

        <Select
          options={BOOLEAN_OPTIONS}
          placeholder="Select"
          label="Risk of Revictimization"
          onChange={(item) =>
            formik.setFieldValue("risk_of_revictimization", item?.value)
          }
          value={formik.values.risk_of_revictimization}
          className="bg-color"
        />

        <Select
          options={BOOLEAN_OPTIONS}
          placeholder="Select"
          label="Any Threat to Child/Youth"
          onChange={(item) =>
            formik.setFieldValue("any_threat_to_child_or_youth", item?.value)
          }
          value={formik.values.any_threat_to_child_or_youth}
          className="bg-color"
        />

        <Select
          options={BOOLEAN_OPTIONS}
          placeholder="Select"
          label="Is Home Environment Safe?"
          onChange={(item) =>
            formik.setFieldValue("is_home_environment_safe", item?.value)
          }
          value={formik.values.is_home_environment_safe}
          className="bg-color"
        />
      </div>
    </StyledDiv>
  );
};

export default FamilyReintegrationHousingForm;
