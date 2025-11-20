import { OrganizationType } from "@/types/organiation.types";

export const getOrganizationOptionList = (
  data: Array<OrganizationType> = []
) => {
  if (Array.isArray(data) && !data.length) {
    return [{ label: "", value: "" }];
  }

  return data.map((x) => ({ label: x.name, value: x.id }));
};
