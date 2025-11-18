"use client";

import React from "react";

import { ACCESS_TOKEN } from "@/constant/token.constant";
import { authAxios } from "@/utils/axios";
import { removeCookie } from "@/utils/cookie";

import Button from "../Button";
import Modal from "../Modal";
import Typography from "../Typography";

import { StyledDiv } from "./style";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const LogoutModal = ({ isOpen, onClose }: Props) => {
  const [loader, setLoader] = React.useState(false);

  const handleOnClick = () => {
    setLoader(true);
    authAxios("/logout").finally(() => {
      setLoader(false);
      removeCookie(ACCESS_TOKEN);
      window.location.reload();
    });
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      headerTitle="Confirmation Modal"
      disableClose={loader}
    >
      <StyledDiv>
        <Typography as="p" className="logout-content">
          Are you sure you want to logout?
        </Typography>

        <div className="logout-btn-wrapper">
          <Button variant="outline" onClick={onClose} disabled={loader}>
            Cancel
          </Button>
          <Button onClick={handleOnClick} loading={loader} disabled={loader}>
            Logout
          </Button>
        </div>
      </StyledDiv>
    </Modal>
  );
};

export default LogoutModal;
