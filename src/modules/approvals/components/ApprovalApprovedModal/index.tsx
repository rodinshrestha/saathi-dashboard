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

const ApprovalApprovedModal = ({
  isOpen,
  onClose,
  selectedApprovalData,
}: Props) => {
  const [loader, setLoader] = React.useState(false);
  const { successToast } = useToaster();
  const { fetchApprovalList } = useFetchApproval();

  const handleApprove = () => {
    if (!selectedApprovalData) return;
    const { id } = selectedApprovalData;

    setLoader(true);
    authAxios
      .put(`/registrations/${id}`, { status: "approved" })
      .then(() => {
        fetchApprovalList().finally(() => {
          successToast(
            `${selectedApprovalData?.registration_id} has been approved`
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

  console.log(loader);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      headerTitle="Approve Registration"
      disableClose={loader}
    >
      <StyledDiv>
        <Typography as="p" className="approve-registration-content">
          {`Are you sure you want to approve registration ${selectedApprovalData?.registration_id} for ${selectedApprovalData?.user.name}? This action will make the data visible in the dashboard.`}
        </Typography>

        <div className="approve-registration-btn-wrapper">
          <Button variant="outline" onClick={onClose} disabled={loader}>
            Cancel
          </Button>
          <Button
            className="approve-btn"
            onClick={handleApprove}
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

export default ApprovalApprovedModal;
