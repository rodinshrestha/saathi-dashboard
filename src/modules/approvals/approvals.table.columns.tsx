"use client";
import { ColumnDef } from "@tanstack/react-table";

import { formatDateToYMD } from "@/utils/get-converted-date";

import { ApprovalType } from "./approval.types";
import ApporvalTableAction from "./components/ApprovalTableAction";

type Props = {
  setIsApproveModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsCancelModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsViewModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedApprovalData: React.Dispatch<
    React.SetStateAction<ApprovalType | null>
  >;
};

export const ApprovalsTableColumns = ({
  setIsApproveModalOpen,
  setIsCancelModalOpen,
  setIsViewModalOpen,
  setSelectedApprovalData,
}: Props): ColumnDef<ApprovalType>[] => {
  return [
    {
      accessorKey: "registration_id",
      header: "Registration ID",
    },
    {
      accessorFn: (row) => row?.full_name || "N/A",
      header: "Name",
      size: 100,
    },
    {
      accessorFn: (row) => row.program?.name || "N/A",
      header: "Program",
    },
    {
      accessorFn: (row) => row.project?.project_title || "N/A",
      header: "Project",
    },
    {
      accessorFn: (row) => row.province?.name || "N/A",
      header: "Province",
    },
    {
      accessorFn: (row) => formatDateToYMD(row?.submitted_at),
      header: "Date Submitted",
    },
    {
      id: "actions",
      header: "Actions",
      size: 400,
      cell: ({ row }) => (
        <ApporvalTableAction
          setIsApproveModalOpen={setIsApproveModalOpen}
          setIsCancelModalOpen={setIsCancelModalOpen}
          setIsViewModalOpen={setIsViewModalOpen}
          setSelectedApprovalData={setSelectedApprovalData}
          data={row.original}
        />
      ),
    },
  ];
};
