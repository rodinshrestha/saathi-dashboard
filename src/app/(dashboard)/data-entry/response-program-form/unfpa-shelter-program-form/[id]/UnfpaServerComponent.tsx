import { getSurvivorData } from "@/http/get-survivor-data";
import UnfaFormWrapper from "@/modules/unfpa-form/components/UnfaFormWrapper";

type Props = {
  id: string;
};
const UnfpaServerComponent = async ({ id }: Props) => {
  const data = await getSurvivorData(id);

  return <UnfaFormWrapper data={data?.data} isUpdate />;
};

export default UnfpaServerComponent;
