import React from "react";

import DataBlock from "@/components/DataBlock";
import Typography from "@/components/Typography";

import { StyledDiv } from "./style";

const RegistrationProgramBLock = () => {
  return (
    <StyledDiv>
      <Typography as="h3" className="information-block-title">
        Program Information
      </Typography>
      <div className="information-block-wrapper">
        <DataBlock labelName="Program" value="Prevention" />
        <DataBlock
          labelName="Project"
          value="Community Awareness Program 2024"
        />
        <DataBlock labelName="Province" value="Koshi Province" />
        <DataBlock labelName="District" value="Morang" />
        <DataBlock labelName="Date Registered" value="2024-02-15" />
      </div>
    </StyledDiv>
  );
};

export default RegistrationProgramBLock;
