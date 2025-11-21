import { getSurvivorData } from "@/http/get-survivor-data";
import SaathiShelterProgramFormWrapper from "@/modules/saathi-shelter-program-form/components/SaathiShelterProgramFormWrapper";

type Props = {
  id: string;
};
const ShelterServerComponentForm = async ({ id }: Props) => {
  const data = await getSurvivorData(id);

  return <SaathiShelterProgramFormWrapper data={data?.data} isUpdate />;
};

export default ShelterServerComponentForm;
