import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import ModuleSectionWrapper from "@/components/ModuleSectionWrapper";
import Typography from "@/components/Typography";

import { StyledDiv } from "./style";

const ResponseProgramForm = () => {
  return (
    <StyledDiv>
      <Link href="/dashboard/data-entry" className="multi-form-back-btn">
        <ArrowLeft size={16} />
        Back to Program Selection
      </Link>
      <ModuleSectionWrapper
        title="Response Program - Select Form"
        className="multi-form-title"
      />
      <Typography as="p" className="response-program-subtitle">
        Choose the appropriate to fill
      </Typography>

      <div className="program-form-selection-wrapper">
        <Link href="#" className="program-selection-content">
          <Typography as="p" className="program-selection-title">
            Saathi Shelter Survivor Intake Form
          </Typography>

          <Typography as="p" className="program-selection-helper-text">
            Complete intake form for survivors entering Saathi shelter programs
            including survivor information, perpetrator details, and support
            services.
          </Typography>
        </Link>

        <Link
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
        </Link>
      </div>
    </StyledDiv>
  );
};

export default ResponseProgramForm;
