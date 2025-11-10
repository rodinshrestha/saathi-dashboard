import React from "react";

import Button from "@/components/Button";
import Modal from "@/components/Modal";
import Typography from "@/components/Typography";

import { StyledDiv } from "./style";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const ApprovalApprovedModal = ({ isOpen, onClose }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} headerTitle="Approve Registration">
      <StyledDiv>
        <Typography as="p" className="approve-registration-content">
          Are you sure you want to approve registration REG-2024-002 for John
          Doe? This action will make the data visible in the dashboard.
        </Typography>

        <div className="approve-registration-btn-wrapper">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button className="approve-btn" onClick={onClose}>
            Approve
          </Button>
        </div>
      </StyledDiv>
    </Modal>
  );
};

export default ApprovalApprovedModal;
