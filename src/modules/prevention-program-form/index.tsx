"use client";
import React from "react";

import { useFormik } from "formik";
import { ArrowLeft, FileText, MapPin, Paperclip, Users } from "lucide-react";
import Link from "next/link";

import AttachmentForm from "@/components/AttachmentForm";
import LocationDetailForm from "@/components/LocationDetailForm";
import ModuleSectionWrapper from "@/components/ModuleSectionWrapper";
import MultiStepForm from "@/components/MultiStepForm";
import ParticipantsForm from "@/components/ParticipantsForm";
import ProjectProfileForm from "@/components/ProjectProfileForm";
import useFetchEventList from "@/hooks/useFetchEventList";
import { getConvertedDate } from "@/utils/get-converted-date";

import { PreventionProgramFormType } from "./prevention-program.types";
import { StyledDiv } from "./style";

const PreventionProgramForm = () => {
  const { fetchEventData, eventData } = useFetchEventList();

  React.useEffect(() => {
    fetchEventData(1); // 1 means prevention program
  }, [fetchEventData]);

  const formik = useFormik<PreventionProgramFormType>({
    initialValues: {
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
      // supporting_documents: [],
    },
    onSubmit: () => {
      const { start_date, end_date, ...rest } = formik.values;

      const body = {
        start_date: getConvertedDate(start_date),
        end_date: getConvertedDate(end_date),
        ...rest,
      };

      console.log(body, "final value");
      //
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
    <StyledDiv>
      <Link href="/dashboard/data-entry" className="multi-form-back-btn">
        <ArrowLeft size={16} />
        Back to Program Selection
      </Link>
      <ModuleSectionWrapper
        title="Prevention Program - Data Entry"
        className="multi-form-title"
      />
      <MultiStepForm steps={step} onSubmit={formik.handleSubmit} />
    </StyledDiv>
  );
};

export default PreventionProgramForm;
