import { getSurvivorData } from "@/http/get-survivor-data";
import FamilyReintegrationFormWrapper from "@/modules/family-reintegration-form/components/FamilyReintegrationFormWrapper";

type Props = {
  id: string;
};
const FamilyReintegrationServerComponent = async ({ id }: Props) => {
  const data = await getSurvivorData(id);

  return <FamilyReintegrationFormWrapper data={data?.data} isUpdate />;
};

export default FamilyReintegrationServerComponent;
