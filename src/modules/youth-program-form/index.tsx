"use client";
import React from "react";

import { useFormik } from "formik";
import { ArrowLeft, FileSearch, Paperclip, User } from "lucide-react";
import Link from "next/link";

import AttachmentForm from "@/components/AttachmentForm";
import ModuleSectionWrapper from "@/components/ModuleSectionWrapper";
import MultiStepForm from "@/components/MultiStepForm";
import NextLink from "@/components/NextLink";
import useToaster from "@/hooks/useToaster";
import { authAxios } from "@/utils/axios";
import { convertResponseObj } from "@/utils/convert-responese-obj";
import { getApiResponseErrorToast } from "@/utils/get-api-response-error-toast";
import { getConvertedDate } from "@/utils/get-converted-date";

import YouthAssessmentForm from "./components/YouthAssessmentForm";
import YouthBasicInfoForm from "./components/YouthBasicInfoForm";
import { StyledDiv } from "./style";
import { YouthProgramFormType } from "./youth-program-form.types";

const YouthProgramForm = () => {
  const [loader, setLoader] = React.useState(false);
  const { successToast } = useToaster();

  const formik = useFormik<YouthProgramFormType>({
    initialValues: {
      program_id: 8,
      registration_no: "",
      enter_date_at_saathi: null,
      full_name: "",
      age: "",
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
    onSubmit: (values) => {
      setLoader(true);
      const {
        date_of_joining_college,
        college_visit_date,
        date_settled_in_youth_program,
        ...rest
      } = values;

      const body = {
        date_of_joining_college: getConvertedDate(date_of_joining_college),
        college_visit_date: getConvertedDate(college_visit_date),
        date_settled_in_youth_program: getConvertedDate(
          date_settled_in_youth_program
        ),
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
      <NextLink
        href="/data-entry/protection-program-form"
        className="multi-form-back-btn"
      >
        <ArrowLeft size={16} />
        Back to Form Selection
      </NextLink>
      <ModuleSectionWrapper
        title="Youth Profile Form"
        className="multi-form-title"
        titleHelperText="Children Program - Youth Settlement Program"
      />
      <MultiStepForm
        steps={step}
        onSubmit={formik.handleSubmit}
        loader={loader}
      />
    </StyledDiv>
  );
};

export default YouthProgramForm;
