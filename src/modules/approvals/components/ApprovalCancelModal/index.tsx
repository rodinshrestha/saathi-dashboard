import Button from "@/components/Button";
import Modal from "@/components/Modal";
import Typography from "@/components/Typography";

import { StyledDiv } from "./style";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const ApprovalCancelModal = ({ isOpen, onClose }: Props) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      headerTitle="Send Back for Correction"
    >
      <StyledDiv>
        <Typography as="p" className="cancel-registration-content">
          Are you sure you want to send back registration REG-2024-002 for John
          Doe? The submitter will be able to make corrections.
        </Typography>

        <div className="cancel-registration-btn-wrapper">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button className="cancel-btn" onClick={onClose}>
            Approve
          </Button>
        </div>
      </StyledDiv>
    </Modal>
  );
};

export default ApprovalCancelModal;
