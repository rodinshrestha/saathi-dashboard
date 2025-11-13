import React from "react";

import Link from "next/link";

import PreventionIcon from "@/assets/svg/PreventionIcon";
import ProsecutionIcon from "@/assets/svg/ProsecutionIcon";
import ProtectionIcon from "@/assets/svg/ProtectionIcon";
import ResponseIcon from "@/assets/svg/ResponseIcon";
import Card from "@/components/Card";
import ModuleSectionWrapper from "@/components/ModuleSectionWrapper";

import { StyledDiv } from "./style";

const data = [
  {
    id: "prevention",
    icon: PreventionIcon,
    form_type: "1 Multi-step Form",
    label: "Prevention",
    label_helper_text: "Community awareness and prevention programs",
    feature: [
      "Community Awareness Workshops",
      "Training & Capacity Building",
      "Event & Participant Management",
      "Multi-level Geographic Tracking",
    ],
    link: "data-entry/prevention-program-form",
  },
  {
    id: "prosecution",
    icon: ProsecutionIcon,
    form_type: "1 Multi-step Form",
    label: "Prosecution",
    label_helper_text: "Legal aid and court support services",
    feature: [
      "Legal Aid Training Programs",
      "Court Support Services",
      "Participant Registration",
      "Case Documentation",
    ],
    link: "data-entry/prosecution-program-form",
  },
  {
    id: "response",
    icon: ResponseIcon,
    form_type: "2 Comprehensive Forms",
    label: "Response",
    label_helper_text: "Shelter and survivor support programs",
    feature: [
      "Saathi Shelter Intake",
      "UNFPA Sherlter Program",
      "Survivor Support Services",
      "Case Management & Tracking",
    ],
    link: "data-entry/response-program-form",
  },
  {
    id: "protection",
    icon: ProtectionIcon,
    form_type: "4 Specialized Forms",
    label: "Protection",
    label_helper_text: "Children and youth protection services",
    feature: [
      "Child Profile Management",
      "Youth Settlement Program",
      "Child Intake Processing",
      "Family Reintegration",
    ],
    link: "#",
  },
];

const DataEntry = () => {
  return (
    <StyledDiv>
      <ModuleSectionWrapper
        title="Data Entry"
        titleHelperText="Select a program to begin data entry. Each program has specialized forms tailored to specific data collection needs."
      />

      <div className="data-entry-card-wrapper">
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
                link={item.link}
              />
            </Link>
          );
        })}
      </div>
    </StyledDiv>
  );
};

export default DataEntry;
