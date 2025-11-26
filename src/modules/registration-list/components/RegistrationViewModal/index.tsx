import React from "react";

import clsx from "clsx";

import ImageWithFallback from "@/components/ImageWithFallback";
import { SpinnerLoader } from "@/components/Loader/SpinnerLoader";
import Modal from "@/components/Modal";
import Typography from "@/components/Typography";
import { IDLE, PENDING, REJECTED, RESOLVED } from "@/constant/loading.state";
import { LoadingType } from "@/types/loading.types";
import { authAxios } from "@/utils/axios";
import { getApiResponseErrorObj } from "@/utils/get-api-response-error";
import { getNameShell } from "@/utils/get-name-shell";

import { RegistrationListType } from "../../registration-list.types";

import RegistrationAttachmentBlock from "./components/RegistrationAttachmentBlock";
import RegistrationInformationBlock from "./components/RegistrationInformationBlock";
import RegistrationProgramBLock from "./components/RegistrationprogramBlock";
import { StyledDiv } from "./style";

type Props = {
  isOpen: boolean;
  selectedData: RegistrationListType | null;
  onClose: () => void;
};

const RegistrationViewModal = ({ isOpen, onClose, selectedData }: Props) => {
  const [status, setStatus] = React.useState<LoadingType>(IDLE);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = React.useState<any>(null);

  React.useEffect(() => {
    const { id } = selectedData || {};
    if (!id) {
      return;
    }

    setStatus(PENDING);
    authAxios
      .get(`/survivors/${id}`)
      .then((res) => {
        const { data } = res?.data || {};
        setData(data);
        setStatus(RESOLVED);
      })
      .catch((err) => {
        getApiResponseErrorObj(err);
        setStatus(REJECTED);
      });
  }, [selectedData]);

  return (
    <Modal
      headerTitle="Registration Details"
      headerSubTitle="Complete information for registration REF-2024-001"
      isOpen={isOpen}
      onClose={onClose}
    >
      <StyledDiv>
        {[IDLE, PENDING].includes(status) ? (
          <div className="loader-wrapper">
            <SpinnerLoader />
          </div>
        ) : (
          <>
            <div className="registration-wrapper">
              <div
                className={clsx("registration-avatar-wrapper", {
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
              <div className="registration-personal-details-content">
                <Typography
                  as="h3"
                  className="registration-personal-name-content"
                >
                  {data?.full_name || "-"}
                </Typography>
                <Typography as="p" className="registration-personal-id-content">
                  REG-2024-001
                </Typography>

                <div>
                  <div className="registration-personal-status">
                    {data?.status}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <RegistrationInformationBlock />
              <RegistrationProgramBLock />
              <RegistrationAttachmentBlock data={data} />
            </div>
          </>
        )}
      </StyledDiv>
    </Modal>
  );
};

export default RegistrationViewModal;
