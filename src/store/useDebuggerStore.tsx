import { create } from "zustand";

interface DebuggerStore {
  apiDebugger: boolean;
  setApiDebugger: (value: boolean) => void;
}

export const useDebuggerStore = create<DebuggerStore>((set) => ({
  apiDebugger: false,
  setApiDebugger: (value) => set((state) => ({ ...state, apiDebugger: value })),
}));
