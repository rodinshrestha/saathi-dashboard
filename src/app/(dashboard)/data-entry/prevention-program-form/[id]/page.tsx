import { Suspense } from "react";

import MultiStepFormSectionTitle from "@/components/MultiStepFormSectionTitle";
import { PagePropsType } from "@/types/page.types";

import ProsecutionProgramServerComponent from "../../prosecution-program-form/[id]/ProsecutionProgramServerComponent";

const PreventionProgramUpdatePage = async ({ params }: PagePropsType) => {
  const param = await params;
  return (
    <>
      <MultiStepFormSectionTitle
        link="/data-entry"
        linkLabel="back to Program Selection"
        sectionTitle="Prevention Program - Data Entry"
      />
      <Suspense fallback={<p>Loading...</p>}>
        <ProsecutionProgramServerComponent id={param.id} />
      </Suspense>
    </>
  );
};

export default PreventionProgramUpdatePage;
