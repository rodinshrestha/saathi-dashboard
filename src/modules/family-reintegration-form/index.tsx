"use client";
import React from "react";

import { useFormik } from "formik";
import {
  ArrowLeft,
  FileText,
  Heart,
  House,
  Paperclip,
  Users,
} from "lucide-react";

import AttachmentForm from "@/components/AttachmentForm";
import ModuleSectionWrapper from "@/components/ModuleSectionWrapper";
import MultiStepForm from "@/components/MultiStepForm";
import NextLink from "@/components/NextLink";
import useToaster from "@/hooks/useToaster";
import { authAxios } from "@/utils/axios";
import { convertResponseObj } from "@/utils/convert-responese-obj";
import { getApiResponseErrorToast } from "@/utils/get-api-response-error-toast";

import FamilyReintegrationDetailsForm from "./components/FamilyReintegrationDetailsForm";
import FamilyReintegrationHousingForm from "./components/FamilyReintegrationHousingForm";
import FamilyReintegrationInformationForm from "./components/FamilyReintegrationInformationForm";
import FamilyReintegrationNeedForm from "./components/FamilyReintegrationNeedsForm";
import { FamilyReintegrationFormType } from "./family-reintegration.types";
import { StyledDiv } from "./style";

const FamilyReintegrationForm = () => {
  const [loader, setLoader] = React.useState(false);
  const { successToast } = useToaster();

  const formik = useFormik<FamilyReintegrationFormType>({
    initialValues: {
      program_id: 10,
      date_reintegration: null,
      total_duration_of_service: "",
      address_during_reintegration: "",
      age_during_reintegration: "",
      education: "",
      grade: "",
      medication_required: "",
      medication_details: "",
      number_of_family_member: "",
      head_of_family: "",
      monthly_family_income: "",
      is_income_sufficent: "",
      if_not_sufficient: "",
      substance_use_in_family: [],
      any_history_of_violence: "",
      if_yes_to_violence: [],
      reported_to_police: "",
      housing_type: "",
      utilities_available: [],
      is_perpetrator_living_in_same_house: "",
      risk_of_revictimization: "",
      any_threat_to_child_or_youth: "",
      is_home_environment_safe: "",
      supports_need: [],
      coordination_and_referral_details: "",
      future_plan: "",
    },
    onSubmit: (values) => {
      setLoader(true);

      authAxios
        .post("/survivors", convertResponseObj(values))
        .then(() => successToast("Project creeated"))
        .catch((err) => getApiResponseErrorToast(err))
        .finally(() => setLoader(false));
    },
  });

  const step = [
    {
      id: "reintegration-details",
      label: "Reintegration Details",
      icon: <FileText />,
      component: <FamilyReintegrationDetailsForm formik={formik} />,
    },
    {
      id: "family-information",
      label: "Family Information",
      icon: <Users />,
      component: <FamilyReintegrationInformationForm formik={formik} />,
    },
    {
      id: "housing-safety",
      label: "Housing & Safety",
      icon: <House />,
      component: <FamilyReintegrationHousingForm formik={formik} />,
    },
    {
      id: "child-youth-needs",
      label: "Education",
      icon: <Heart />,
      component: <FamilyReintegrationNeedForm formik={formik} />,
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
      <NextLink
        href="/data-entry/protection-program-form"
        className="multi-form-back-btn"
      >
        <ArrowLeft size={16} />
        Back to Protection
      </NextLink>
      <ModuleSectionWrapper
        title="family Reintegration Form"
        titleHelperText="Children Program - Family Reunification Assessment"
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

export default FamilyReintegrationForm;
