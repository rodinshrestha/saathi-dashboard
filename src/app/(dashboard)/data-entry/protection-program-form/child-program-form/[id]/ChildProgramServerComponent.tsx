import { getSurvivorData } from "@/http/get-survivor-data";
import ChildFormWrapper from "@/modules/child-form/components/ChildFormWrapper";

type Props = {
  id: string;
};
const ChildProgramServerComponent = async ({ id }: Props) => {
  const data = await getSurvivorData(id);

  return <ChildFormWrapper data={data?.data} isUpdate />;
};

export default ChildProgramServerComponent;
