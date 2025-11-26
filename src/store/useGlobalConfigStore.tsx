import { create } from "zustand";

import { EthnicityTypes } from "@/types/ethnicity.types";
import { OrganizationType } from "@/types/organiation.types";
import { ProjectDataType } from "@/types/project.types";
import { ProvinceType } from "@/types/province.types";
import { ServiceListType } from "@/types/service-list.types";

type setGlobalDataTypes = {
  provinceData: Array<ProvinceType>;
  organizationData: Array<OrganizationType>;
  ethnicityData: Array<EthnicityTypes>;
  servicesData: Array<ServiceListType>;
  projectData: Array<ProjectDataType>;
};

interface GlobalConfigStore {
  globalLoader: boolean;
  provinceData: Array<ProvinceType>;
  organizationData: Array<OrganizationType>;
  ethnicityData: Array<EthnicityTypes>;
  servicesData: Array<ServiceListType>;
  projectData: Array<ProjectDataType>;
  setGlobalLoader: (loader: boolean) => void;
  setGlobalData: ({
    provinceData,
    organizationData,
    ethnicityData,
    servicesData,
    projectData,
  }: setGlobalDataTypes) => void;
}

export const useGlobalStore = create<GlobalConfigStore>((set) => ({
  provinceData: [],
  organizationData: [],
  ethnicityData: [],
  servicesData: [],
  projectData: [],
  globalLoader: false,
  setGlobalData: ({
    provinceData,
    organizationData,
    ethnicityData,
    servicesData,
    projectData,
  }) =>
    set((state) => ({
      ...state,
      provinceData,
      organizationData,
      ethnicityData,
      servicesData,
      projectData,
    })),
  setGlobalLoader: (loader) => set((state) => ({ ...state, loader })),
}));
