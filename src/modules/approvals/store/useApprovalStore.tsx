import { create } from "zustand";

import { IDLE } from "@/constant/loading.state";
import { LoadingType } from "@/types/loading.types";

import { ApprovalResponseType } from "../approval.types";

interface ApprovalStore {
  approvalLoader: LoadingType;
  approvalData: ApprovalResponseType | null;
  setApprovalData: (data: ApprovalResponseType) => void;
  setApprovalLoader: (loader: LoadingType) => void;
}

export const useApprovalStore = create<ApprovalStore>((set) => ({
  approvalLoader: IDLE,
  approvalData: null,
  setApprovalData: (approvalData) =>
    set((state) => ({ ...state, approvalData })),
  setApprovalLoader: (loader) =>
    set((state) => ({ ...state, approvalLoader: loader })),
}));
