import { ProvinceType } from "@/types/province.types";

export const getProvinceId = (data: ProvinceType) => {
  if (!data) return "";

  if (Object.keys(data).length === 0) return "";

  return data.id.toString();
};
