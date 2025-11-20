import React from "react";

import Button from "@/components/Button";
import Modal from "@/components/Modal";
import Typography from "@/components/Typography";
import useToaster from "@/hooks/useToaster";
import { authAxios } from "@/utils/axios";
import { getApiResponseErrorToast } from "@/utils/get-api-response-error-toast";

import { ApprovalType } from "../../approval.types";
import useFetchApproval from "../../hooks/useFetchApproval";

import { StyledDiv } from "./style";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  selectedApprovalData: ApprovalType | null;
};

const ApprovalCancelModal = ({
  isOpen,
  onClose,
  selectedApprovalData,
}: Props) => {
  const [loader, setLoader] = React.useState(false);
  const { successToast } = useToaster();
  const { fetchApprovalList } = useFetchApproval();

  const handleOnDelete = () => {
    if (!selectedApprovalData) return;
    const { id } = selectedApprovalData;
    setLoader(true);
    authAxios
      .put(`/registrations/${id}`, { status: "rejected" })
      .then(() => {
        fetchApprovalList().finally(() => {
          successToast(
            `${selectedApprovalData.registration_id} has been sent back to submitter`
          );
          onClose();
          setLoader(false);
        });
      })
      .catch((err) => {
        getApiResponseErrorToast(err);
        setLoader(false);
      });
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      headerTitle="Send Back for Correction"
      disableClose={loader}
    >
      <StyledDiv>
        <Typography as="p" className="cancel-registration-content">
          {`Are you sure you want to send back registration ${selectedApprovalData?.registration_id} for ${selectedApprovalData?.user?.full_name}? The submitter will be able to make corrections.`}
        </Typography>

        <div className="cancel-registration-btn-wrapper">
          <Button variant="outline" onClick={onClose} disabled={loader}>
            Cancel
          </Button>
          <Button
            className="cancel-btn"
            onClick={handleOnDelete}
            loading={loader}
            disabled={loader}
          >
            Approve
          </Button>
        </div>
      </StyledDiv>
    </Modal>
  );
};

export default ApprovalCancelModal;
