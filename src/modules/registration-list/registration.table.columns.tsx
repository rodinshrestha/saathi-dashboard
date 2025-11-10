"use client";

import RegistrationTableAction from "./components/RegistrationTableAction";

type Props = {
  setIsViewModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const RegistrationTableColumns = ({ setIsViewModalOpen }: Props) => {
  return [
    {
      accessorKey: "registration_id",
      header: "Registration ID",
    },
    {
      accessorKey: "name",
      header: "Name",
    },

    {
      accessorKey: "program",
      header: "Program",
    },
    {
      accessorKey: "project",
      header: "Project",
    },
    {
      accessorKey: "province",
      header: "province",
    },
    {
      accessorKey: "date",
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
