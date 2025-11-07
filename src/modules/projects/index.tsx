"use client";
import React from "react";

import ModuleSectionWrapper from "@/components/ModuleSectionWrapper";
import Table from "@/components/Table";
import { IDLE, PENDING } from "@/constant/loading.state";

import ProjectFormModal from "./components/ProjectFormModal";
import useFetchProjectData from "./hooks/useFetchProjectData";
import useFetchProjectFormData from "./hooks/useFetchProjectFormData";
import { ProjectTableColumn } from "./project.table.column";
import { useProjectStore } from "./store/useProjectStore";
import { StyledDiv } from "./style";

const ProjectModule = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = React.useState(false);

  // Fetch program and province Data
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

      <Table
        columns={ProjectTableColumn()}
        data={projectData?.data || []}
        isLoading={projectDataLoader === IDLE || projectDataLoader === PENDING}
      />
    </StyledDiv>
  );
};

export default ProjectModule;
