"use client";
import React from "react";

import ModuleSectionWrapper from "@/components/ModuleSectionWrapper";
import { SelectValueTypes } from "@/types/select.types";

import DashboardFilter from "./components/DashboardFilter";
import DashboardTab from "./components/DashboardTab";
import { StyledDiv } from "./style";

const Dasbhoard = () => {
  const [selectedProgram, setSelectedProgram] =
    React.useState<SelectValueTypes>("");
  return (
    <StyledDiv>
      <ModuleSectionWrapper
        title="Dashboard"
        titleHelperText="Program Data Overview"
      />

      <DashboardFilter
        setSelectedProgram={setSelectedProgram}
        selectedProgram={selectedProgram}
      />

      <DashboardTab selectedProgram={selectedProgram} />
    </StyledDiv>
  );
};

export default Dasbhoard;
