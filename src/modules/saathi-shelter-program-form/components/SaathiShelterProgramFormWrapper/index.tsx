"use client";
import React from "react";

import { useFormik } from "formik";
import {
  Briefcase,
  CircleAlert,
  FileText,
  Heart,
  MapPin,
  Paperclip,
  User,
  Users,
} from "lucide-react";
import { useRouter } from "next/navigation";

import AttachmentForm from "@/components/AttachmentForm";
import MultiStepForm from "@/components/MultiStepForm";
import useToaster from "@/hooks/useToaster";
import { ProvinceType } from "@/types/province.types";
import { authAxios } from "@/utils/axios";
import { convertResponseObj } from "@/utils/convert-responese-obj";
import { getApiResponseErrorToast } from "@/utils/get-api-response-error-toast";
import { getConvertedDate } from "@/utils/get-converted-date";
import { getProvinceId } from "@/utils/get-province-id";

import { SaathiShelterProgramFormType } from "../../saathi-shelter.types";
import ShelterAdditionalForm from "../ShelterAdditionalForm";
import ShelterDurationForm from "../ShelterDurationForm";
import ShelterPerpetratorForm from "../ShelterPerpetratorForm";
import ShelterReferralsForm from "../ShelterReferralsForm";
import ShelterReintegrationForm from "../ShelterReintegrationForm";
import ShelterServiceForm from "../ShelterServiceForm";
import ShelterSurvivorForm from "../ShelterSurvivorForm";

type Props = {
  data?: SaathiShelterProgramFormType & { id: string };
  isUpdate?: boolean;
};

const SaathiShelterProgramFormWrapper = ({ data, isUpdate }: Props) => {
  const [loader, setLoader] = React.useState(false);

  const router = useRouter();
  const { successToast, errorToast } = useToaster();

  const formik = useFormik<SaathiShelterProgramFormType>({
    initialValues: {
      program_id: 5,
      full_name: data?.full_name || "",
      date_of_entry: data?.date_of_entry || null,
      code_no: data?.code_no || "",
      age_of_survivor: data?.age_of_survivor || "",
      number_of_dependent_children: data?.number_of_dependent_children || "",
      dependent_age_gender: data?.dependent_age_gender || "",
      province_id: getProvinceId(data?.province_id as ProvinceType) || "",
      district_id: data?.district_id || "",
      enthnicity_id: data?.enthnicity_id || "",
      type_of_violence: data?.type_of_violence || "",
      marital_status: data?.marital_status || "",
      pregnancy_status: data?.pregnancy_status || "",
      disability_status: data?.disability_status || "",
      impact_of_violence: data?.impact_of_violence || [],
      reason_for_comming_to_shelter: data?.reason_for_comming_to_shelter || "",
      perpetrator_name: data?.perpetrator_name || "",
      number_of_perpetrators: data?.number_of_perpetrators || "",
      age: data?.age || "",
      education: data?.education || "",
      occupation: data?.occupation || "",
      politically_socially_powerful: data?.politically_socially_powerful || "",
      substance_use: data?.substance_use || "",
      charged_or_arrested: data?.charged_or_arrested || "",
      physical_status: data?.physical_status || "",
      mental_status: data?.mental_status || "",
      referred_form: data?.referred_form || "",
      referred_to_by_saathi: data?.referred_to_by_saathi || "",
      referred_date_of_entry: data?.referred_date_of_entry || null,
      date_of_discharge: data?.date_of_discharge || null,
      duration_range: data?.duration_range || "",
      service_provided: data?.service_provided || [],
      first_time_in_shelter: data?.first_time_in_shelter || "",
      previous_stay_duration: data?.previous_stay_duration || "",
      immediate_support: data?.immediate_support || "",
      long_term_support: data?.long_term_support || "",
      reintegration_status: data?.reintegration_status || "",
      family_reintegration: data?.family_reintegration || "",
      reintegration_new_community: data?.reintegration_new_community || "",
      counseling_via_phone: data?.counseling_via_phone || "",
      counseling_to_police: data?.counseling_to_police || "",
      current_status_of_survivor_and_dependents:
        data?.current_status_of_survivor_and_dependents || "",
      other_remarks: data?.other_remarks || "",
    },
    onSubmit: (values) => {
      setLoader(true);

      const {
        date_of_entry,
        referred_date_of_entry,
        date_of_discharge,
        ...rest
      } = values;

      const body = {
        date_of_entry: getConvertedDate(date_of_entry),
        referred_date_of_entry: getConvertedDate(referred_date_of_entry),
        date_of_discharge: getConvertedDate(date_of_discharge),
        ...rest,
      };

      if (isUpdate && !data?.id) {
        errorToast("Id Cannot be Empty");
        return;
      }

      const method = isUpdate ? "put" : "post";
      const endPoint = isUpdate ? `/survivors/${data?.id}` : "/survivors";

      authAxios[method](endPoint, convertResponseObj(body))
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
      id: "general-info",
      label: "General Info",
      icon: <User />,
      component: <ShelterSurvivorForm formik={formik} />,
    },
    {
      id: "perpetrator-information",
      label: "Perpetrator Information",
      icon: <Users />,
      component: <ShelterPerpetratorForm formik={formik} />,
    },
    {
      id: "referrals",
      label: "Referrals",
      icon: <CircleAlert />,
      component: <ShelterReferralsForm formik={formik} />,
    },
    {
      id: "duration",
      label: "Duration",
      icon: <Heart />,
      component: <ShelterDurationForm formik={formik} />,
    },
    {
      id: "service",
      label: "Service",
      icon: <Briefcase />,
      component: <ShelterServiceForm formik={formik} />,
    },
    {
      id: "reintegration",
      label: "Reintegration",
      icon: <MapPin />,
      component: <ShelterReintegrationForm formik={formik} />,
    },
    {
      id: "additional-info",
      label: "Additional Info",
      icon: <FileText />,
      component: <ShelterAdditionalForm formik={formik} />,
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

export default SaathiShelterProgramFormWrapper;
