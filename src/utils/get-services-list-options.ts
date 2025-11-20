import { ServiceListType } from "@/types/service-list.types";

export const getServicesListOptions = (data: Array<ServiceListType> = []) => {
  if (Array.isArray(data) && !data.length) {
    return [{ label: "", value: "" }];
  }

  return data.map((x) => ({ label: x.name, value: x.id }));
};
