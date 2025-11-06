import React from "react";

import Button from "@/components/Button";
import Modal from "@/components/Modal";
import Typography from "@/components/Typography";

import { StyledDiv } from "./style";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
};

const DeleteProjectModal = ({ isOpen, onClose, title = "" }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} headerTitle="Delete Project">
      <StyledDiv>
        <Typography as="p" className="delete-project-content">
          {`Are you sure you want to delete "${title}"? This
        action cannot be undone and will remove all associated data.`}
        </Typography>
        <div className="delete-project-btn-wrapper">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button className="project-delete-btn">Delete</Button>
        </div>
      </StyledDiv>
    </Modal>
  );
};

export default DeleteProjectModal;
