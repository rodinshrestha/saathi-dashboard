import { Option } from "@/components/Select";

import { ProvinceDistrictType } from "../projects.types";

export const convertDistrictList = (
  data: Array<ProvinceDistrictType>
): Array<Option> => {
  if (Array.isArray(data) && !data.length) {
    return [];
  }

  return data.map((x) => ({ label: x.name, value: x.id }));
};
