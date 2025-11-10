import React from "react";

import clsx from "clsx";

import Typography from "../Typography";

import { StyledDiv } from "./style";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon?: any;
  labelName: string;
  value: string;
  className?: string;
};

const DataBlock = ({ icon: Icon, labelName, value, className }: Props) => {
  return (
    <StyledDiv className={clsx("data-block-wrapper", className)}>
      <div className="label-wrapper">
        {Icon && <Icon size={16} />}
        {labelName}
      </div>
      <div className="value-wrapper">
        <Typography as="p" className="data-content">
          {value}
        </Typography>
      </div>
    </StyledDiv>
  );
};

export default DataBlock;
