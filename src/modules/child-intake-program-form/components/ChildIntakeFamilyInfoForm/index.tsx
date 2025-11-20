import React from "react";

import { FormikProps } from "formik";

import InputField from "@/components/InputField";
import { Select } from "@/components/Select";
import TextArea from "@/components/TextArea";
import Typography from "@/components/Typography";

import { ChildIntakeProgramFormType } from "../../child-intake-program-form.types";

import { StyledDiv } from "./style";

const personStatusList = [
  { label: "Alive", value: "alive" },
  { label: "Deceased", value: "deceased" },
];

type Props = {
  formik: FormikProps<ChildIntakeProgramFormType>;
};

const ChildIntakeFamilyInfoForm = ({ formik }: Props) => {
  return (
    <StyledDiv>
      <Typography as="p" className="form-title">
        Step 7: Family Information
      </Typography>
      <div className="child-intake-family-information-form">
        <div className="child-intake-family-sub-wrapper">
          <Typography as="p" className="form-sub-title">
            Father`s Information
          </Typography>
          <div className="child-intake-family-info-sub-list">
            <InputField
              name="father_name"
              label="Father Name"
              placeholder="Enter father name"
              className="bg-color"
              value={formik.values.father_name}
              onChange={formik.handleChange}
            />
            <InputField
              name="father_age"
              label="Father Age"
              placeholder="Enter father age"
              className="bg-color"
              value={formik.values.father_age}
              onChange={formik.handleChange}
            />
            <InputField
              name="father_health_status"
              label="Father Health Status"
              placeholder="e.g Good, Poor, Chronic Illness"
              className="bg-color"
              value={formik.values.father_health_status}
              onChange={formik.handleChange}
            />
            <InputField
              name="father_occupation"
              label="Father Occupation"
              placeholder="Enter father occupation"
              className="bg-color"
              value={formik.values.father_occupation}
              onChange={formik.handleChange}
            />
            <InputField
              name="father_monthly_income"
              label="Father Monthly Income"
              placeholder="Enter father income"
              className="bg-color"
              value={formik.values.father_monthly_income}
              onChange={formik.handleChange}
            />
            <InputField
              name="father_education"
              label="Father Education"
              placeholder="Enter father education"
              className="bg-color"
              value={formik.values.father_education}
              onChange={formik.handleChange}
            />
            <InputField
              name="father_address"
              label="Address"
              placeholder="Enter current address"
              className="bg-color"
              value={formik.values.father_address}
              onChange={formik.handleChange}
            />
            <Select
              options={personStatusList}
              placeholder="Select status"
              label="Father Status"
              onChange={(item) =>
                formik.setFieldValue("father_status", item?.value)
              }
              value={formik.values.father_status}
              className="bg-color"
            />
            <InputField
              name="father_if_death_year"
              label="If Deceased: year of Death"
              placeholder="Enter year"
              className="bg-color"
              value={formik.values.father_if_death_year}
              onChange={formik.handleChange}
            />

            <TextArea
              name="father_cause_of_death"
              label="Cause of Death"
              placeholder="Enter cause if applicable"
              className="bg-color"
              value={formik.values.father_cause_of_death}
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <div className="child-intake-family-sub-wrapper">
          <Typography as="p" className="form-sub-title">
            Mother`s Information
          </Typography>
          <div className="child-intake-family-info-sub-list">
            <InputField
              name="mother_name"
              label="Mother Name"
              placeholder="Enter mother name"
              className="bg-color"
              value={formik.values.mother_name}
              onChange={formik.handleChange}
            />
            <InputField
              name="mother_age"
              label="Mother Age"
              placeholder="Enter mother age"
              className="bg-color"
              value={formik.values.mother_age}
              onChange={formik.handleChange}
            />
            <InputField
              name="mother_health_status"
              label="Mother Health Status"
              placeholder="e.g Good, Poor, Chronic Illness"
              className="bg-color"
              value={formik.values.mother_health_status}
              onChange={formik.handleChange}
            />
            <InputField
              name="mother_occupation"
              label="Mother Occupation"
              placeholder="Enter mother occupation"
              className="bg-color"
              value={formik.values.mother_occupation}
              onChange={formik.handleChange}
            />
            <InputField
              name="mother_monthly_income"
              label="Mother Monthly Income"
              placeholder="Enter mother income"
              className="bg-color"
              value={formik.values.mother_monthly_income}
              onChange={formik.handleChange}
            />
            <InputField
              name="mother_education"
              label="Mother Education"
              placeholder="Enter mother education"
              className="bg-color"
              value={formik.values.mother_education}
              onChange={formik.handleChange}
            />
            <InputField
              name="mother_address"
              label="Address"
              placeholder="Enter current address"
              className="bg-color"
              value={formik.values.mother_address}
              onChange={formik.handleChange}
            />
            <Select
              options={personStatusList}
              placeholder="Select status"
              label="Mother Status"
              onChange={(item) =>
                formik.setFieldValue("mother_status", item?.value)
              }
              value={formik.values.mother_status}
              className="bg-color"
            />
            <InputField
              name="mother_if_death_year"
              label="If Deceased: year of Death"
              placeholder="Enter year"
              className="bg-color"
              value={formik.values.mother_if_death_year}
              onChange={formik.handleChange}
            />

            <TextArea
              name="mother_cause_of_death"
              label="Cause of Death"
              placeholder="Enter cause if applicable"
              className="bg-color"
              value={formik.values.mother_cause_of_death}
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <div className="child-intake-family-sub-wrapper">
          <Typography as="p" className="form-sub-title">
            Guardian Information (if not parents)
          </Typography>
          <div className="child-intake-family-info-sub-list">
            <InputField
              name="guardian_name"
              label="Guardian Name"
              placeholder="Enter guardian name"
              className="bg-color"
              value={formik.values.guardian_name}
              onChange={formik.handleChange}
            />
            <InputField
              name="guardian_age"
              label="Guardian Age"
              placeholder="Enter guardian age"
              className="bg-color"
              value={formik.values.guardian_age}
              onChange={formik.handleChange}
            />
            <InputField
              name="guardian_relation_to_child"
              label="Relationship to Child"
              placeholder="e.g Uncle, Aunt, Grandparent"
              className="bg-color"
              value={formik.values.guardian_relation_to_child}
              onChange={formik.handleChange}
            />
            <InputField
              name="guardian_address"
              label="Guardian Occupation"
              placeholder="Enter guardian address"
              className="bg-color"
              value={formik.values.guardian_address}
              onChange={formik.handleChange}
            />
          </div>
        </div>
      </div>
    </StyledDiv>
  );
};

export default ChildIntakeFamilyInfoForm;
