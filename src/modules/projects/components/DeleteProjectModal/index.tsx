"use client";

import React from "react";

import Button from "@/components/Button";
import Modal from "@/components/Modal";
import Typography from "@/components/Typography";
import { wait } from "@/utils/wait";

import { StyledDiv } from "./style";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
};

const DeleteProjectModal = ({ isOpen, onClose, title = "" }: Props) => {
  const [loader, setLoader] = React.useState(false);

  const handleOnDelete = async () => {
    setLoader(true);
    await wait();
    setLoader(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      headerTitle="Delete Project"
      disableClose={loader}
    >
      <StyledDiv>
        <Typography as="p" className="delete-project-content">
          {`Are you sure you want to delete "${title}"? This
        action cannot be undone and will remove all associated data.`}
        </Typography>
        <div className="delete-project-btn-wrapper">
          <Button variant="outline" onClick={onClose} disabled={loader}>
            Cancel
          </Button>
          <Button
            className="project-delete-btn"
            onClick={handleOnDelete}
            disabled={loader}
            loading={loader}
          >
            Delete
          </Button>
        </div>
      </StyledDiv>
    </Modal>
  );
};

export default DeleteProjectModal;
