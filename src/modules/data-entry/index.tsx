import React from "react";

import Card from "@/components/Card";
import ModuleSectionWrapper from "@/components/ModuleSectionWrapper";

import { StyledDiv } from "./style";

const DataEntry = () => {
  return (
    <StyledDiv>
      <ModuleSectionWrapper
        title="Data Entry"
        titleHelperText="Select a program to begin data entry. Each program has specialized forms tailored to specific data collection needs."
      />

      <div className="data-entry-card-wrapper">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </StyledDiv>
  );
};

export default DataEntry;
