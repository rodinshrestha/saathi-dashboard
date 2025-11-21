import MultiStepFormSectionTitle from "@/components/MultiStepFormSectionTitle";

import UnfaFormWrapper from "./components/UnfaFormWrapper";
import { StyledDiv } from "./style";

const UnfpaForm = () => {
  return (
    <StyledDiv className="unfa-form-wrapper">
      <MultiStepFormSectionTitle
        link="/data-entry/response-program-form"
        sectionTitle="UNFPA Supported SHelter Program Form"
        linkLabel=" Back to Program Selection"
      />

      <UnfaFormWrapper />
    </StyledDiv>
  );
};

export default UnfpaForm;
