import { Option } from "@/components/Select";
import { ProvinceType } from "@/types/province.types";

import { convertDistrictList } from "./convert-district-list";

export const initializeDistrictList = (
  provinceData: Array<ProvinceType>,
  selectedProvinceId?: number | string
): Array<Option> => {
  if (!selectedProvinceId) {
    return [];
  }

  if (!Array.isArray(provinceData) || !provinceData.length) {
    return [];
  }

  const selectedDistrict =
    provinceData.find((province) => province.id === selectedProvinceId)
      ?.districts || [];

  return convertDistrictList(selectedDistrict);
};
