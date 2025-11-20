"use client";
import React from "react";

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
import useToaster from "@/hooks/useToaster";
import { authAxios } from "@/utils/axios";
import { convertResponseObj } from "@/utils/convert-responese-obj";
import { getApiResponseErrorToast } from "@/utils/get-api-response-error-toast";
import { getConvertedDate } from "@/utils/get-converted-date";

import AdditionalInfoForm from "./components/AdditionalInfoForm";
import GeneralInfoForm from "./components/GeneralInfoForm";
import IncidentDetailsForm from "./components/IncidentDetailsForm";
import SurvivorInform from "./components/SurvivorInfoForm";
import { StyledDiv } from "./style";
import { UNFPAFormType } from "./unfpa.types";

const UnfpaForm = () => {
  const [loader, setLoader] = React.useState(false);
  const { successToast } = useToaster();
  const formik = useFormik<UNFPAFormType>({
    initialValues: {
      program_id: 6,
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
      dependent_children: "",
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
    onSubmit: (values) => {
      setLoader(true);

      const { registration_date, date_of_incident, ...rest } = values;

      const body = {
        registration_date: getConvertedDate(registration_date),
        date_of_incident: getConvertedDate(date_of_incident),
        ...rest,
      };

      authAxios
        .post("/survivors", convertResponseObj(body))
        .then(() => successToast("Project creeated"))
        .catch((err) => getApiResponseErrorToast(err))
        .finally(() => setLoader(false));
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
        title="UNFPA Supported SHelter Program Form"
        className="multi-form-title"
      />
      <MultiStepForm
        steps={step}
        onSubmit={formik.handleSubmit}
        loader={loader}
      />
    </StyledDiv>
  );
};

export default UnfpaForm;
