"use client";

import React from "react";

import ModuleSectionWrapper from "@/components/ModuleSectionWrapper";
import Table from "@/components/Table";

import RegistrationViewModal from "./components/RegistrationViewModal";
import useFetchRegistration from "./hooks/useFetchRegistration";
import { RegistrationListType } from "./registration-list.types";
import { RegistrationTableColumns } from "./registration.table.columns";
import { StyledDiv } from "./style";

const RegistrationList = () => {
  const [isViewModalOpen, setIsViewModalOpen] = React.useState(false);
  const [selectedData, setSelectedData] =
    React.useState<RegistrationListType | null>(null);

  const { registrationList, isLoading } = useFetchRegistration();
  return (
    <StyledDiv>
      <ModuleSectionWrapper
        title="Registration List"
        titleHelperText="View and manage all registrations"
      />

      <RegistrationViewModal
        onClose={() => setIsViewModalOpen(false)}
        selectedData={selectedData}
        isOpen={isViewModalOpen}
      />

      <Table
        tableTitle="All Registrations"
        columns={RegistrationTableColumns({
          setIsViewModalOpen,
          setSelectedData,
        })}
        data={registrationList?.data || []}
        isLoading={isLoading}
        pageMeta={registrationList?.meta}
        searchable
        showPagination
      />
    </StyledDiv>
  );
};

export default RegistrationList;
