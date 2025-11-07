import { ColumnDef } from "@tanstack/react-table";

import ProjectTableAction from "./components/ProjectTableAction";
import { ProjectDataType } from "./projects.types";

type Props = {
  setSelectedValue: React.Dispatch<
    React.SetStateAction<ProjectDataType | null>
  >;
  setIsDeleteModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ProjectTableColumn = ({
  setIsDeleteModalOpen,
  setSelectedValue,
  setIsEditModalOpen,
}: Props): ColumnDef<ProjectDataType>[] => {
  return [
    {
      accessorFn: (_, i) => `Proj-${++i}`,
      header: "Project ID",
    },
    {
      accessorKey: "project_title",
      header: "Project Title",
    },
    {
      accessorFn: (row) => row.program.name,
      header: "Program",
    },
    {
      accessorFn: (row) => row.province.name,
      header: "Province",
    },
    {
      accessorFn: (row) => row.district.name,
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
          setIsDeleteModalOpen={setIsDeleteModalOpen}
          setSelectedValue={setSelectedValue}
          setIsEditModalOpen={setIsEditModalOpen}
        />
      ),
    },
  ];
};
