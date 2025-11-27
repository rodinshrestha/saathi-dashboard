import { create } from "zustand";

interface TabStore {
  activeTabValue: string;
  setActiveTabValue: (value: string) => void;
}

export const useTabStore = create<TabStore>((set) => ({
  activeTabValue: "",
  setActiveTabValue: (value: string) =>
    set((state) => ({ ...state, isActive: value })),
}));
