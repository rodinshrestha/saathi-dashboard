"use client";
import React from "react";

import { useFormik } from "formik";

import { SaathiShelterProgramFormType } from "./saathi-shelter.types";
import { StyledDiv } from "./style";

const SaathiShelterProgramForm = () => {
  const formik = useFormik<SaathiShelterProgramFormType>({
    initialValues: {
      name: "",
      date_of_entry: "",
      code_no: "",
      age_of_survivor: "",
      number_of_dependent_children: "",
      dependent_age_gender: "",
      province: "",
      district: "",
      enthnicity: "",
      type_of_violence: "",
      marital_status: "",
      pregnancy_status: "",
      disability_status: "",
      impact_of_violence: "",
      reason_for_comming_to_shelter: "",
      perpetrator_name: "",
      number_of_perpetrators: "",
      age: "",
      education: "",
      occupation: "",
      politically_socially_powerful: "",
      substance_use: "",
      charged_or_arrested: "",
      physical_status: "",
      mental_status: "",
      referred_form: "",
      referred_to_by_saathi: "",
      referred_date_of_entry: "",
      date_of_discharge: "",
      duration_range: "",
      service_provided: "",
      first_time_in_shelter: "",
      previous_stay_duration: "",
      immediate_support: "",
      long_term_support: "",
      reintegration_status: "",
      family_reintegration: "",
      reintegration_new_community: "",
      counseling_via_phone: "",
      counseling_to_police: "",
      current_status_of_survivor_and_dependents: "",
      other_remarks: "",
    },
    onSubmit: () => {
      //
    },
  });

  return <StyledDiv>SaathiShelterProgramForm</StyledDiv>;
};

export default SaathiShelterProgramForm;
