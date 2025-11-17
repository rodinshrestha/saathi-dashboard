import { create } from "zustand";

import { ProvinceType } from "@/types/province.types";

type setGlobalDataTypes = {
  provinceData: Array<ProvinceType>;
};

interface GlobalConfigStore {
  globalLoader: boolean;
  provinceData: Array<ProvinceType>;
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
