import { authAxios } from "@/utils/axios";

export const getEthnicity = () => {
  return authAxios("/ethnicities");
};
