import React from "react";

import clsx from "clsx";

import { SpinnerLoader } from "@/components/Loader/SpinnerLoader";
import Typography from "@/components/Typography";
import { MetrixDataType } from "@/types/metrix-data.types";

import { StyledDiv } from "./style";

type Props = {
  referrals_from: Array<MetrixDataType>;
  referrals_to: Array<MetrixDataType>;
  className?: string;
  showDivider?: boolean;
  variant?: "horizontal" | "vertical";
  isLoading?: boolean;
};

const ReferalSummary = ({
  className,
  showDivider,
  variant = "horizontal",
  referrals_from = [],
  referrals_to = [],
  isLoading,
}: Props) => {
  if (isLoading) {
    return (
      <StyledDiv className="loader-wrapper">
        <SpinnerLoader />
      </StyledDiv>
    );
  }

  return (
    <StyledDiv className={clsx(className)}>
      <Typography as="p" className={"referal-summary-title"}>
        Referral Summary
      </Typography>

      <div className={clsx("referal-list-details-wrapper", variant)}>
        <ReferalList title="Referral To" data={referrals_to} />
        <ReferalList
          title="Referral From"
          data={referrals_from}
          showDivider={showDivider}
          className="orange-text"
        />
      </div>
    </StyledDiv>
  );
};

export default ReferalSummary;

type ReferalListProps = {
  title: string;
  data: Array<{ label: string; value: string }>;
  showDivider?: boolean;
  className?: string;
};

const ReferalList = ({
  title,
  data = [],
  showDivider,
  className,
}: ReferalListProps) => {
  return (
    <div className={clsx("referal-list-content ", { divider: showDivider })}>
      <Typography as="p" className="referral-title">
        {title}
      </Typography>

      {data.map((x, i) => {
        return (
          <div className="referal-list" key={i}>
            <Typography as="p" className="referal-sub-title">
              {x.label}
            </Typography>
            <Typography as="p" className={clsx("referal-value", className)}>
              {x.value}
            </Typography>
          </div>
        );
      })}
    </div>
  );
};
