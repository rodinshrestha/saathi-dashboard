import MultiStepFormSectionTitle from "@/components/MultiStepFormSectionTitle";

import FamilyReintegrationFormWrapper from "./components/FamilyReintegrationFormWrapper";
import { StyledDiv } from "./style";

const FamilyReintegrationForm = () => {
  return (
    <StyledDiv>
      <MultiStepFormSectionTitle
        link="/data-entry/protection-program-form"
        linkLabel="Back to Protection"
        sectionTitle="family Reintegration Form"
        sectionSubTitle="Children Program - Family Reunification Assessment"
      />
      <FamilyReintegrationFormWrapper />
    </StyledDiv>
  );
};

export default FamilyReintegrationForm;
