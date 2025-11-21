import MultiStepFormSectionTitle from "@/components/MultiStepFormSectionTitle";

import ChildIntakeFormWrapper from "./components/ChildIntakeFormWrapper";
import { StyledDiv } from "./style";

const ChildIntakeProgramForm = () => {
  return (
    <StyledDiv>
      <MultiStepFormSectionTitle
        linkLabel=" Back to Form Selection"
        link="/data-entry/protection-program-form"
        sectionTitle="Child Intake Form"
        sectionSubTitle="Protection Children Program - Comprehensive Intake Assessment"
      />
      <ChildIntakeFormWrapper />
    </StyledDiv>
  );
};

export default ChildIntakeProgramForm;
