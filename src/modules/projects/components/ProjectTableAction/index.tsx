"use client";
import React from "react";

import { SquarePen, Trash } from "lucide-react";

import { ProjectDataType } from "../../projects.types";

type Props = {
  setSelectedValue: React.Dispatch<
    React.SetStateAction<ProjectDataType | null>
  >;
  setIsDeleteModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  value: ProjectDataType;
};

const ProjectTableAction = ({
  setSelectedValue,
  value,
  setIsDeleteModalOpen,
  setIsEditModalOpen,
}: Props) => {
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
          onClick={() => {
            setIsDeleteModalOpen(true);
            setSelectedValue(value);
          }}
        >
          <Trash size={16} color="#D4183D" />
        </div>
      </div>
    </>
  );
};

export default ProjectTableAction;
