import { ProvinceDataType } from "../projects.types";

export const convertProvinceList = (data: Array<ProvinceDataType>) => {
  if (Array.isArray(data) && !data.length) {
    return [];
  }

  return data.map((x) => ({ label: x.name, value: x.id }));
};
