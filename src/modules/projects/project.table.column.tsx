import { ColumnDef } from "@tanstack/react-table";

import ProjectTableAction from "./components/ProjectTableAction";
import { ProjectListType } from "./projects.types";

type Props = {
  setSelectedValue: React.Dispatch<
    React.SetStateAction<ProjectListType | null>
  >;
  setIsEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ProjectTableColumn = ({
  setSelectedValue,
  setIsEditModalOpen,
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
      cell: ({ row }) => (
        <ProjectTableAction
          value={row.original}
          setSelectedValue={setSelectedValue}
          setIsEditModalOpen={setIsEditModalOpen}
        />
      ),
    },
  ];
};
