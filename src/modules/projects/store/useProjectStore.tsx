import { create } from "zustand";

import { IDLE } from "@/constant/loading.state";
import { LoadingType } from "@/types/loading.types";

import {
  ProvinceDataType,
  ProjectDataResponseType,
  ProgramDataType,
} from "../projects.types";

type SetFormDataTypes = {
  provinceData: Array<ProvinceDataType>;
  programData: Array<ProgramDataType>;
};

interface ProjectStore {
  loader: boolean;
  projectDataLoader: LoadingType;
  provinceData: Array<ProvinceDataType>;
  programData: Array<ProgramDataType>;
  projectData: ProjectDataResponseType | null;
  setFormData: ({ provinceData, programData }: SetFormDataTypes) => void;
  setProjectData: (projectData: ProjectDataResponseType) => void;
  setLoader: (loader: boolean) => void;
  setProjectDataLoader: (loader: LoadingType) => void;
}

export const useProjectStore = create<ProjectStore>((set) => ({
  provinceData: [],
  programData: [],
  loader: false,
  projectData: null,
  projectDataLoader: IDLE,
  setFormData: ({ provinceData, programData }) =>
    set((state) => ({ ...state, programData, provinceData })),
  setLoader: (loader) => set((state) => ({ ...state, loader })),
  setProjectData: (projectData) => set((state) => ({ ...state, projectData })),
  setProjectDataLoader: (loaderState) =>
    set((state) => ({ ...state, projectDataLoader: loaderState })),
}));
