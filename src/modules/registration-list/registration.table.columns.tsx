"use client";

import { ColumnDef } from "@tanstack/react-table";

import { formatDateToYMD } from "@/utils/get-converted-date";

import RegistrationTableAction from "./components/RegistrationTableAction";
import { RegistrationListType } from "./registration-list.types";

type Props = {
  setIsViewModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const RegistrationTableColumns = ({
  setIsViewModalOpen,
}: Props): ColumnDef<RegistrationListType>[] => {
  return [
    {
      accessorKey: "registration_id",
      header: "Registration ID",
    },
    {
      accessorFn: (row) => row.user?.name || "N/A",
      header: "Name",
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
      header: "province",
    },
    {
      accessorFn: (row) => formatDateToYMD(row?.program?.created_at),
      header: "Date",
    },
    {
      accessorKey: "status",
      header: "Status",
    },
    {
      accessorKey: "action",
      header: "Actions",
      size: 300,
      cell: () => (
        <RegistrationTableAction setIsViewModalOpen={setIsViewModalOpen} />
      ),
    },
  ];
};
