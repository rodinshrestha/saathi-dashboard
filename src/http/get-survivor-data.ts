"use server";

import { apiRequest } from "@/lib/api-request";

export const getSurvivorData = async (id: string) => {
  return apiRequest(`/survivors/${id}`);
};
