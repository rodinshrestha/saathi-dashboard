import { ProvinceListType } from "../projects.types";

export const convertProvinceList = (data: Array<ProvinceListType>) => {
  if (Array.isArray(data) && !data.length) {
    return [];
  }

  return data.map((x) => ({ label: x.name, value: x.id.toString() }));
};
