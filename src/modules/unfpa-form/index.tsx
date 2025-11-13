"use client";
import { useFormik } from "formik";
import {
  ArrowLeft,
  CircleAlert,
  FileText,
  Paperclip,
  User,
} from "lucide-react";
import Link from "next/link";

import AttachmentForm from "@/components/AttachmentForm";
import ModuleSectionWrapper from "@/components/ModuleSectionWrapper";
import MultiStepForm from "@/components/MultiStepForm";

import AdditionalInfoForm from "./components/AdditionalInfoForm";
import GeneralInfoForm from "./components/GeneralInfoForm";
import IncidentDetailsForm from "./components/IncidentDetailsForm";
import SurvivorInform from "./components/SurvivorInfoForm";
import { StyledDiv } from "./style";
import { UNFPAFormType } from "./unfpa.types";

const UnfpaForm = () => {
  const formik = useFormik<UNFPAFormType>({
    initialValues: {
      unique_case_id: "",
      registration_date: null,
      case_type: "",
      safe_house_shelter_name: "",
      district: "",
      municipality: "",
      full_name: "",
      contact_number: "",
      permanent_province_address: "",
      permanent_district_address: "",
      municipality_or_ward: "",
      temporary_address: "",
      citizenship_or_id_type: "",
      citizenship_id_no: "",
      dependent_children: 0,
      date_of_incident: null,
      location_of_incident: "",
      type_of_violence: "",
      subtype: "",
      perpetrator_relationship: "",
      perpetrator_gender: "",
      perpetrator_age: "",
      perpetrator_address: "",
      police_case_filed: "",
      case_registration_number: "",
      legal_protection_order: "",
      previous_incidents_or_repeated_violence: "",
      specify_details: "",
      additional_information_or_notes: "",
    },
    onSubmit: () => {
      //
    },
  });

  const step = [
    {
      id: "general-info",
      label: "General Info",
      icon: <FileText />,
      component: <GeneralInfoForm formik={formik} />,
    },
    {
      id: "survivor-info",
      label: "Survivor Info",
      icon: <User />,
      component: <SurvivorInform formik={formik} />,
    },
    {
      id: "incident-details",
      label: "Incident Details",
      icon: <CircleAlert />,
      component: <IncidentDetailsForm formik={formik} />,
    },
    {
      id: "additional-info",
      label: "Additional Info",
      icon: <CircleAlert />,
      component: <AdditionalInfoForm formik={formik} />,
    },
    {
      id: "attachments",
      label: "Attachments",
      icon: <Paperclip />,
      component: <AttachmentForm />,
    },
  ];

  return (
    <StyledDiv className="unfa-form-wrapper">
      <Link
        href="/dashboard/data-entry/response-program-form"
        className="multi-form-back-btn"
      >
        <ArrowLeft size={16} />
        Back to Program Selection
      </Link>
      <ModuleSectionWrapper
        title="Prosecution Program - Data Entry"
        className="multi-form-title"
      />
      <MultiStepForm steps={step} onSubmit={formik.handleSubmit} />
    </StyledDiv>
  );
};

export default UnfpaForm;
