"use client";
import React from "react";

import { useFormik } from "formik";
import {
  ArrowLeft,
  Briefcase,
  CircleAlert,
  FileText,
  Heart,
  MapPin,
  Paperclip,
  User,
  Users,
} from "lucide-react";
import Link from "next/link";

import AttachmentForm from "@/components/AttachmentForm";
import ModuleSectionWrapper from "@/components/ModuleSectionWrapper";
import MultiStepForm from "@/components/MultiStepForm";

import ShelterAdditionalForm from "./components/ShelterAdditionalForm";
import ShelterDurationForm from "./components/ShelterDurationForm";
import ShelterPerpetratorForm from "./components/ShelterPerpetratorForm";
import ShelterReferralsForm from "./components/ShelterReferralsForm";
import ShelterReintegrationForm from "./components/ShelterReintegrationForm";
import ShelterServiceForm from "./components/ShelterServiceForm";
import ShelterSurvivorForm from "./components/ShelterSurvivorForm";
import { SaathiShelterProgramFormType } from "./saathi-shelter.types";
import { StyledDiv } from "./style";

const SaathiShelterProgramForm = () => {
  const formik = useFormik<SaathiShelterProgramFormType>({
    initialValues: {
      name: "",
      date_of_entry: null,
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
      impact_of_violence: [],
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
      referred_date_of_entry: null,
      date_of_discharge: null,
      duration_range: "",
      service_provided: [],
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

  const step = [
    {
      id: "general-info",
      label: "General Info",
      icon: <User />,
      component: <ShelterSurvivorForm formik={formik} />,
    },
    {
      id: "perpetrator-information",
      label: "Perpetrator Information",
      icon: <Users />,
      component: <ShelterPerpetratorForm formik={formik} />,
    },
    {
      id: "referrals",
      label: "Referrals",
      icon: <CircleAlert />,
      component: <ShelterReferralsForm formik={formik} />,
    },
    {
      id: "duration",
      label: "Duration",
      icon: <Heart />,
      component: <ShelterDurationForm formik={formik} />,
    },
    {
      id: "service",
      label: "Service",
      icon: <Briefcase />,
      component: <ShelterServiceForm formik={formik} />,
    },
    {
      id: "reintegration",
      label: "Reintegration",
      icon: <MapPin />,
      component: <ShelterReintegrationForm formik={formik} />,
    },
    {
      id: "additional-info",
      label: "Additional Info",
      icon: <FileText />,
      component: <ShelterAdditionalForm formik={formik} />,
    },
    {
      id: "attachments",
      label: "Attachments",
      icon: <Paperclip />,
      component: <AttachmentForm />,
    },
  ];

  return (
    <StyledDiv>
      <Link
        href="/dashboard/data-entry/response-program-form"
        className="multi-form-back-btn"
      >
        <ArrowLeft size={16} />
        Back to Form Selection
      </Link>
      <ModuleSectionWrapper
        title="Saathi Shelter Survivor Intake Form"
        className="multi-form-title"
      />
      <MultiStepForm
        steps={step}
        onSubmit={formik.handleSubmit}
        loader={false}
      />
    </StyledDiv>
  );
};

export default SaathiShelterProgramForm;
