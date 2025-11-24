"use client";
import React from "react";

import { useFormik } from "formik";
import { FileText, MapPin, Paperclip, Users } from "lucide-react";

import AttachmentForm from "@/components/AttachmentForm";
import LocationDetailForm from "@/components/LocationDetailForm";
import MultiStepForm from "@/components/MultiStepForm";
import ParticipantsForm from "@/components/ParticipantsForm";
import ProjectProfileForm from "@/components/ProjectProfileForm";
import useFetchEventList from "@/hooks/useFetchEventList";
import useToaster from "@/hooks/useToaster";
import { PreventionProgramFormType } from "@/modules/prevention-program-form/prevention-program.types";
import { authAxios } from "@/utils/axios";
import { getApiResponseErrorToast } from "@/utils/get-api-response-error-toast";
import { getConvertedDate } from "@/utils/get-converted-date";

type Props = {
  data?: PreventionProgramFormType & { id: string };
  isUpdate?: boolean;
};

const ProsecutionProgramFormWrapper = ({ data, isUpdate }: Props) => {
  const { fetchEventData, eventData } = useFetchEventList();
  const [loader, setLoader] = React.useState(false);
  const { successToast, errorToast } = useToaster();

  React.useEffect(() => {
    fetchEventData(2); // 2 means prosecution program
  }, [fetchEventData]);

  const formik = useFormik<PreventionProgramFormType>({
    initialValues: {
      program_id: 2,
      project_id: "",
      event_id: "",
      activity_code: "",
      fund_code: "",
      organizer: "",
      start_date: null,
      end_date: null,
      province_id: "",
      district_id: "",
      address: "",
      ward: "",
      event_venue: "",
      participant: [
        {
          participant_name: "",
          organization_id: "",
          position: "",
          phone_number: "",
          email: "",
          age: "",
          sex: "",
          ethnicity_id: "",
          disability_type: "",
        },
      ],
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

export default ProsecutionProgramFormWrapper;
