import React from "react";

import clsx from "clsx";

import MiniCardSkeletonLoading from "../Loader/MiniCardSkeletonLoading";
import Typography from "../Typography";

import { StyledDiv } from "./style";

type Props = {
  label: string;
  value: string | number;
  variant?: "green" | "blue" | "orange" | "yellow";
  icon: React.ReactNode;
  isLoading?: boolean;
};

const MiniCard = ({
  label,
  value,
  icon: Icon,
  isLoading,
  variant = "green",
}: Props) => {
  if (isLoading) {
    return <MiniCardSkeletonLoading />;
  }

  return (
    <StyledDiv className={clsx("mini-card-wrapper", variant)}>
      <div className="mini-card-content-wrapper">
        <Typography as="p" className="mini-card-label">
          {label}
        </Typography>
        <Typography as="p" className="mini-card-value">
          {value}
        </Typography>
      </div>
      <div className="mini-card-icon-wrapper">{Icon}</div>
    </StyledDiv>
  );
};

export default MiniCard;
