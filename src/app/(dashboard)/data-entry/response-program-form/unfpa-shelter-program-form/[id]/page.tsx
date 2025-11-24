import { Suspense } from "react";

import PageSpinnerLoader from "@/components/Loader/PageSpinnerLoader";
import MultiStepFormSectionTitle from "@/components/MultiStepFormSectionTitle";
import { PagePropsType } from "@/types/page.types";

import UnfpaServerComponent from "./UnfpaServerComponent";

const page = async ({ params }: PagePropsType) => {
  const param = await params;

  return (
    <>
      <MultiStepFormSectionTitle
        link="/data-entry/response-program-form"
        sectionTitle="UNFPA Supported Shelter Program Form"
        linkLabel=" Back to Program Selection"
      />
      <Suspense fallback={<PageSpinnerLoader />}>
        <UnfpaServerComponent id={param?.id} />
      </Suspense>
    </>
  );
};

export default page;
