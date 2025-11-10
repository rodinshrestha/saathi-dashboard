import React from "react";

import Modal from "@/components/Modal";
import Typography from "@/components/Typography";

import RegistrationAttachmentBlock from "./components/RegistrationAttachmentBlock";
import RegistrationInformationBlock from "./components/RegistrationInformationBlock";
import RegistrationProgramBLock from "./components/RegistrationprogramBlock";
import { StyledDiv } from "./style";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const RegistrationViewModal = ({ isOpen, onClose }: Props) => {
  return (
    <Modal
      headerTitle="Registration Details"
      headerSubTitle="Complete information for registration REF-2024-001"
      isOpen={isOpen}
      onClose={onClose}
    >
      <StyledDiv>
        <div className="registration-wrapper">
          <div className="registration-avatar-wrapper">JD</div>
          <div className="registration-personal-details-content">
            <Typography as="h3" className="registration-personal-name-content">
              Maria Santos
            </Typography>
            <Typography as="p" className="registration-personal-id-content">
              REG-2024-001
            </Typography>

            <div>
              <div className="registration-personal-status">approved</div>
            </div>
          </div>
        </div>
        <div>
          <RegistrationInformationBlock />
          <RegistrationProgramBLock />
          <RegistrationAttachmentBlock />
        </div>
      </StyledDiv>
    </Modal>
  );
};

export default RegistrationViewModal;
