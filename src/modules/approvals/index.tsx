import React from "react";

import ModuleSectionWrapper from "@/components/ModuleSectionWrapper";

import { StyledDiv } from "./style";

const ApprovalsModule = () => {
  return (
    <StyledDiv>
      <ModuleSectionWrapper
        title="Approvals"
        titleHelperText="Review and apprive pending registrations"
      />
    </StyledDiv>
  );
};

export default ApprovalsModule;
