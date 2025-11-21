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

import { ChildFormType } from "../../child-form.types";
import ChildAssessmentForm from "../ChildAssessmentForm";
import ChildBasicInformation from "../ChildBasicInformation";

type Props = {
  data?: ChildFormType & { id: string };
  isUpdate?: boolean;
};

const ChildFormWrapper = ({ data, isUpdate }: Props) => {
  const [loader, setLoader] = React.useState(false);
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
    },
    onSubmit: (values) => {
      setLoader(true);
      const body = {
        ...values,
        registration_date: getConvertedDate(values.registration_date),
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
    <MultiStepForm
      steps={step}
      onSubmit={formik.handleSubmit}
      loader={loader}
    />
  );
};

export default ChildFormWrapper;
