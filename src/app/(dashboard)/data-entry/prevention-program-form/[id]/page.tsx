import { Suspense } from "react";

import PageSpinnerLoader from "@/components/Loader/PageSpinnerLoader";
import MultiStepFormSectionTitle from "@/components/MultiStepFormSectionTitle";
import { PagePropsType } from "@/types/page.types";

import PreventionProgramServerComponent from "./PreventionProgramServerComponent";

const PreventionProgramUpdatePage = async ({ params }: PagePropsType) => {
  const param = await params;
  return (
    <>
      <MultiStepFormSectionTitle
        link="/data-entry"
        linkLabel="Back to Program Selection"
        sectionTitle="Prevention Program - Data Entry"
      />
      <Suspense fallback={<PageSpinnerLoader />}>
        <PreventionProgramServerComponent id={param.id} />
      </Suspense>
    </>
  );
};

export default PreventionProgramUpdatePage;
