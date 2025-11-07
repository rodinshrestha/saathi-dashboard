import { ProgramDataType } from "../projects.types";

export const convertProgramList = (data: Array<ProgramDataType>) => {
  if (Array.isArray(data) && !data.length) {
    return [];
  }

  return data.map((x) => ({ label: x.name, value: x.id }));
};
