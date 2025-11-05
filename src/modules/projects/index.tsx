"use client";
import React from "react";

import { Plus } from "lucide-react";

import Button from "@/components/Button";
import Typography from "@/components/Typography";

import CreateProjectModal from "./components/CreateProjectModal";
import { StyledDiv } from "./style";

const ProjectModule = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = React.useState(false);

  return (
    <StyledDiv>
      <div className="section-wrapper">
        <div className="section-content-wrapper">
          <Typography as="body1">Projects</Typography>
          <Typography as="body2">Manage Program Projects</Typography>
        </div>
        <div className="section-btn-wrapper">
          <Button
            size="md"
            className="section-btn"
            onClick={() => setIsCreateModalOpen(true)}
          >
            <Plus size={16} />
            Create New Project
          </Button>
        </div>
      </div>

      <CreateProjectModal
        isCreateModalOpen={isCreateModalOpen}
        setIsCreateModalOpen={setIsCreateModalOpen}
      />
    </StyledDiv>
  );
};

export default ProjectModule;
