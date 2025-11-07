import { authAxios } from "@/utils/axios";

export const createProject = (body: unknown) => {
  return authAxios.post("/projects", body);
};

export const updateProject = (body: unknown, id?: number) => {
  if (!id) {
    throw new Error("Id cannot be empty");
  }
  return authAxios.put(`/projects/${id}`, body);
};
