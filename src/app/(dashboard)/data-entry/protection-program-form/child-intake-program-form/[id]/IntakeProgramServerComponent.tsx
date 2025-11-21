import { getSurvivorData } from "@/http/get-survivor-data";
import ChildIntakeFormWrapper from "@/modules/child-intake-program-form/components/ChildIntakeFormWrapper";

type Props = {
  id: string;
};
const IntakeProgramServerComponent = async ({ id }: Props) => {
  const data = await getSurvivorData(id);

  return <ChildIntakeFormWrapper data={data?.data} isUpdate />;
};

export default IntakeProgramServerComponent;
