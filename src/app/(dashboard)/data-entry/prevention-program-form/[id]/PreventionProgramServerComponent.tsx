import ApiDebugger from "@/components/ApiDebugger";
import { getSurvivorData } from "@/http/get-survivor-data";
import PreventionProgramFormWrapper from "@/modules/prevention-program-form/components/PreventionProgramFormWrapper";

type Props = {
  id: string;
};
const PreventionProgramServerComponent = async ({ id }: Props) => {
  const data = await getSurvivorData(id);

  return (
    <>
      <ApiDebugger data={data?.data} />
      <PreventionProgramFormWrapper data={data?.data} isUpdate />
    </>
  );
};

export default PreventionProgramServerComponent;
