"use client";
import React from "react";

import ModuleSectionWrapper from "@/components/ModuleSectionWrapper";
import Table from "@/components/Table";
import { IDLE, PENDING } from "@/constant/loading.state";

import DeleteProjectModal from "./components/DeleteProjectModal";
import ProjectFormModal from "./components/ProjectFormModal";
import ProjectUpdateModal from "./components/ProjectUpdateModal";
import useFetchProjectData from "./hooks/useFetchProjectData";
import useFetchProjectFormData from "./hooks/useFetchProjectFormData";
import { ProjectTableColumn } from "./project.table.column";
import { ProjectDataType } from "./projects.types";
import { useProjectStore } from "./store/useProjectStore";
import { StyledDiv } from "./style";

const ProjectModule = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = React.useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = React.useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] =
    React.useState<ProjectDataType | null>(null);

  const { fetchFormData } = useFetchProjectFormData();

  const { fetchProjectData } = useFetchProjectData();

  const { projectData, projectDataLoader } = useProjectStore();

  React.useEffect(() => {
    fetchProjectData();
    fetchFormData();
  }, [fetchProjectData, fetchFormData]);

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
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />

      <DeleteProjectModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        data={selectedValue}
      />

      <ProjectUpdateModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        selectedValue={selectedValue}
      />

      <Table
        columns={ProjectTableColumn({
          setSelectedValue,
          setIsDeleteModalOpen,
          setIsEditModalOpen,
        })}
        data={projectData?.data || []}
        isLoading={projectDataLoader === IDLE || projectDataLoader === PENDING}
      />
    </StyledDiv>
  );
};

export default ProjectModule;
