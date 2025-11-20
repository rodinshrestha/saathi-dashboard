import { authAxios } from "@/utils/axios";

export const getServicesList = () => {
  return authAxios("/services");
};
