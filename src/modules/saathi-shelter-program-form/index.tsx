import MultiStepFormSectionTitle from "@/components/MultiStepFormSectionTitle";

import SaathiShelterProgramFormWrapper from "./components/SaathiShelterProgramFormWrapper";
import { StyledDiv } from "./style";

const SaathiShelterProgramForm = () => {
  return (
    <StyledDiv>
      <MultiStepFormSectionTitle
        link="/data-entry/response-program-form"
        linkLabel="Back to Form Selection"
        sectionTitle="Saathi Shelter Survivor Intake Form"
      />
      <SaathiShelterProgramFormWrapper />
    </StyledDiv>
  );
};

export default SaathiShelterProgramForm;
