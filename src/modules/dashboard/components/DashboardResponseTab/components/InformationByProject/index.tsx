import React from "react";

import clsx from "clsx";

import { SpinnerLoader } from "@/components/Loader/SpinnerLoader";
import Typography from "@/components/Typography";

import { DashbordResponseData } from "../../dashboard-response.types";

import { StyledDiv } from "./style";

type Props = {
  data?: DashbordResponseData;
  isLoading?: boolean;
};

const InformationByProject = ({ data, isLoading = true }: Props) => {
  const projectData = [
    {
      label: "UNFPA Supported Shelter Program",
      value: data?.perpetrator_count_of_UNFPA_supported_shelter_program || 0,
    },
    {
      label: "Saathi Shelter Intake Program",
      value: data?.perpetrator_count_of_saathi_sheltor_intake || 0,
    },
  ];

  const informationStatsList = [
    { label: "Charged/Arrested", value: data?.chargedPerpetrators || 0 },
    {
      label: "Socially Powerful",
      value: data?.sociallyPowerfulPerpetrators || 0,
    },
    {
      label: "Substance Use",
      value: data?.substanceUsingPerpetrators || 0,
    },
    {
      label: "Mental Health Issues",
      value: data?.mentalHealthPerpetrators || 0,
    },
  ];

  if (isLoading) {
    return (
      <StyledDiv className="loader-wrapper">
        <SpinnerLoader />
      </StyledDiv>
    );
  }

  return (
    <StyledDiv className="flex-1">
      <Typography as="p" className="information-project-title">
        Perpetrator Information by Project
      </Typography>

      <div className="information-record-wrapper">
        <Typography as="p" className="information-record-value">
          {data?.perpetrator_count || 0}
        </Typography>
        <Typography as="p" className="information-record-title">
          Total Perpetrators Record
        </Typography>
      </div>

      <div className="information-project-wrapper">
        {projectData.map((x, i) => {
          return (
            <div className="information-project-content" key={i}>
              <Typography as="p" className="project-title">
                {x.label}
              </Typography>
              <Typography as="p" className="project-value">
                {x.value} perpetrators
              </Typography>
            </div>
          );
        })}
      </div>

      <div className="information-stats-wrapper">
        {informationStatsList.map((x, i) => {
          return (
            <div
              className={clsx(`information-stats information-stats-${i}`)}
              key={i}
            >
              <Typography as="p" className="information-stats-title">
                {x.label}
              </Typography>
              <Typography
                as="p"
                className={`information-stats-value information-value-${i}`}
              >
                {x.value}
              </Typography>
            </div>
          );
        })}
      </div>
    </StyledDiv>
  );
};

export default InformationByProject;
