"use client";

import { useFormik } from "formik";
import { ArrowLeft, FileSearch, Paperclip, User } from "lucide-react";
import Link from "next/link";

import AttachmentForm from "@/components/AttachmentForm";
import ModuleSectionWrapper from "@/components/ModuleSectionWrapper";
import MultiStepForm from "@/components/MultiStepForm";

import { ChildFormType } from "./child-form.types";
import ChildAssessmentForm from "./components/ChildAssessmentForm";
import ChildBasicInformation from "./components/ChildBasicInformation";
import { StyledDiv } from "./style";

const ChildForm = () => {
  const formik = useFormik<ChildFormType>({
    initialValues: {
      registration_no: "",
      registration_date: null,
      name: "",
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
    onSubmit: () => {},
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

export default ChildForm;
