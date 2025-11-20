"use client";
import { FormikProps } from "formik";

import CheckBox from "@/components/CheckBox";
import InputField from "@/components/InputField";
import { Select } from "@/components/Select";
import TextArea from "@/components/TextArea";
import Typography from "@/components/Typography";
import { BOOLEAN_OPTIONS } from "@/constant/boolean-select-options.constants";

import { FamilyReintegrationFormType } from "../../family-reintegration.types";

import { StyledDiv } from "./style";

const monthlyIncomeOptions = [
  { label: "Below Rs 10,000", value: "below-rs10,000" },
  { label: "RS 10,000 - Rs19,0000", value: "rs10,000 - rs19,000" },
  { label: "Rs 20,000 - Rs 29,000", value: "rs20,000 - rs29,000" },
  { label: "Rs 30,000 and above", value: "rs30,000 - above" },
];

const substaceUseOptions = [
  { label: "Alchol", value: "alchol" },
  { label: "Drugs", value: "drugs" },
];

const violenceType = [
  { label: "Domestic Violence", value: "domestic-violence" },
  { label: "Sexual Violence", value: "sexual-violence" },
  { label: "Physical Violence", value: "physcial-violence" },
  { label: "Harassment", value: "harassment" },
  { label: "Other", value: "other" },
];

type Props = {
  formik: FormikProps<FamilyReintegrationFormType>;
};

const FamilyReintegrationInformationForm = ({ formik }: Props) => {
  return (
    <StyledDiv>
      <Typography as="p" className="form-title">
        Step 2: Family Information
      </Typography>
      <div className="family-reintegration-information-form-wrapper">
        <InputField
          name="number_of_family_member"
          label="Number of Family Members"
          placeholder="Enter number"
          className="bg-color"
          value={formik.values.number_of_family_member}
          onChange={formik.handleChange}
        />

        <InputField
          name="head_of_family"
          label="head of Family"
          placeholder="e.g Father, Mother, Grandfather"
          className="bg-color"
          value={formik.values.head_of_family}
          onChange={formik.handleChange}
        />

        <Select
          options={monthlyIncomeOptions}
          placeholder="Select income range"
          label="Monthyly Family Income"
          onChange={(item) =>
            formik.setFieldValue("monthly_family_income", item?.value)
          }
          value={formik.values.monthly_family_income}
          className="bg-color"
        />

        <Select
          options={BOOLEAN_OPTIONS}
          placeholder="Select"
          label="Is Icome Sufficient"
          onChange={(item) =>
            formik.setFieldValue("is_income_sufficent", item?.value)
          }
          value={formik.values.is_income_sufficent}
          className="bg-color"
        />

        <TextArea
          name="if_not_sufficient"
          label="If Not Sufficient: Reason"
          placeholder="Explain why income is not sufficient for family needs"
          className="bg-color"
          value={formik.values.if_not_sufficient}
          onChange={formik.handleChange}
        />

        <CheckBox
          options={substaceUseOptions}
          label="Substance Use in Family"
          selectedValues={formik.values.substance_use_in_family}
          onChange={(value) =>
            formik.setFieldValue("substance_use_in_family", value)
          }
        />

        <Select
          options={BOOLEAN_OPTIONS}
          placeholder="Select"
          label="Any History of Violence?"
          onChange={(item) =>
            formik.setFieldValue("any_history_of_violence", item?.value)
          }
          value={formik.values.any_history_of_violence}
          className="bg-color"
        />
        <CheckBox
          options={violenceType}
          label="if Yes: Type of Violence"
          selectedValues={formik.values.if_yes_to_violence}
          onChange={(value) =>
            formik.setFieldValue("if_yes_to_violence", value)
          }
        />

        <Select
          options={BOOLEAN_OPTIONS}
          placeholder="Select"
          label="Reported to Police?"
          onChange={(item) =>
            formik.setFieldValue("reported_to_police", item?.value)
          }
          value={formik.values.reported_to_police}
          className="bg-color"
        />
      </div>
    </StyledDiv>
  );
};

export default FamilyReintegrationInformationForm;
