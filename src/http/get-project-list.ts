import { authAxios } from "@/utils/axios";

export const getProjectList = () => {
  return authAxios("/projects");
};
