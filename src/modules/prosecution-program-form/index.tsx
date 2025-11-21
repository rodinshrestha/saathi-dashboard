import MultiStepFormSectionTitle from "@/components/MultiStepFormSectionTitle";

import ProsecutionProgramFormWrapper from "./components/ProsecutionProgramFormWrapper";
import { StyledDiv } from "./style";

const ProsecutionProgramForm = () => {
  return (
    <StyledDiv>
      <MultiStepFormSectionTitle
        linkLabel=" Back to Program Selection"
        sectionTitle="Prosecution Program - Data Entry"
        link="/data-entry"
      />

      <ProsecutionProgramFormWrapper />
    </StyledDiv>
  );
};

export default ProsecutionProgramForm;
