import React from "react";

import { FormikProps } from "formik";

import CheckBox from "@/components/CheckBox";
import InputField from "@/components/InputField";
import { Select } from "@/components/Select";
import Typography from "@/components/Typography";
import { BOOLEAN_OPTIONS } from "@/constant/boolean-select-options.constants";

import { ChildIntakeProgramFormType } from "../../child-intake-program-form.types";

import { StyledDiv } from "./style";

const violenceList = [
  { label: "Rape / Sexual Assualt", value: "rape/sexual-assualt" },
  { label: "Physical Assault", value: "physcial-assault" },
  { label: "Early or Forced Marriage", value: "early-forced-marriage" },
  { label: "Child Labour", value: "child-labour" },
  {
    label: "Emotional / Psychological Abuse",
    value: "emptional/psychological-abuse",
  },
  {
    label: "Harmful Traditional Practices",
    value: "harmful-traditional-practices",
  },
  { label: "Neglect / Abandonment", value: "neglect/abandonment" },
  { label: "Trafficking", value: "trafficking" },
  { label: "Domestic Violence", value: "domestic-violence" },
  { label: "Cyber GBV", value: "cyber-GBV" },
  { label: "Political Violence", value: "political-violence" },
  { label: "Other forms of GBV", value: "other-forms-of-GBV" },
];

const relationToChildOptions = [
  { label: "Father", value: "father" },
  { label: "Mother", value: "mother" },
  { label: "Step Father", value: "step-father" },
  { label: "Step Mother", value: "step-mother" },
  { label: "Uncle", value: "uncle" },
  { label: "Other Relative", value: "other-relattive" },
  { label: "Neighbor", value: "neighbor" },
  { label: "Strange", value: "stranger" },
  { label: "Other", value: "other" },
];

type Props = {
  formik: FormikProps<ChildIntakeProgramFormType>;
};

const ChildIntakeProtectionFrom = ({ formik }: Props) => {
  return (
    <StyledDiv>
      <Typography as="p" className="form-title">
        Step 5: Protection
      </Typography>

      <div className="child-intake-form-protection-form-wrapper">
        <Select
          options={BOOLEAN_OPTIONS}
          placeholder="Select"
          label="Was the child abused/harassed/assulted?"
          onChange={(item) =>
            formik.setFieldValue("was_child_abused", item?.value)
          }
          value={formik.values.was_child_abused}
          className="bg-color"
        />

        <CheckBox
          label="Types of Violence Faced(Select all that apply)"
          options={violenceList}
          onChange={(values: Array<string>) =>
            formik.setFieldValue("type_of_violence", values)
          }
          selectedValues={formik.values.type_of_violence}
          className="bg-color"
        />

        <InputField
          name="perpetrator_name"
          label="Perpetrator Name"
          placeholder="Enter name if known"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.perpetrator_name}
        />

        <InputField
          name="perpetrator_name"
          label="Perpetrator Name"
          placeholder="Enter name if known"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.perpetrator_name}
        />

        <Select
          options={relationToChildOptions}
          placeholder="Select"
          label="Relationship to Child"
          onChange={(item) =>
            formik.setFieldValue("perpetrator_relation_to_child", item?.value)
          }
          value={formik.values.perpetrator_relation_to_child}
          className="bg-color"
        />

        <InputField
          name="perpetrator_age"
          label="Perpetrator age"
          placeholder="Approzimate age"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.perpetrator_age}
        />

        <InputField
          name="perpetrator_occupation"
          label="Perpetrator Occupation"
          placeholder="Enter occupation if known"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.perpetrator_occupation}
        />

        <InputField
          name="perpetrator_address"
          label="Perpetrator address"
          placeholder="Enter address if known"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.perpetrator_address}
        />
      </div>
    </StyledDiv>
  );
};

export default ChildIntakeProtectionFrom;
