import React, { Suspense } from "react";

import PageSpinnerLoader from "@/components/Loader/PageSpinnerLoader";
import MultiStepFormSectionTitle from "@/components/MultiStepFormSectionTitle";
import { PagePropsType } from "@/types/page.types";

import ChildProgramServerComponent from "./ChildProgramServerComponent";

const ChildProgramUpdatePage = async ({ params }: PagePropsType) => {
  const param = await params;
  return (
    <>
      <MultiStepFormSectionTitle
        link="/data-entry/protection-program-form"
        linkLabel="Back to Form Selection"
        sectionTitle="Child Profile Form"
        sectionSubTitle="Children Program - Child Profile Registration"
      />
      <Suspense fallback={<PageSpinnerLoader />}>
        <ChildProgramServerComponent id={param.id} />
      </Suspense>
    </>
  );
};

export default ChildProgramUpdatePage;
