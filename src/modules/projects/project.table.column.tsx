import { ColumnDef } from "@tanstack/react-table";
import { SquarePen, Trash } from "lucide-react";

import { ProjectListType } from "./projects.types";

type Props = {
  setIsDeleteModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedData: React.Dispatch<React.SetStateAction<ProjectListType | null>>;
};

export const ProjectTableColumn = ({
  setIsDeleteModalOpen,
  setSelectedData,
}: Props): ColumnDef<ProjectListType>[] => {
  return [
    {
      accessorKey: "project_id",
      header: "Project ID",
    },
    {
      accessorKey: "project_title",
      header: "Project Title",
    },
    {
      accessorKey: "program_id",
      header: "Program",
    },
    {
      accessorKey: "province_id",
      header: "Province",
    },
    {
      accessorKey: "district_id",
      header: "District",
    },
    {
      accessorKey: "start_date",
      header: "Start Date",
    },
    {
      accessorKey: "end_date",
      header: "End Date",
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => {
        const user = row.original;
        return (
          <div className="table-action-wrapper">
            <div className="table-action-icon">
              <SquarePen size={16} />
            </div>
            <div
              className="table-action-icon"
              onClick={() => {
                setIsDeleteModalOpen(true);
                setSelectedData(user);
              }}
            >
              <Trash size={16} color="#D4183D" />
            </div>
          </div>
        );
      },
    },
  ];
};
