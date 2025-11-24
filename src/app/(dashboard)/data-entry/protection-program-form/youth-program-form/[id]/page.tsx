import { Suspense } from "react";

import PageSpinnerLoader from "@/components/Loader/PageSpinnerLoader";
import MultiStepFormSectionTitle from "@/components/MultiStepFormSectionTitle";
import { PagePropsType } from "@/types/page.types";

import YouthProgramServerComponent from "./YouthProgramServerComponent";

const YouthProgramUpdatePage = async ({ params }: PagePropsType) => {
  const param = await params;
  return (
    <>
      <MultiStepFormSectionTitle
        link="/data-entry/protection-program-form"
        linkLabel="Back to Form Selection"
        sectionTitle="Youth Profile Form"
        sectionSubTitle="Children Program - Youth Settlement Program"
      />

      <Suspense fallback={<PageSpinnerLoader />}>
        <YouthProgramServerComponent id={param.id} />
      </Suspense>
    </>
  );
};

export default YouthProgramUpdatePage;
