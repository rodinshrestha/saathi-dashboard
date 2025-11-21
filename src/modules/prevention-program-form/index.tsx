import MultiStepFormSectionTitle from "@/components/MultiStepFormSectionTitle";

import PreventionProgramFormWrapper from "./components/PreventionProgramFormWrapper";
import { StyledDiv } from "./style";

const PreventionProgramForm = () => {
  return (
    <StyledDiv>
      <MultiStepFormSectionTitle
        link="/data-entry"
        linkLabel="back to Program Selection"
        sectionTitle="Prevention Program - Data Entry"
      />

      <PreventionProgramFormWrapper />
    </StyledDiv>
  );
};

export default PreventionProgramForm;
