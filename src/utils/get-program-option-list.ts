import { ProjectDataType } from "@/types/project.types";

export const getProgramListOption = (data: Array<ProjectDataType>) => {
  if (Array.isArray(data) && !data.length) {
    return [];
  }

  return data.map((x) => ({ label: x.project_title, value: x.id }));
};
