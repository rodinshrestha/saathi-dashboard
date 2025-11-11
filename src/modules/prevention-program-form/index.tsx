"use client";

import { useFormik } from "formik";
import { FileText, MapPin, Paperclip, Users } from "lucide-react";

import MultiStepForm from "@/components/MultiStepForm";

import LocationDetailForm from "./components/LocationDetailForm";
import ParticipantsForm from "./components/ParticipantsForm";
import ProjectProfileForm from "./components/ProjectProfileForm";
import { PreventionProgramFormType } from "./prevention-program.types";

const PreventionProgramForm = () => {
  const formik = useFormik<PreventionProgramFormType>({
    initialValues: {
      event_title: "",
      activity_code: "",
      fund_code: "",
      organizer: "",
      start_date: null,
      end_date: null,
      province: "",
      district: "",
      address: "",
      ward: "",
      event_venue: "",
      participant: [
        {
          participant_name: "",
          office_school: "",
          position: "",
          phone_number: "",
          email: "",
          age: "",
          sex: "",
          ethnicity: "",
          disability_type: "",
        },
      ],
      profile_picture: "",
      supporting_documents: [],
    },
    onSubmit: () => {
      //
    },
  });

  const step = [
    {
      id: "project-profile",
      label: " Project Profile",
      icon: <FileText />,
      component: <ProjectProfileForm formik={formik} />,
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
      component: <ProjectProfileForm formik={formik} />,
    },
  ];

  return <MultiStepForm steps={step} onSubmit={() => {}} />;
};

export default PreventionProgramForm;
