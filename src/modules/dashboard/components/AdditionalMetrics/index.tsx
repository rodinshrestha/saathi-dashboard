import React from "react";

import clsx from "clsx";

import { SpinnerLoader } from "@/components/Loader/SpinnerLoader";
import Typography from "@/components/Typography";

import { DashboardProtectionData } from "../DashboardProtectionTab/dashboard-protection.types";

import { StyledDiv } from "./style";

type Props = {
  data?: DashboardProtectionData;
  isLoading?: boolean;
};

const AdditionalMetrics = ({ data, isLoading }: Props) => {
  if (isLoading) {
    return (
      <StyledDiv className="loader-wrapper">
        <SpinnerLoader />
      </StyledDiv>
    );
  }

  return (
    <StyledDiv className="flex-1">
      <Typography as="p" className="additional-metrix-title">
        Additional Metrics
      </Typography>

      <AdditionalMetricData
        label="No. of Perpertrators per Project"
        value={data?.perpetrator_count || 0}
      />
      <AdditionalMetricData
        className="divider green"
        label="No. of Scholarship Programs"
        value={20}
      />
    </StyledDiv>
  );
};

export default AdditionalMetrics;

type AdditionalMetricDataProps = {
  label: string;
  value: number;
  className?: string;
};

const AdditionalMetricData = ({
  className,
  label = "",
  value = 0,
}: AdditionalMetricDataProps) => {
  return (
    <div className={clsx("additional-data-metrix-wrapper", className)}>
      <Typography as="p" className="additional-data-metrix-title">
        {label}
      </Typography>
      <Typography as="p" className="additional-data-metrix-value">
        {value || "0"}
      </Typography>
    </div>
  );
};
