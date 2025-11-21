import React from "react";

import { SpinnerLoader } from "@/components/Loader/SpinnerLoader";
import Typography from "@/components/Typography";

import { DashboardProtectionData } from "../DashboardProtectionTab/dashboard-protection.types";

import { StyledDiv } from "./style";
type Props = {
  data?: DashboardProtectionData;
  isLoading?: boolean;
};

const DashboardCoverage = ({ data, isLoading }: Props) => {
  const { province_coverage = [] } = data || {};

  if (isLoading) {
    return (
      <StyledDiv className="loader-wrapper">
        <SpinnerLoader />
      </StyledDiv>
    );
  }

  // if (!province_coverage.length) {
  //   return null;
  // }
  return (
    <StyledDiv>
      <Typography as="p" className="dashboard-coverage-title">
        District & Province Coverage
      </Typography>

      <div className="province-coverage-list">
        {province_coverage.map((x, i) => {
          return (
            <div className="province-coverage-wrapper" key={i}>
              <Typography as="p" className="province-title">
                {x.label}
              </Typography>
              <Typography as="p" className="province-value">
                {x.value}
              </Typography>
            </div>
          );
        })}
      </div>
    </StyledDiv>
  );
};

export default DashboardCoverage;
