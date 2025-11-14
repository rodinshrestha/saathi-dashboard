import { create } from "zustand";

import { IDLE } from "@/constant/loading.state";
import { LoadingType } from "@/types/loading.types";

import { ProjectDataResponseType, ProgramDataType } from "../projects.types";

type SetFormDataTypes = {
  programData: Array<ProgramDataType>;
};

interface ProjectStore {
  loader: boolean;
  projectDataLoader: LoadingType;
  programData: Array<ProgramDataType>;
  projectData: ProjectDataResponseType | null;
  setFormData: ({ programData }: SetFormDataTypes) => void;
  setProjectData: (projectData: ProjectDataResponseType) => void;
  setLoader: (loader: boolean) => void;
  setProjectDataLoader: (loader: LoadingType) => void;
}

export const useProjectStore = create<ProjectStore>((set) => ({
  programData: [],
  loader: false,
  projectData: null,
  projectDataLoader: IDLE,
  setFormData: ({ programData }) => set((state) => ({ ...state, programData })),
  setLoader: (loader) => set((state) => ({ ...state, loader })),
  setProjectData: (projectData) => set((state) => ({ ...state, projectData })),
  setProjectDataLoader: (loaderState) =>
    set((state) => ({ ...state, projectDataLoader: loaderState })),
}));
