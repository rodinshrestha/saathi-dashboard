import React from "react";

import Button from "@/components/Button";
import Modal from "@/components/Modal";
import Tab from "@/components/Tab";
import Typography from "@/components/Typography";

import Attachments from "./components/Attachments";
import PersonalInformation from "./components/PersonalInformation";
import { StyledDiv } from "./style";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const ApprovalViewModal = ({ isOpen, onClose }: Props) => {
  const tabList = [
    {
      id: "personal-information",
      label: "Personal Information",
      content: <PersonalInformation />,
    },
    {
      id: "attachments",
      label: "Attachments",
      content: <Attachments />,
    },
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} headerTitle="Review Registration">
      <StyledDiv>
        <div className="review-details-wrapper">
          <div className="review-detail-avatar-wrapper">JD</div>
          <div className="review-personal-details-content">
            <Typography as="h3" className="review-personal-name-content">
              John Doe
            </Typography>
            <Typography as="p" className="review-personal-id-content">
              Registration ID: REG-2024-002
            </Typography>

            <div className="review-personal-program-wrapper">
              <div className="review-personal-program">Prosecution</div>
              <div className="review-personal-program">
                Legal Aid Initiative
              </div>
            </div>
          </div>
        </div>

        <div className="approval-tab-wrapper">
          <Tab tabs={tabList} />
        </div>

        <div className="approval-btn-wrapper">
          <Button variant="outline">close</Button>
        </div>
      </StyledDiv>
    </Modal>
  );
};

export default ApprovalViewModal;
