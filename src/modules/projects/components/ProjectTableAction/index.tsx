"use client";
import React from "react";

import { SquarePen, Trash } from "lucide-react";

import { ProjectDataType } from "../../projects.types";
import DeleteProjectModal from "../DeleteProjectModal";
import ProjectFormModal from "../ProjectFormModal";

type Props = {
  value: ProjectDataType;
};

const ProjectTableAction = ({ value }: Props) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = React.useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = React.useState(false);

  return (
    <>
      <div className="table-action-wrapper">
        <div
          className="table-action-icon"
          onClick={() => {
            setIsEditModalOpen(true);
          }}
        >
          <SquarePen size={16} />{" "}
        </div>
        <div
          className="table-action-icon"
          onClick={() => setIsDeleteModalOpen(true)}
        >
          <Trash size={16} color="#D4183D" />
        </div>
      </div>

      <DeleteProjectModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        data={value}
      />

      <ProjectFormModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        selectedValue={value}
        isEdit
      />
    </>
  );
};

export default ProjectTableAction;
