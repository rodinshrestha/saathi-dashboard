import React from "react";

import { ArrowLeft } from "lucide-react";

import ModuleSectionWrapper from "../ModuleSectionWrapper";
import NextLink from "../NextLink";

type Props = {
  link: string;
  sectionTitle: string;
  linkLabel: string;
  sectionSubTitle?: string;
};

const MultiStepFormSectionTitle = ({
  link,
  sectionTitle,
  linkLabel,
  sectionSubTitle,
}: Props) => {
  return (
    <>
      <NextLink href={link} className="multi-form-back-btn">
        <ArrowLeft size={16} />
        {linkLabel}
      </NextLink>
      <ModuleSectionWrapper
        title={sectionTitle}
        className="multi-form-title"
        titleHelperText={sectionSubTitle}
      />
    </>
  );
};

export default MultiStepFormSectionTitle;
