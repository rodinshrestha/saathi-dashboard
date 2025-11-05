import { DistrictListType } from "../projects.types";

export const convertDistrictList = (data: Array<DistrictListType>) => {
  if (Array.isArray(data) && !data.length) {
    return [];
  }

  return data.map((x) => ({ label: x.name, value: x.id.toString() }));
};
