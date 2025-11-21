import { ArrowLeft } from "lucide-react";

import ModuleSectionWrapper from "@/components/ModuleSectionWrapper";
import NextLink from "@/components/NextLink";
import Typography from "@/components/Typography";

import { StyledDiv } from "./style";

const ResponseProgramForm = () => {
  return (
    <StyledDiv>
      <NextLink href="/data-entry" className="multi-form-back-btn">
        <ArrowLeft size={16} />
        Back to Program Selection
      </NextLink>
      <ModuleSectionWrapper
        title="Response Program - Select Form"
        className="multi-form-title"
      />
      <Typography as="p" className="response-program-subtitle">
        Choose the appropriate to fill
      </Typography>

      <div className="program-form-selection-wrapper">
        <NextLink
          href="response-program-form/saathi-shelter-program-form"
          className="program-selection-content"
        >
          <Typography as="p" className="program-selection-title">
            Saathi Shelter Survivor Intake Form
          </Typography>

          <Typography as="p" className="program-selection-helper-text">
            Complete intake form for survivors entering Saathi shelter programs
            including survivor information, perpetrator details, and support
            services.
          </Typography>
        </NextLink>

        <NextLink
          href="response-program-form/unfpa-shelter-program-form"
          className="program-selection-content"
        >
          <Typography as="p" className="program-selection-title">
            UNFPA Supported Shelter Program Form
          </Typography>

          <Typography as="p" className="program-selection-helper-text">
            Registration from for UNFPA supported shelter programs including
            incident details, survivor information, and case management.
          </Typography>
        </NextLink>
      </div>
    </StyledDiv>
  );
};

export default ResponseProgramForm;
