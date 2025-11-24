import ApiDebugger from "@/components/ApiDebugger";
import { getSurvivorData } from "@/http/get-survivor-data";
import ChildIntakeFormWrapper from "@/modules/child-intake-program-form/components/ChildIntakeFormWrapper";

type Props = {
  id: string;
};
const IntakeProgramServerComponent = async ({ id }: Props) => {
  const data = await getSurvivorData(id);

  return (
    <>
      <ApiDebugger data={data?.data} />
      <ChildIntakeFormWrapper data={data?.data} isUpdate />
    </>
  );
};

export default IntakeProgramServerComponent;
