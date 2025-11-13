import { FormikProps } from "formik";

import InputField from "@/components/InputField";
import { Select } from "@/components/Select";
import Typography from "@/components/Typography";

import { UNFPAFormType } from "../../unfpa.types";

import { StyledDiv } from "./style";

type Props = {
  formik: FormikProps<UNFPAFormType>;
};

const citizenshipOrIdTypeOption = [
  { label: "Citizenship", value: "citizenship" },
  { label: "Passport", value: "passport" },
  { label: "Other ID", value: "other_id" },
];

const SurvivorInform = ({ formik }: Props) => {
  return (
    <StyledDiv>
      <Typography as="p" className="form-title">
        Section 2: Survivor Information
      </Typography>

      <div className="unfa-form-list">
        <InputField
          name="full_name"
          label="Fulll Name (optional)"
          placeholder="Survivor name"
          onChange={formik.handleChange}
          value={formik.values.full_name}
          className="bg-color"
        />
        <InputField
          name="contat_number"
          label="Contact Number (if safe)"
          placeholder="Phone Number"
          onChange={formik.handleChange}
          value={formik.values.contact_number}
          className="bg-color"
        />

        <Select
          name="permanent_province_address"
          label="Permanent Address - Province"
          options={[{ label: "test", value: "test" }]}
          value={formik.values.permanent_province_address}
          onChange={(e) =>
            formik.setFieldValue("permanent_province_address", e?.value)
          }
          className="bg-color"
        />

        <Select
          name="permanent_district_address"
          label="Permanent Address - District"
          options={[{ label: "test", value: "test" }]}
          value={formik.values.permanent_district_address}
          onChange={(e) =>
            formik.setFieldValue("permanent_district_address", e?.value)
          }
          className="bg-color"
        />

        <InputField
          name="municipality_or_ward"
          label="Municipality/Ward"
          placeholder="Municipality and ward"
          onChange={formik.handleChange}
          value={formik.values.municipality_or_ward}
          className="bg-color"
        />

        <InputField
          name="temporary_address"
          label="Temporary Address"
          placeholder="Temporary address"
          onChange={formik.handleChange}
          value={formik.values.temporary_address}
          className="bg-color"
        />

        <Select
          name="citizenship_or_id_type"
          label="Citizenship / ID Type"
          options={citizenshipOrIdTypeOption}
          value={formik.values.permanent_district_address}
          onChange={(e) =>
            formik.setFieldValue("permanent_district_address", e?.value)
          }
          className="bg-color"
        />

        <InputField
          name="citizenship_id_no"
          label="Citizenship / ID No"
          placeholder="ID number"
          onChange={formik.handleChange}
          value={formik.values.citizenship_id_no}
          className="bg-color"
        />

        <InputField
          name="dependent_children"
          label="Dependent Children (Number)"
          type="number"
          placeholder="Number"
          onChange={formik.handleChange}
          value={formik.values.dependent_children}
          className="bg-color"
        />
      </div>
    </StyledDiv>
  );
};

export default SurvivorInform;
