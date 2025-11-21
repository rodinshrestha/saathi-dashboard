import { Suspense } from "react";

import MultiStepFormSectionTitle from "@/components/MultiStepFormSectionTitle";
import { PagePropsType } from "@/types/page.types";

import ShelterServerComponentForm from "./ShelterServerComponentForm";

const ShelterProgramUpdatePage = async ({ params }: PagePropsType) => {
  const param = await params;

  return (
    <>
      <MultiStepFormSectionTitle
        link="/data-entry/response-program-form"
        linkLabel="Back to Form Selection"
        sectionTitle="Saathi Shelter Survivor Intake Form"
      />
      <Suspense fallback={<p>Loading...</p>}>
        <ShelterServerComponentForm id={param?.id} />
      </Suspense>
    </>
  );
};

export default ShelterProgramUpdatePage;
