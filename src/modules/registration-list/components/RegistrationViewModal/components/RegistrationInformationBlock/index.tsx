import React from "react";

import DataBlock from "@/components/DataBlock";
import Typography from "@/components/Typography";

import { StyledDiv } from "./style";

const RegistrationInformationBlock = () => {
  return (
    <StyledDiv>
      <Typography as="h3" className="information-block-title">
        Personal Information
      </Typography>
      <div className="information-block-wrapper">
        <DataBlock labelName="Age" value="25 Years" />
        <DataBlock labelName="Gender" value="Female" />
        <DataBlock labelName="Ethnicity" value="Hill Janajati" />
        <DataBlock labelName="Email" value="maria.santos@example.com" />
        <DataBlock labelName="Phone" value="+977-9810000000" />
        <DataBlock labelName="Address" value="Ward No. 1, Koshi Province" />
      </div>
    </StyledDiv>
  );
};

export default RegistrationInformationBlock;
