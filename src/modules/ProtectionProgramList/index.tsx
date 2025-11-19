"use client";
import React from "react";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import ChildIcon from "@/assets/svg/ChildIcon";
import ChildIntakeIcon from "@/assets/svg/ChildIntakeIcon";
import FamilyIcon from "@/assets/svg/FamilyIcon";
import YouthIcon from "@/assets/svg/YouthIcon";
import Card from "@/components/Card";
import ModuleSectionWrapper from "@/components/ModuleSectionWrapper";

import { StyledDiv } from "../approvals/style";

const data = [
  {
    id: "child-profile-form",
    icon: ChildIcon,
    form_type: "3 Steps",
    label: "Child Profile Form",
    label_helper_text: "Complete profile for child enrollment",
    feature: [
      "Registration & Basic Details",
      "background Information",
      "Health Assessment",
      "Psychosocial Evaluation",
    ],
    link: "data-entry/prevention-program-form",
  },
  {
    id: "youth-profile-form",
    icon: YouthIcon,
    form_type: "3 Steps",
    label: "Youth Profile Form",
    label_helper_text: "Youth settlement program profile",
    feature: [
      "Academic Information",
      "College Enrollment Details",
      "Performance Assessment",
      "Behaviour Evaluation",
    ],
    link: "data-entry/prosecution-program-form",
  },
  {
    id: "child-intake-form",
    icon: ChildIntakeIcon,
    form_type: "9 Steps",
    label: "Child Intake Form",
    label_helper_text: "Comprehensive intake assessment",
    feature: [
      "Complete Basic Information",
      "Health & Medical Details",
      "Violence & Perotection Assessment",
      "Family Information & Services",
    ],
    link: "data-entry/response-program-form",
  },
  {
    id: "family-reintegration-form",
    icon: FamilyIcon,
    form_type: "5 Steps",
    label: "Family Reintegration Form",
    label_helper_text: "Family reunification assessment",
    feature: [
      "Reintegration Details",
      "Family Structure & Income",
      "Housing & Safety Status",
      "Support Needs Assessment",
    ],
    link: "#",
  },
];

const ProtectionProgramList = () => {
  return (
    <StyledDiv>
      <Link href="/dashboard/data-entry" className="multi-form-back-btn">
        <ArrowLeft size={16} />
        Back to Program Selection
      </Link>
      <ModuleSectionWrapper
        title="Protection Program"
        titleHelperText="Children Program - Select a from to begin data entry for child protection and youth settlement services"
      />

      <div className="protection-program-card-wrapper">
        {data.map((item) => {
          return (
            <Link href={item.link} key={item.id} className="card-link">
              <Card
                id={item.id}
                icon={item.icon}
                form_type={item.form_type}
                label={item.label}
                label_helper_text={item.label_helper_text}
                feature={item.feature}
                btnLabel="Start Form"
              />
            </Link>
          );
        })}
      </div>
    </StyledDiv>
  );
};

export default ProtectionProgramList;
