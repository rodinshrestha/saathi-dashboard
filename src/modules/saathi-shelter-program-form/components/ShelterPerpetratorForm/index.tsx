import { FormikProps } from "formik";

import InputField from "@/components/InputField";
import { Select } from "@/components/Select";
import Typography from "@/components/Typography";
import { BOOLEAN_OPTIONS } from "@/constant/boolean-select-options.constants";
import { POLITICAL_OPTIONS_LIST } from "@/constant/political-options.constant";
import { SUBSTANCE_OPTION } from "@/constant/substance-options.constant";

import { SaathiShelterProgramFormType } from "../../saathi-shelter.types";

import { StyledDiv } from "./style";

type Props = {
  formik: FormikProps<SaathiShelterProgramFormType>;
};

const ShelterPerpetratorForm = ({ formik }: Props) => {
  return (
    <StyledDiv>
      <Typography as="p" className="form-title">
        Section 2: Perpetrator Information
      </Typography>

      <div className="shelter-perpetrator-form-list-wrapper">
        <InputField
          name="perpetrator_name"
          label="Perpetrator`s Name"
          placeholder="Name (if available)"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.perpetrator_name}
        />

        <InputField
          name="number_of_perpetrators"
          label="Number of Perpetrators"
          placeholder="Number"
          type="number"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.number_of_perpetrators}
        />
        <InputField
          name="age"
          label="Age"
          placeholder="Age"
          type="number"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.age}
        />

        <InputField
          name="education"
          label="Education"
          placeholder="Education Level"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.education}
        />

        <InputField
          name="occupation"
          label="Occupation"
          placeholder="Occupation"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.occupation}
        />

        <Select
          name="politically_socially_powerful"
          options={POLITICAL_OPTIONS_LIST}
          placeholder="Select option"
          label="Politically / Socially Powerful"
          onChange={(e) =>
            formik.setFieldValue("politically_socially_powerful", e?.value)
          }
          value={formik.values.politically_socially_powerful}
          className="bg-color"
        />

        <Select
          name="substance_use"
          options={SUBSTANCE_OPTION}
          placeholder="Select option"
          label="Substance Use"
          onChange={(e) => formik.setFieldValue("substance_use", e?.value)}
          value={formik.values.substance_use}
          className="bg-color"
        />

        <Select
          name="charged_or_arrested"
          options={BOOLEAN_OPTIONS}
          placeholder="Select option"
          label="Charged or Arrested"
          onChange={(e) =>
            formik.setFieldValue("charged_or_arrested", e?.value)
          }
          value={formik.values.charged_or_arrested}
          className="bg-color"
        />

        <InputField
          name="physical_status"
          label="Physical Status (Disability)"
          placeholder="Describe physical status"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.physical_status}
        />

        <InputField
          name="mental_status"
          label="Mental Status (Psychosocial / Mental health)"
          placeholder="Describe mental status"
          className="bg-color"
          onChange={formik.handleChange}
          value={formik.values.mental_status}
        />
      </div>
    </StyledDiv>
  );
};

export default ShelterPerpetratorForm;
