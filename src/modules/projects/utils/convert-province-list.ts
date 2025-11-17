import { ProvinceType } from "@/types/province.types";

export const convertProvinceList = (data: Array<ProvinceType>) => {
  if (Array.isArray(data) && !data.length) {
    return [];
  }

  return data.map((x) => ({ label: x.name, value: x.id }));
};
