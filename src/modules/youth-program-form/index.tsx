import MultiStepFormSectionTitle from "@/components/MultiStepFormSectionTitle";

import YouthFormWrapper from "./components/YouthFormWrapper";
import { StyledDiv } from "./style";

const YouthProgramForm = () => {
  return (
    <StyledDiv>
      <MultiStepFormSectionTitle
        link="/data-entry/protection-program-form"
        linkLabel="Back to Form Selection"
        sectionTitle="Youth Profile Form"
        sectionSubTitle="Children Program - Youth Settlement Program"
      />
      <YouthFormWrapper />
    </StyledDiv>
  );
};

export default YouthProgramForm;
