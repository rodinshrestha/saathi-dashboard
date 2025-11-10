"use client";
import ApporvalTableAction from "./components/ApprovalTableAction";

type Props = {
  setIsApproveModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsCancelModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsViewModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ApprovalsTableColumns = ({
  setIsApproveModalOpen,
  setIsCancelModalOpen,
  setIsViewModalOpen,
}: Props) => {
  return [
    {
      accessorKey: "registration_id",
      header: "Registration ID",
    },
    {
      accessorKey: "name",
      header: "Name",
      size: 100,
      width: "100px",
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
      header: "Province",
    },
    {
      accessorKey: "date_submitted",
      header: "Date Submitted",
    },
    {
      id: "actions",
      header: "Actions",
      size: 400,
      cell: () => (
        <ApporvalTableAction
          setIsApproveModalOpen={setIsApproveModalOpen}
          setIsCancelModalOpen={setIsCancelModalOpen}
          setIsViewModalOpen={setIsViewModalOpen}
        />
      ),
    },
  ];
};
