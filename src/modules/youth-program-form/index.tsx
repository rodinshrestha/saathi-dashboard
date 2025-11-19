"use client";
import { useFormik } from "formik";
import { ArrowLeft, FileSearch, Paperclip, User } from "lucide-react";
import Link from "next/link";

import AttachmentForm from "@/components/AttachmentForm";
import ModuleSectionWrapper from "@/components/ModuleSectionWrapper";
import MultiStepForm from "@/components/MultiStepForm";

import YouthAssessmentForm from "./components/YouthAssessmentForm";
import YouthBasicInfoForm from "./components/YouthBasicInfoForm";
import { StyledDiv } from "./style";
import { YouthProgramFormType } from "./youth-program-form.types";

const YouthProgramForm = () => {
  const formik = useFormik<YouthProgramFormType>({
    initialValues: {
      registration_no: "",
      enter_date_at_saathi: null,
      name: "",
      age: 0,
      grade: "",
      college_name: "",
      facuilty: "",
      current_semester_year: "",
      date_of_joining_college: null,
      duration_of_course: "",
      attendance: "",
      college_visit_date: null,
      date_settled_in_youth_program: null,
      background: "",
      academic_performance: "",
      behaviour_and_attitude: "",
      college_result: "",
      overall_comments: "",
    },
    onSubmit: () => {
      //
    },
  });

  const step = [
    {
      id: "basic-information",
      label: "Basic Information",
      icon: <User />,
      component: <YouthBasicInfoForm formik={formik} />,
    },
    {
      id: "assessment",
      label: "Assessment",
      icon: <FileSearch />,
      component: <YouthAssessmentForm formik={formik} />,
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

export default YouthProgramForm;
