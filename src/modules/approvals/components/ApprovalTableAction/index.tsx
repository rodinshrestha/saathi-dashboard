import React from "react";

import { CircleCheck, CirclePlus, Eye } from "lucide-react";

import { StyleDiv } from "./style";

type Props = {
  setIsApproveModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsCancelModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsViewModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ApporvalTableAction = ({
  setIsApproveModalOpen,
  setIsCancelModalOpen,
  setIsViewModalOpen,
}: Props) => {
  return (
    <StyleDiv className="approval-table-action-wrapper">
      <div
        className="action-approval-btn"
        onClick={() => setIsViewModalOpen(true)}
      >
        <Eye size={18} />
        View
      </div>
      <div
        className="action-approval-btn approved"
        onClick={() => setIsApproveModalOpen(true)}
      >
        <CircleCheck size={18} />
        Approve
      </div>

      <div
        className="action-approval-btn cancelled"
        onClick={() => setIsCancelModalOpen(true)}
      >
        <CirclePlus size={18} className="approval-custom-icon" />
        Send Back
      </div>
    </StyleDiv>
  );
};

export default ApporvalTableAction;
