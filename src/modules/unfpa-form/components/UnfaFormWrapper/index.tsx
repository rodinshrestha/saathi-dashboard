"use client";
import React from "react";

import { useFormik } from "formik";
import { CircleAlert, FileText, Paperclip, User } from "lucide-react";
import { useRouter } from "next/navigation";

import AttachmentForm from "@/components/AttachmentForm";
import MultiStepForm from "@/components/MultiStepForm";
import useToaster from "@/hooks/useToaster";
import { ProvinceType } from "@/types/province.types";
import { authAxios } from "@/utils/axios";
import { getApiResponseErrorToast } from "@/utils/get-api-response-error-toast";
import { getConvertedDate } from "@/utils/get-converted-date";
import { getProvinceId } from "@/utils/get-province-id";
import { initializeAttachmentsData } from "@/utils/initialize-attachments-data";
import { objectToFormData } from "@/utils/object-to-form-data";
import { sanitizeAttachmentsFile } from "@/utils/sanitize-attachments-file";

import { UNFPAFormType } from "../../unfpa.types";
import AdditionalInfoForm from "../AdditionalInfoForm";
import GeneralInfoForm from "../GeneralInfoForm";
import IncidentDetailsForm from "../IncidentDetailsForm";
import SurvivorInform from "../SurvivorInfoForm";

type Props = {
  data?: UNFPAFormType & { id: string };
  isUpdate?: boolean;
};

const UnfaFormWrapper = ({ data, isUpdate = false }: Props) => {
  const [loader, setLoader] = React.useState(false);

  const { successToast, errorToast } = useToaster();
  const router = useRouter();

  const formik = useFormik<UNFPAFormType>({
    initialValues: {
      program_id: 6,
      unique_case_id: data?.unique_case_id || "",
      registration_date: data?.registration_date || null,
      case_type: data?.case_type || "",
      safe_house_shelter_name: data?.safe_house_shelter_name || "",
      full_name: data?.full_name || "",
      contact_number: data?.contact_number || "",
      province_id: getProvinceId(data?.province_id as ProvinceType) || "",
      district_id: data?.district_id || "",
      municipality_or_ward: data?.municipality_or_ward || "",
      temporary_address: data?.temporary_address || "",
      citizenship_or_id_type: data?.citizenship_or_id_type || "",
      citizenship_id_no: data?.citizenship_id_no || "",
      dependent_children: data?.dependent_children || "",
      date_of_incident: data?.date_of_incident || null,
      location_of_incident: data?.location_of_incident || "",
      type_of_violence: data?.type_of_violence || "",
      subtype: data?.subtype || "",
      perpetrator_relationship: data?.perpetrator_relationship || "",
      perpetrator_gender: data?.perpetrator_gender || "",
      perpetrator_age: data?.perpetrator_age || "",
      perpetrator_address: data?.perpetrator_address || "",
      police_case_filed: data?.police_case_filed || "",
      case_registration_number: data?.case_registration_number || "",
      legal_protection_order: data?.legal_protection_order || "",
      previous_incidents_or_repeated_violence:
        data?.previous_incidents_or_repeated_violence || "",
      specify_details: data?.specify_details || "",
      additional_information_or_notes:
        data?.additional_information_or_notes || "",
      profile_picture: data?.profile_picture || null,
      attachments: initializeAttachmentsData(data?.attachments),
    },
    onSubmit: (values) => {
      setLoader(true);

      const { registration_date, date_of_incident, attachments, ...rest } =
        values;

      const body = {
        registration_date: getConvertedDate(registration_date),
        date_of_incident: getConvertedDate(date_of_incident),
        attachments: sanitizeAttachmentsFile(attachments),
        ...rest,
      };

      if (isUpdate && !data?.id) {
        errorToast("Id Cannot be Empty");
        return;
      }

      const formData = objectToFormData(body, isUpdate);

      const endPoint = isUpdate ? `/survivors/${data?.id}` : "/survivors";

      authAxios
        .post(endPoint, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(() => {
          successToast(
            isUpdate
              ? "Project updated successfully"
              : "Project created successfully"
          );
          router.push("/registration-list");
        })
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

export default UnfaFormWrapper;
