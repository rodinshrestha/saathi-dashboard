import React, { Suspense } from "react";

import MultiStepFormSectionTitle from "@/components/MultiStepFormSectionTitle";
import { PagePropsType } from "@/types/page.types";

import IntakeProgramServerComponent from "./IntakeProgramServerComponent";

const ChildIntakeUpdatePage = async ({ params }: PagePropsType) => {
  const param = await params;
  return (
    <>
      <MultiStepFormSectionTitle
        linkLabel=" Back to Form Selection"
        link="/data-entry/protection-program-form"
        sectionTitle="Child Intake Form"
        sectionSubTitle="Protection Children Program - Comprehensive Intake Assessment"
      />
      <Suspense fallback={<p>Loading..</p>}>
        <IntakeProgramServerComponent id={param.id} />
      </Suspense>
    </>
  );
};

export default ChildIntakeUpdatePage;
