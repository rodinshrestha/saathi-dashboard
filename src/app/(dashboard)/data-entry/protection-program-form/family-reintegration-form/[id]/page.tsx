import React, { Suspense } from "react";

import MultiStepFormSectionTitle from "@/components/MultiStepFormSectionTitle";
import { PagePropsType } from "@/types/page.types";

import FamilyReintegrationServerComponent from "./FamilyReintegrationServerComponent";

const FamilyReintegrationFormUpdate = async ({ params }: PagePropsType) => {
  const param = await params;
  return (
    <>
      <MultiStepFormSectionTitle
        link="/data-entry/protection-program-form"
        linkLabel="Back to Protection"
        sectionTitle="family Reintegration Form"
        sectionSubTitle="Children Program - Family Reunification Assessment"
      />
      <Suspense fallback={<p>loading...</p>}>
        <FamilyReintegrationServerComponent id={param.id} />
      </Suspense>
    </>
  );
};

export default FamilyReintegrationFormUpdate;
