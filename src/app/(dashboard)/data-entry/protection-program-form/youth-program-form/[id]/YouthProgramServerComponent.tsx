import { getSurvivorData } from "@/http/get-survivor-data";
import YouthFormWrapper from "@/modules/youth-program-form/components/YouthFormWrapper";

type Props = {
  id: string;
};
const YouthProgramServerComponent = async ({ id }: Props) => {
  const data = await getSurvivorData(id);

  return <YouthFormWrapper data={data?.data} isUpdate />;
};

export default YouthProgramServerComponent;
