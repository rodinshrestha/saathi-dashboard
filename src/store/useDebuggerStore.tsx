import { create } from "zustand";

import { PER_PAGE } from "@/constant/pagination.constant";

interface DebuggerStore {
  apiDebugger: boolean;
  tablePerPage: number;
  setApiDebugger: (value: boolean) => void;
  setTablePerPage: (value: number) => void;
}

export const useDebuggerStore = create<DebuggerStore>((set) => ({
  apiDebugger: false,
  tablePerPage: PER_PAGE,
  setApiDebugger: (value) => set((state) => ({ ...state, apiDebugger: value })),
  setTablePerPage: (value) =>
    set((state) => ({ ...state, tablePerPage: value })),
}));
