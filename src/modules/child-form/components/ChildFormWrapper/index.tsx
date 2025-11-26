"use client";
import React from "react";

import { useFormik } from "formik";
import { FileSearch, Paperclip, User } from "lucide-react";
import { useRouter } from "next/navigation";

import AttachmentForm from "@/components/AttachmentForm";
import MultiStepForm from "@/components/MultiStepForm";
import useToaster from "@/hooks/useToaster";
import { authAxios } from "@/utils/axios";
import { getApiResponseErrorToast } from "@/utils/get-api-response-error-toast";
import { getConvertedDate } from "@/utils/get-converted-date";
import { initializeAttachmentsData } from "@/utils/initialize-attachments-data";
import { objectToFormData } from "@/utils/object-to-form-data";
import { sanitizeAttachmentsFile } from "@/utils/sanitize-attachments-file";

import { ChildFormType } from "../../child-form.types";
import ChildAssessmentForm from "../ChildAssessmentForm";
import ChildBasicInformation from "../ChildBasicInformation";

type Props = {
  data?: ChildFormType & { id: string };
  isUpdate?: boolean;
};

const ChildFormWrapper = ({ data, isUpdate = false }: Props) => {
  const [loader, setLoader] = React.useState(false);

  const router = useRouter();
  const { successToast, errorToast } = useToaster();

  const formik = useFormik<ChildFormType>({
    initialValues: {
      program_id: 7,
      registration_no: data?.registration_no || "",
      registration_date: data?.registration_date || null,
      full_name: data?.full_name || "",
      age: data?.age || "",
      grade: data?.grade || "",
      school: data?.school || "",
      education_status: data?.education_status || "",
      referred_by: data?.referred_by || "",
      current_address: data?.current_address || "",
      background: data?.background || "",
      health_status: data?.health_status || "",
      psychosocial_assessment: data?.psychosocial_assessment || "",
      overall_assessment: data?.overall_assessment || "",
      profile_picture: data?.profile_picture || null,
      attachments: initializeAttachmentsData(data?.attachments),
    },
    onSubmit: (values) => {
      setLoader(true);
      const body = {
        ...values,
        attachments: sanitizeAttachmentsFile(values.attachments),
        registration_date: getConvertedDate(values.registration_date),
      };

      if (isUpdate && !data?.id) {
        errorToast("Id Cannot be Empty");
        return;
      }

      const endPoint = isUpdate ? `/survivors/${data?.id}` : "/survivors";

      const formData = objectToFormData(body, isUpdate);

      authAxios
        .post(endPoint, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(() => {
          successToast(
            isUpdate
              ? "project update successfull"
              : "Project created successfull"
          );
          router.push("/registration-list");
        })
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
      component: <AttachmentForm formik={formik} showProfile />,
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

export default ChildFormWrapper;
