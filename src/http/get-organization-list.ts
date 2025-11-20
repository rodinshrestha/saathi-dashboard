import { authAxios } from "@/utils/axios";

export const getOrganizationList = () => {
  return authAxios("/organizations");
};
