"use client";
import React from "react";

import ModuleSectionWrapper from "@/components/ModuleSectionWrapper";
import Table from "@/components/Table";
import { IDLE, PENDING } from "@/constant/loading.state";

import { ApprovalType } from "./approval.types";
import { ApprovalsTableColumns } from "./approvals.table.columns";
import ApprovalApprovedModal from "./components/ApprovalApprovedModal";
import ApprovalCancelModal from "./components/ApprovalCancelModal";
import ApprovalViewModal from "./components/ApprovalViewModal";
import useFetchApproval from "./hooks/useFetchApproval";
import { useApprovalStore } from "./store/useApprovalStore";
import { StyledDiv } from "./style";

const ApprovalsModule = () => {
  const [isApproveModalOpen, setIsApproveModalOpen] = React.useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = React.useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = React.useState(false);
  const [selectedApprovalData, setSelectedApprovalData] =
    React.useState<ApprovalType | null>(null);

  const { fetchApprovalList } = useFetchApproval();
  const { approvalLoader, approvalData } = useApprovalStore();

  React.useEffect(() => {
    fetchApprovalList();
  }, [fetchApprovalList]);

  return (
    <StyledDiv>
      <ModuleSectionWrapper
        title="Approvals"
        titleHelperText="Review and apprive pending registrations"
      />

      <ApprovalApprovedModal
        isOpen={isApproveModalOpen}
        onClose={() => setIsApproveModalOpen(false)}
        selectedApprovalData={selectedApprovalData}
      />

      <ApprovalCancelModal
        isOpen={isCancelModalOpen}
        onClose={() => setIsCancelModalOpen(false)}
        selectedApprovalData={selectedApprovalData}
      />

      <ApprovalViewModal
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
      />

      <Table
        tableTitle={`Pending Approvals(${approvalData?.data?.length})`}
        columns={ApprovalsTableColumns({
          setIsApproveModalOpen,
          setIsCancelModalOpen,
          setIsViewModalOpen,
          setSelectedApprovalData,
        })}
        data={approvalData?.data || []}
        isLoading={approvalLoader === IDLE || approvalLoader === PENDING}
        pageMeta={approvalData?.meta}
        showPagination
        searchable
      />
    </StyledDiv>
  );
};

export default ApprovalsModule;
