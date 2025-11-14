import { create } from "zustand";

import { ProvinceDataType } from "@/modules/projects/projects.types";

type setGlobalDataTypes = {
  provinceData: Array<ProvinceDataType>;
};

interface GlobalConfigStore {
  globalLoader: boolean;
  provinceData: Array<ProvinceDataType>;
  setGlobalLoader: (loader: boolean) => void;
  setGlobalData: ({ provinceData }: setGlobalDataTypes) => void;
}

export const useGlobalStore = create<GlobalConfigStore>((set) => ({
  provinceData: [],
  globalLoader: false,
  setGlobalData: ({ provinceData }) =>
    set((state) => ({ ...state, provinceData })),
  setGlobalLoader: (loader) => set((state) => ({ ...state, loader })),
}));
