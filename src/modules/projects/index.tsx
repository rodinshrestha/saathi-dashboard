"use client";
import React from "react";

import ModuleSectionWrapper from "@/components/ModuleSectionWrapper";
import Table from "@/components/Table";

import CreateProjectModal from "./components/CreateProjectModal";
import DeleteProjectModal from "./components/DeleteProjectModal";
import { ProjectTableColumn } from "./project.table.column";
import { ProjectListType } from "./projects.types";
import { StyledDiv } from "./style";

const data: Array<ProjectListType> = [
  {
    project_id: 1,
    project_title: "test",
    program_id: "test",
    province_id: "province test",
    district_id: "distrcit",
    event_title: "test",
    start_date: "2024-01-15",
    end_date: "	2024-12-31",
  },
  {
    project_id: 2,
    project_title: "test",
    program_id: "test",
    province_id: "province test",
    district_id: "distrcit",
    event_title: "test",
    start_date: "2024-01-15",
    end_date: "	2024-12-31",
  },
];

const ProjectModule = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = React.useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = React.useState(false);
  const [selectedData, setSelectedData] =
    React.useState<ProjectListType | null>(null);

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

      <CreateProjectModal
        isCreateModalOpen={isCreateModalOpen}
        setIsCreateModalOpen={setIsCreateModalOpen}
      />

      <DeleteProjectModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        title={selectedData?.project_title}
      />

      <Table
        columns={ProjectTableColumn({ setIsDeleteModalOpen, setSelectedData })}
        data={data}
      />
    </StyledDiv>
  );
};

export default ProjectModule;
