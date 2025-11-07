import { create } from "zustand";

import { Option } from "@/components/Select";

type SetterStoreType = {
  provinceList: Array<Option>;
  programList: Array<Option>;
};

interface ProjectFormDataStore {
  loader: boolean;
  provinceList: Array<Option>;
  programList: Array<Option>;
  setterStore: ({ provinceList, programList }: SetterStoreType) => void;
  setLoader: (loader: boolean) => void;
}

export const useProjectFormDataStore = create<ProjectFormDataStore>((set) => ({
  provinceList: [],
  programList: [],
  loader: false,
  setterStore: ({ provinceList, programList }) =>
    set((state) => ({ ...state, programList, provinceList })),
  setLoader: (loader) => set((state) => ({ ...state, loader })),
}));
