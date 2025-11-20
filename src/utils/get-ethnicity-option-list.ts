import { EthnicityTypes } from "@/types/ethnicity.types";

export const getEthnicityOptionList = (data: Array<EthnicityTypes> = []) => {
  if (Array.isArray(data) && !data.length) {
    return [{ label: "", value: "" }];
  }

  return data.map((x) => ({ label: x.name, value: x.id }));
};
