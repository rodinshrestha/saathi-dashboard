"use client";
import { FormikProps } from "formik";

import CheckBox from "@/components/CheckBox";
import InputField from "@/components/InputField";
import { Select } from "@/components/Select";
import Typography from "@/components/Typography";
import { BOOLEAN_OPTIONS } from "@/constant/boolean-select-options.constants";
import { useGlobalStore } from "@/store/useGlobalConfigStore";
import { getServicesListOptions } from "@/utils/get-services-list-options";

import { SaathiShelterProgramFormType } from "../../saathi-shelter.types";

import { StyledDiv } from "./style";

type Props = {
  formik: FormikProps<SaathiShelterProgramFormType>;
};

const ShelterServiceForm = ({ formik }: Props) => {
  const { servicesData } = useGlobalStore();
  return (
    <StyledDiv>
      <Typography as="p" className="form-title">
        Section 5: Types of Support Provided
      </Typography>
      <div className="shelter-support-form-list-wrapper">
        <CheckBox
          options={getServicesListOptions(servicesData)}
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
            formik.setFieldValue("first_time_in_shelter", e?.value)
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
