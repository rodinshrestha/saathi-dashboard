import React, { Suspense } from "react";

import MultiStepFormSectionTitle from "@/components/MultiStepFormSectionTitle";
import { PagePropsType } from "@/types/page.types";

import ProsecutionProgramServerComponent from "./ProsecutionProgramServerComponent";

const ProsecutionProgramFormUpdatePage = async ({ params }: PagePropsType) => {
  const param = await params;
  return (
    <>
      <MultiStepFormSectionTitle
        linkLabel=" Back to Program Selection"
        sectionTitle="Prosecution Program - Data Entry"
        link="/data-entry"
      />

      <Suspense fallback={<p>loading...</p>}>
        <ProsecutionProgramServerComponent id={param?.id} />
      </Suspense>
    </>
  );
};

export default ProsecutionProgramFormUpdatePage;
