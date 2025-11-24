import ApiDebugger from "@/components/ApiDebugger";
import { getSurvivorData } from "@/http/get-survivor-data";
import FamilyReintegrationFormWrapper from "@/modules/family-reintegration-form/components/FamilyReintegrationFormWrapper";

type Props = {
  id: string;
};
const FamilyReintegrationServerComponent = async ({ id }: Props) => {
  const data = await getSurvivorData(id);

  return (
    <>
      <ApiDebugger data={data?.data} />
      <FamilyReintegrationFormWrapper data={data?.data} isUpdate />
    </>
  );
};

export default FamilyReintegrationServerComponent;
