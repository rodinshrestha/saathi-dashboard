"use client";

import { useFormik } from "formik";
import { ArrowLeft, FileText, MapPin, Paperclip, Users } from "lucide-react";
import Link from "next/link";

import AttachmentForm from "@/components/AttachmentForm";
import LocationDetailForm from "@/components/LocationDetailForm";
import ModuleSectionWrapper from "@/components/ModuleSectionWrapper";
import MultiStepForm from "@/components/MultiStepForm";
import ParticipantsForm from "@/components/ParticipantsForm";
import ProjectProfileForm from "@/components/ProjectProfileForm";

import { PreventionProgramFormType } from "../prevention-program-form/prevention-program.types";

import { StyledDiv } from "./style";

const ProsecutionProgramForm = () => {
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
      component: <AttachmentForm />,
    },
  ];

  return (
    <StyledDiv>
      <Link href="/dashboard/data-entry" className="multi-form-back-btn">
        <ArrowLeft size={16} />
        Back to Program Selection
      </Link>
      <ModuleSectionWrapper
        title="Prosecution Program - Data Entry"
        className="multi-form-title"
      />
      <MultiStepForm steps={step} onSubmit={formik.handleSubmit} />
    </StyledDiv>
  );
};

export default ProsecutionProgramForm;
