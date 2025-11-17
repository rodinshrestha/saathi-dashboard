import React from "react";

import { CircleCheck, CirclePlus, Eye } from "lucide-react";

import { ApprovalType } from "../../approval.types";

import { StyleDiv } from "./style";

type Props = {
  setIsApproveModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsCancelModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsViewModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedApprovalData: React.Dispatch<
    React.SetStateAction<ApprovalType | null>
  >;
  data: ApprovalType;
};

const ApporvalTableAction = ({
  setIsApproveModalOpen,
  setIsCancelModalOpen,
  setIsViewModalOpen,
  data,
  setSelectedApprovalData,
}: Props) => {
  const handleClick = () => {
    setSelectedApprovalData(data);
  };

  return (
    <StyleDiv className="approval-table-action-wrapper">
      <div
        className="action-approval-btn"
        onClick={() => {
          setIsViewModalOpen(true);
          handleClick();
        }}
      >
        <Eye size={18} />
        View
      </div>
      <div
        className="action-approval-btn approved"
        onClick={() => {
          setIsApproveModalOpen(true);
          handleClick();
        }}
      >
        <CircleCheck size={18} />
        Approve
      </div>

      <div
        className="action-approval-btn cancelled"
        onClick={() => {
          setIsCancelModalOpen(true);
          handleClick();
        }}
      >
        <CirclePlus size={18} className="approval-custom-icon" />
        Send Back
      </div>
    </StyleDiv>
  );
};

export default ApporvalTableAction;
