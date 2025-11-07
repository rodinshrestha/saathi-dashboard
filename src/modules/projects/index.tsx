"use client";
import React from "react";

import ModuleSectionWrapper from "@/components/ModuleSectionWrapper";
import Table from "@/components/Table";
import { IDLE, PENDING, RESOLVED } from "@/constant/loading.state";
import { LoadingType } from "@/types/loading.types";

import ProjectFormModal from "./components/ProjectFormModal";
import useFetchProjectFormData from "./hooks/useFetchProjectFormData";
import { ProjectTableColumn } from "./project.table.column";
import { ProjectListType } from "./projects.types";
import { StyledDiv } from "./style";

const ProjectModule = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = React.useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] =
    React.useState<ProjectListType | null>(null);
  const [data, setData] = React.useState<Array<ProjectListType>>([]);
  const [loader, setLoader] = React.useState<LoadingType>(IDLE);

  // Fetch program and province Data
  useFetchProjectFormData();

  React.useEffect(() => {
    setLoader(PENDING);

    setTimeout(() => {
      setData([
        {
          project_id: 1,
          project_title: "test",
          program_id: "test",
          province_id: "province test",
          district_id: "district",
          event_title: "test",
          funders: [{ name: "test" }, { name: "test2" }],

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          start_date: "2024-01-15" as any,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          end_date: "2024-12-31" as any,
        },
        {
          project_id: 2,
          project_title: "test2",
          program_id: "test2",
          province_id: "province test2",
          district_id: "district2",
          event_title: "test2",
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          start_date: "2024-01-15" as any,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          end_date: "2024-12-31" as any,
        },
      ]);
      setLoader(RESOLVED);
    }, 2000);
  }, []);

  const handleCloseFormModal = () => {
    setIsCreateModalOpen(false);
    setIsEditModalOpen(false);
    setSelectedValue(null);
  };

  console.log(selectedValue);

  return (
    <StyledDiv>
      <ModuleSectionWrapper
        title="Projects"
        titleHelperText="Manage Program Project"
        onClick={() => setIsCreateModalOpen(true)}
        btnlabel="Create New Project"
        showBtn
        showBtnIcon
      />

      <ProjectFormModal
        isOpen={isCreateModalOpen || isEditModalOpen}
        onClose={handleCloseFormModal}
        selectedValue={selectedValue}
        isEdit={isEditModalOpen}
      />

      <Table
        columns={ProjectTableColumn({ setSelectedValue, setIsEditModalOpen })}
        data={data}
        isLoading={loader === IDLE || loader === PENDING}
      />
    </StyledDiv>
  );
};

export default ProjectModule;
