import { create } from "zustand";

import { EthnicityTypes } from "@/types/ethnicity.types";
import { OrganizationType } from "@/types/organiation.types";
import { ProvinceType } from "@/types/province.types";

type setGlobalDataTypes = {
  provinceData: Array<ProvinceType>;
  organizationData: Array<OrganizationType>;
  ethnicityData: Array<EthnicityTypes>;
};

interface GlobalConfigStore {
  globalLoader: boolean;
  provinceData: Array<ProvinceType>;
  organizationData: Array<OrganizationType>;
  ethnicityData: Array<EthnicityTypes>;
  setGlobalLoader: (loader: boolean) => void;
  setGlobalData: ({
    provinceData,
    organizationData,
  }: setGlobalDataTypes) => void;
}

export const useGlobalStore = create<GlobalConfigStore>((set) => ({
  provinceData: [],
  organizationData: [],
  ethnicityData: [],
  globalLoader: false,
  setGlobalData: ({ provinceData, organizationData, ethnicityData }) =>
    set((state) => ({
      ...state,
      provinceData,
      organizationData,
      ethnicityData,
    })),
  setGlobalLoader: (loader) => set((state) => ({ ...state, loader })),
}));
