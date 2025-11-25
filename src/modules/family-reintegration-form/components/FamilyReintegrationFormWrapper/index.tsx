"use client";
import React from "react";

import { useFormik } from "formik";
import { FileText, Heart, House, Paperclip, Users } from "lucide-react";
import { useRouter } from "next/navigation";

import AttachmentForm from "@/components/AttachmentForm";
import MultiStepForm from "@/components/MultiStepForm";
import useToaster from "@/hooks/useToaster";
import { authAxios } from "@/utils/axios";
import { getApiResponseErrorToast } from "@/utils/get-api-response-error-toast";
import { initializeAttachmentsData } from "@/utils/initialize-attachments-data";
import { objectToFormData } from "@/utils/object-to-form-data";
import { sanitizeAttachmentsFile } from "@/utils/sanitize-attachments-file";

import { FamilyReintegrationFormType } from "../../family-reintegration.types";
import FamilyReintegrationDetailsForm from "../FamilyReintegrationDetailsForm";
import FamilyReintegrationHousingForm from "../FamilyReintegrationHousingForm";
import FamilyReintegrationInformationForm from "../FamilyReintegrationInformationForm";
import FamilyReintegrationNeedForm from "../FamilyReintegrationNeedsForm";

type Props = {
  data?: FamilyReintegrationFormType & { id: string };
  isUpdate?: boolean;
};

const FamilyReintegrationFormWrapper = ({ data, isUpdate }: Props) => {
  const [loader, setLoader] = React.useState(false);

  const router = useRouter();
  const { successToast, errorToast } = useToaster();

  const formik = useFormik<FamilyReintegrationFormType>({
    initialValues: {
      program_id: 10,
      date_reintegration: data?.date_reintegration || null,
      total_duration_of_service: data?.total_duration_of_service || "",
      address_during_reintegration: data?.address_during_reintegration || "",
      age_during_reintegration: data?.age_during_reintegration || "",
      education: data?.education || "",
      grade: data?.grade || "",
      medication_required: data?.medication_required || "",
      medication_details: data?.medication_details || "",
      number_of_family_member: data?.number_of_family_member || "",
      head_of_family: data?.head_of_family || "",
      monthly_family_income: data?.monthly_family_income || "",
      is_income_sufficent: data?.is_income_sufficent || "",
      if_not_sufficient: data?.if_not_sufficient || "",
      substance_use_in_family: data?.substance_use_in_family || [],
      any_history_of_violence: data?.any_history_of_violence || "",
      if_yes_to_violence: data?.if_yes_to_violence || [],
      reported_to_police: data?.reported_to_police || "",
      housing_type: data?.housing_type || "",
      utilities_available: data?.utilities_available || [],
      is_perpetrator_living_in_same_house:
        data?.is_perpetrator_living_in_same_house || "",
      risk_of_revictimization: data?.risk_of_revictimization || "",
      any_threat_to_child_or_youth: data?.any_threat_to_child_or_youth || "",
      is_home_environment_safe: data?.is_home_environment_safe || "",
      supports_need: data?.supports_need || [],
      coordination_and_referral_details:
        data?.coordination_and_referral_details || "",
      future_plan: data?.future_plan || "",
      profile_picture: data?.profile_picture || null,
      attachments: initializeAttachmentsData(data?.attachments),
    },
    onSubmit: (values) => {
      setLoader(true);

      if (isUpdate && !data?.id) {
        errorToast("Id Cannot be Empty");
        return;
      }

      const { attachments, ...rest } = values;

      const body = {
        attachments: sanitizeAttachmentsFile(attachments),
        ...rest,
      };

      const formData = objectToFormData(body);

      const method = isUpdate ? "put" : "post";
      const endPoint = isUpdate ? `/survivors/${data?.id}` : "/survivors";

      authAxios[method](endPoint, formData, {
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
      component: <AttachmentForm formik={formik} />,
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

export default FamilyReintegrationFormWrapper;
