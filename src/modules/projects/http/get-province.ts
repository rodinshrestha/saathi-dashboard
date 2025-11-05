import { authAxios } from "@/utils/axios";

export const getProvince = () => {
  return authAxios("/provinces");
};
