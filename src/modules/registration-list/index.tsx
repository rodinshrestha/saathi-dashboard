"use client";

import React from "react";

import ModuleSectionWrapper from "@/components/ModuleSectionWrapper";
import Table from "@/components/Table";

import RegistrationViewModal from "./components/RegistrationViewModal";
import { RegistrationTableColumns } from "./registration.table.columns";
import { StyledDiv } from "./style";

export const registrationData = [
  {
    registration_id: "REG-2024-001",
    name: "Maria Santos",
    program: "prevention",
    project: "Community Awareness Program 2024",
    province: "Koshi Province",
    date: "2024-02-15",
    status: "approved",
  },
  {
    registration_id: "REG-2024-002",
    name: "john Doe",
    program: "prosecution",
    project: "Legal Aid Initiative",
    province: "Madhesh Province",
    date: "2024-03-15",
    status: "sent for approval",
  },
  {
    registration_id: "REG-2024-003",
    name: "Lisa Chen",
    program: "response",
    project: "Shelter Support Program",
    province: "bagmati Province",
    date: "2024-09-15",
    status: "in progress",
  },
];

const RegistrationList = () => {
  const [isViewModalOpen, setIsViewModalOpen] = React.useState(false);
  return (
    <StyledDiv>
      <ModuleSectionWrapper
        title="Registration List"
        titleHelperText="View and manage all registrations"
      />

      <RegistrationViewModal
        onClose={() => setIsViewModalOpen(false)}
        isOpen={isViewModalOpen}
      />

      <Table
        tableTitle="All Registrations"
        columns={RegistrationTableColumns({
          setIsViewModalOpen,
        })}
        data={registrationData}
      />
    </StyledDiv>
  );
};

export default RegistrationList;
