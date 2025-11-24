"use client";
import React from "react";

import { useFormik } from "formik";
import { FileSearch, Paperclip, User } from "lucide-react";

import AttachmentForm from "@/components/AttachmentForm";
import MultiStepForm from "@/components/MultiStepForm";
import useToaster from "@/hooks/useToaster";
import { authAxios } from "@/utils/axios";
import { convertResponseObj } from "@/utils/convert-responese-obj";
import { getApiResponseErrorToast } from "@/utils/get-api-response-error-toast";
import { getConvertedDate } from "@/utils/get-converted-date";

import { YouthProgramFormType } from "../../youth-program-form.types";
import YouthAssessmentForm from "../YouthAssessmentForm";
import YouthBasicInfoForm from "../YouthBasicInfoForm";

type Props = {
  data?: YouthProgramFormType & { id: string };
  isUpdate?: boolean;
};

const YouthFormWrapper = ({ data, isUpdate }: Props) => {
  const [loader, setLoader] = React.useState(false);
  const { successToast, errorToast } = useToaster();

  const formik = useFormik<YouthProgramFormType>({
    initialValues: {
      program_id: 8,
      registration_no: data?.registration_no || "",
      enter_date_at_saathi: data?.enter_date_at_saathi || null,
      full_name: data?.full_name || "",
      age: data?.age || "",
      grade: data?.grade || "",
      college_name: data?.college_name || "",
      facuilty: data?.facuilty || "",
      current_semester_year: data?.current_semester_year || "",
      date_of_joining_college: data?.date_of_joining_college || null,
      duration_of_course: data?.duration_of_course || "",
      attendance: data?.attendance || "",
      college_visit_date: data?.college_visit_date || null,
      date_settled_in_youth_program:
        data?.date_settled_in_youth_program || null,
      background: data?.background || "",
      academic_performance: data?.academic_performance || "",
      behaviour_and_attitude: data?.behaviour_and_attitude || "",
      college_result: data?.college_result || "",
      overall_comments: data?.overall_comments || "",
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

      if (isUpdate && !data?.id) {
        errorToast("Id Cannot be Empty");
        return;
      }

      const method = isUpdate ? "put" : "post";
      const endPoint = isUpdate ? `/survivors/${data?.id}` : "/survivors";

      authAxios[method](endPoint, convertResponseObj(body))
        .then(() =>
          successToast(
            isUpdate
              ? "project update successfull"
              : "Project created successfull"
          )
        )
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
    <MultiStepForm
      steps={step}
      onSubmit={formik.handleSubmit}
      loader={loader}
    />
  );
};

export default YouthFormWrapper;
