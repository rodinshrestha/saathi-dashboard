"use client";
import React from "react";

import { useFormik } from "formik";
import { FileText, MapPin, Paperclip, Users } from "lucide-react";
import { useRouter } from "next/navigation";

import AttachmentForm from "@/components/AttachmentForm";
import LocationDetailForm from "@/components/LocationDetailForm";
import MultiStepForm from "@/components/MultiStepForm";
import ParticipantsForm from "@/components/ParticipantsForm";
import ProjectProfileForm from "@/components/ProjectProfileForm";
import useFetchEventList from "@/hooks/useFetchEventList";
import useToaster from "@/hooks/useToaster";
import { ProvinceType } from "@/types/province.types";
import { authAxios } from "@/utils/axios";
import { getApiResponseErrorToast } from "@/utils/get-api-response-error-toast";
import { getConvertedDate } from "@/utils/get-converted-date";
import { getParticipantsValue } from "@/utils/get-participants-value";
import { getProvinceId } from "@/utils/get-province-id";

import { PreventionProgramFormType } from "../../prevention-program.types";

type Props = {
  data?: PreventionProgramFormType & { id: string };
  isUpdate?: boolean;
};

const PreventionProgramFormWrapper = ({ data, isUpdate }: Props) => {
  const { fetchEventData, eventData } = useFetchEventList();
  const [loader, setLoader] = React.useState(false);
  const { successToast, errorToast } = useToaster();
  const router = useRouter();

  React.useEffect(() => {
    fetchEventData(1); // 1 means prevention program
  }, [fetchEventData]);

  const formik = useFormik<PreventionProgramFormType>({
    initialValues: {
      program_id: 1,
      project_id: data?.project_id || "",
      event_id: data?.event_id || "",
      activity_code: data?.activity_code || "",
      fund_code: data?.fund_code || "",
      organizer: data?.organizer || "",
      start_date: data?.start_date || null,
      end_date: data?.end_date || null,
      province_id: getProvinceId(data?.province_id as ProvinceType) || "",
      district_id: data?.district_id || "",
      address: data?.address || "",
      ward: data?.ward || "",
      event_venue: data?.event_venue || "",
      participants: getParticipantsValue(data?.participants),
      profile_picture: "",
      // supporting_documents: [],
    },
    onSubmit: () => {
      const { start_date, end_date, ...rest } = formik.values;
      setLoader(true);
      const body = {
        start_date: getConvertedDate(start_date),
        end_date: getConvertedDate(end_date),
        ...rest,
      };

      if (isUpdate && !data?.id) {
        errorToast("Id Cannot be Empty");
        return;
      }

      const method = isUpdate ? "put" : "post";
      const endPoint = isUpdate ? `/survivors/${data?.id}` : "/survivors";

      authAxios[method](endPoint, body)
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
      id: "project-profile",
      label: " Project Profile",
      icon: <FileText />,
      component: <ProjectProfileForm formik={formik} eventData={eventData} />,
    },
    {
      id: "location-details",
      label: "Location Details",
      icon: <MapPin />,
      component: <LocationDetailForm formik={formik} />,
    },
    {
      id: "participants",
      label: " Participants",
      icon: <Users />,
      component: <ParticipantsForm formik={formik} />,
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

export default PreventionProgramFormWrapper;
