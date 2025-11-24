import { Suspense } from "react";

import PageSpinnerLoader from "@/components/Loader/PageSpinnerLoader";
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
      <Suspense fallback={<PageSpinnerLoader />}>
        <ProsecutionProgramServerComponent id={param.id} />
      </Suspense>
    </>
  );
};

export default PreventionProgramUpdatePage;
