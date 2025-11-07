import React from "react";

import { ProjectDataType } from "../../projects.types";
import ProjectFormModal from "../ProjectFormModal";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  selectedValue: ProjectDataType | null;
};

const ProjectUpdateModal = ({ isOpen, onClose, selectedValue }: Props) => {
  if (!isOpen) return null;

  return (
    <ProjectFormModal
      isOpen={isOpen}
      onClose={onClose}
      selectedValue={selectedValue}
      isEdit
    />
  );
};

export default ProjectUpdateModal;
