import MultiStepFormSectionTitle from "@/components/MultiStepFormSectionTitle";

import ChildFormWrapper from "./components/ChildFormWrapper";
import { StyledDiv } from "./style";

const ChildForm = () => {
  return (
    <StyledDiv>
      <MultiStepFormSectionTitle
        link="/data-entry/protection-program-form"
        linkLabel="Back to Form Selection"
        sectionTitle="Child Profile Form"
        sectionSubTitle="Children Program - Child Profile Registration"
      />
      <ChildFormWrapper />
    </StyledDiv>
  );
};

export default ChildForm;
