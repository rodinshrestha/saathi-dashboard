import { authAxios } from "@/utils/axios";

export const getEventList = (id: number) => {
  return authAxios(`/program/${id}/events`);
};

export const getEventProject = (id: number) => {
  return authAxios(`/event/${id}/project`);
};
