import { authAxios } from "@/utils/axios";

export const getProgram = () => {
  return authAxios("/show/programs");
};
