import React from "react";

import ModuleSectionWrapper from "@/components/ModuleSectionWrapper";

import DashboardFilter from "./components/DashboardFilter";
import DashboardTab from "./components/DashboardTab";
import { StyledDiv } from "./style";

const Dasbhoard = () => {
  return (
    <StyledDiv>
      <ModuleSectionWrapper
        title="Dashboard"
        titleHelperText="Program Data Overview"
      />

      <DashboardFilter />

      <DashboardTab />
    </StyledDiv>
  );
};

export default Dasbhoard;
