"use client";
import React from "react";

import { Plus } from "lucide-react";

import Button from "@/components/Button";
import Modal from "@/components/Modal";
import Typography from "@/components/Typography";

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

      <Modal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        headerTitle="Create New Project"
        headerSubTitle="Enter the project details below"
      >
        Test
      </Modal>
    </StyledDiv>
  );
};

export default ProjectModule;
