import React from "react";

import clsx from "clsx";

import Button from "@/components/Button";
import ImageWithFallback from "@/components/ImageWithFallback";
import { SpinnerLoader } from "@/components/Loader/SpinnerLoader";
import Modal from "@/components/Modal";
import Tab from "@/components/Tab";
import Typography from "@/components/Typography";
import { IDLE, PENDING, REJECTED, RESOLVED } from "@/constant/loading.state";
import { LoadingType } from "@/types/loading.types";
import { authAxios } from "@/utils/axios";
import { getApiResponseErrorToast } from "@/utils/get-api-response-error-toast";
import { getNameShell } from "@/utils/get-name-shell";

import { ApprovalType } from "../../approval.types";

import Attachments from "./components/Attachments";
import PersonalInformation from "./components/PersonalInformation";
import { StyledDiv } from "./style";

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

type Props = {
  isOpen: boolean;
  onClose: () => void;
  selectedApprovalData: ApprovalType | null;
};

const ApprovalViewModal = ({
  isOpen,
  onClose,
  selectedApprovalData,
}: Props) => {
  const [status, setStatus] = React.useState<LoadingType>(IDLE);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = React.useState<any>(null);

  React.useEffect(() => {
    const { id } = selectedApprovalData || {};
    if (!id) return;

    setStatus(PENDING);
    authAxios
      .get(`survivors/${id}`)
      .then((res) => {
        const { data } = res?.data || {};

        setData(data);
        setStatus(RESOLVED);
      })
      .catch((err) => {
        getApiResponseErrorToast(err);
        setStatus(REJECTED);
      });
  }, [selectedApprovalData]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} headerTitle="Review Registration">
      <StyledDiv>
        {[IDLE, PENDING].includes(status) ? (
          <div className="loader-wrapper">
            <SpinnerLoader />
          </div>
        ) : (
          <>
            <div className="review-details-wrapper">
              <div
                className={clsx("review-detail-avatar-wrapper", {
                  "bg-color": !data?.profile_picture,
                })}
              >
                {data?.profile_picture ? (
                  <ImageWithFallback
                    src={data.profile_picture}
                    alt="profile_picture"
                    showMagnifier
                    fill
                  />
                ) : (
                  getNameShell(data?.full_name)
                )}
              </div>
              <div className="review-personal-details-content">
                <Typography as="h3" className="review-personal-name-content">
                  {data?.full_name || "-"}
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
              <Button variant="outline" onClick={onClose}>
                close
              </Button>
            </div>
          </>
        )}
      </StyledDiv>
    </Modal>
  );
};

export default ApprovalViewModal;
