import { FormikProps } from "formik";

import InputField from "@/components/InputField";
import Typography from "@/components/Typography";

import { SaathiShelterProgramFormType } from "../../saathi-shelter.types";

import { StyledDiv } from "./style";

type Props = {
  formik: FormikProps<SaathiShelterProgramFormType>;
};

const ShelterDurationForm = ({ formik }: Props) => {
  // const durationOption = [
  //   { label: "0-3months", value: "0-3months" },
  //   { label: "4-6 months", value: "4-6months" },
  //   { label: "7-12 months", value: "7-12months" },
  //   { label: "13-24 months", value: "13-24months" },
  //   { label: "Over 24 months", value: "over-24-months" },
  // ];

  return (
    <StyledDiv>
      <Typography as="p" className="form-title">
        Section 4: Duration of Stay
      </Typography>
      <div>
        <InputField
          name="duration_range"
          type="number"
          placeholder="e.g 45"
          label="Duration of stay (in days)"
          onChange={formik.handleChange}
          value={formik.values.duration_range}
          className="bg-color"
        />
      </div>
    </StyledDiv>
  );
};

export default ShelterDurationForm;
