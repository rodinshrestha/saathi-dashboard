import { create } from "zustand";

import { EthnicityTypes } from "@/types/ethnicity.types";
import { OrganizationType } from "@/types/organiation.types";
import { ProvinceType } from "@/types/province.types";
import { ServiceListType } from "@/types/service-list.types";

type setGlobalDataTypes = {
  provinceData: Array<ProvinceType>;
  organizationData: Array<OrganizationType>;
  ethnicityData: Array<EthnicityTypes>;
  servicesData: Array<ServiceListType>;
};

interface GlobalConfigStore {
  globalLoader: boolean;
  provinceData: Array<ProvinceType>;
  organizationData: Array<OrganizationType>;
  ethnicityData: Array<EthnicityTypes>;
  servicesData: Array<ServiceListType>;
  setGlobalLoader: (loader: boolean) => void;
  setGlobalData: ({
    provinceData,
    organizationData,
    ethnicityData,
    servicesData,
  }: setGlobalDataTypes) => void;
}

export const useGlobalStore = create<GlobalConfigStore>((set) => ({
  provinceData: [],
  organizationData: [],
  ethnicityData: [],
  servicesData: [],
  globalLoader: false,
  setGlobalData: ({
    provinceData,
    organizationData,
    ethnicityData,
    servicesData,
  }) =>
    set((state) => ({
      ...state,
      provinceData,
      organizationData,
      ethnicityData,
      servicesData,
    })),
  setGlobalLoader: (loader) => set((state) => ({ ...state, loader })),
}));
