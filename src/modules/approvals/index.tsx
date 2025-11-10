"use client";
import React from "react";

import ModuleSectionWrapper from "@/components/ModuleSectionWrapper";
import Table from "@/components/Table";

import { ApprovalsTableColumns } from "./approvals.table.columns";
import ApprovalApprovedModal from "./components/ApprovalApprovedModal";
import ApprovalCancelModal from "./components/ApprovalCancelModal";
import ApprovalViewModal from "./components/ApprovalViewModal";
import { StyledDiv } from "./style";

const data = [
  {
    registration_id: "REG-2024-002",
    name: "John Doe",
    program: "Prosecution",
    project: "Legal Aid Initiative",
    province: "Madhesh province",
    date_submitted: "2024-03-10",
    status: "pending",
  },
  {
    registration_id: "REG-2024-003",
    name: "Manish Basnet",
    program: "Prosecution",
    project: "Aid Initiative",
    province: "Bagmati province",
    date_submitted: "2024-04-10",
    status: "approved",
  },
  {
    registration_id: "REG-2024-004",
    name: "Sudeep",
    program: "Prosecution",
    project: "Legal Aid Initiative",
    province: "Madhesh province",
    date_submitted: "2023-03-10",
    status: "canceled",
  },
];

const ApprovalsModule = () => {
  const [isApproveModalOpen, setIsApproveModalOpen] = React.useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = React.useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = React.useState(false);

  return (
    <StyledDiv>
      <ModuleSectionWrapper
        title="Approvals"
        titleHelperText="Review and apprive pending registrations"
      />

      <ApprovalApprovedModal
        isOpen={isApproveModalOpen}
        onClose={() => setIsApproveModalOpen(false)}
      />

      <ApprovalCancelModal
        isOpen={isCancelModalOpen}
        onClose={() => setIsCancelModalOpen(false)}
      />

      <ApprovalViewModal
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
      />

      <Table
        tableTitle="Pending Approvals(1)"
        columns={ApprovalsTableColumns({
          setIsApproveModalOpen,
          setIsCancelModalOpen,
          setIsViewModalOpen,
        })}
        data={data}
      />
    </StyledDiv>
  );
};

export default ApprovalsModule;
