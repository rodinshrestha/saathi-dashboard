"use client";
import React from "react";

import { SquarePen, Trash } from "lucide-react";

import { ProjectListType } from "../../projects.types";
import DeleteProjectModal from "../DeleteProjectModal";

type Props = {
  value: ProjectListType;
  setIsEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedValue: React.Dispatch<
    React.SetStateAction<ProjectListType | null>
  >;
};

const ProjectTableAction = ({
  value,
  setIsEditModalOpen,
  setSelectedValue,
}: Props) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = React.useState(false);
  return (
    <>
      <div className="table-action-wrapper">
        <div
          className="table-action-icon"
          onClick={() => {
            setIsEditModalOpen(true);
            setSelectedValue(value);
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
        title={value.project_title}
      />
    </>
  );
};

export default ProjectTableAction;
