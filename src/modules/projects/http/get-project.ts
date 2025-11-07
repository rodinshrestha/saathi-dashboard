import { authAxios } from "@/utils/axios";

export const createProject = (body: unknown) => {
  return authAxios.post("/create/project", body);
};

export const updateProject = (body: unknown) => {
  return authAxios.put("/update/project", body);
};
