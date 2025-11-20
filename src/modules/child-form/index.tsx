"use client";

import React from "react";

import { useFormik } from "formik";
import { ArrowLeft, FileSearch, Paperclip, User } from "lucide-react";
import Link from "next/link";

import AttachmentForm from "@/components/AttachmentForm";
import ModuleSectionWrapper from "@/components/ModuleSectionWrapper";
import MultiStepForm from "@/components/MultiStepForm";
import useToaster from "@/hooks/useToaster";
import { authAxios } from "@/utils/axios";
import { convertResponseObj } from "@/utils/convert-responese-obj";
import { getApiResponseErrorToast } from "@/utils/get-api-response-error-toast";
import { getConvertedDate } from "@/utils/get-converted-date";

import { ChildFormType } from "./child-form.types";
import ChildAssessmentForm from "./components/ChildAssessmentForm";
import ChildBasicInformation from "./components/ChildBasicInformation";
import { StyledDiv } from "./style";

const ChildForm = () => {
  const [loader, setLoader] = React.useState(false);
  const { successToast } = useToaster();

  const formik = useFormik<ChildFormType>({
    initialValues: {
      program_id: 7,
      registration_no: "",
      registration_date: null,
      full_name: "",
      age: "",
      grade: "",
      school: "",
      education_status: "",
      referred_by: "",
      current_address: "",
      background: "",
      health_status: "",
      psychosocial_assessment: "",
      overall_assessment: "",
    },
    onSubmit: (values) => {
      setLoader(true);
      const body = {
        ...values,
        registration_date: getConvertedDate(values.registration_date),
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
      id: "basic-information",
      label: "Basic Information",
      icon: <User />,
      component: <ChildBasicInformation formik={formik} />,
    },
    {
      id: "assessment",
      label: "Assessment",
      icon: <FileSearch />,
      component: <ChildAssessmentForm formik={formik} />,
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
        href="/dashboard/data-entry/protection-program-form"
        className="multi-form-back-btn"
      >
        <ArrowLeft size={16} />
        Back to Form Selection
      </Link>
      <ModuleSectionWrapper
        title="Child Profile Form"
        titleHelperText="Children Program - Child Profile Registration"
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

export default ChildForm;
