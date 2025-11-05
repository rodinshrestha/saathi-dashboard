import { ProgramListType } from "../projects.types";

export const convertProgramList = (data: Array<ProgramListType>) => {
  if (Array.isArray(data) && !data.length) {
    return [];
  }

  return data.map((x) => ({ label: x.name, value: x.id.toString() }));
};
