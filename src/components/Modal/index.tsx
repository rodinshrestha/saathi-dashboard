"use client";
import React from "react";

import { X } from "lucide-react";

import { useEscapeKey } from "@/hooks/useEscapeKey";
import useOutsideClick from "@/hooks/useOutsideClick";

import Portal from "../Portal";
import Typography from "../Typography";

import { StyledDiv } from "./style";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  headerTitle?: string;
  headerSubTitle?: string;
  disableClose?: boolean;
};

const Modal = ({
  isOpen,
  onClose,
  children,
  headerTitle,
  headerSubTitle,
  disableClose,
}: Props) => {
  const ref = React.useRef<HTMLDivElement | null>(null);

  const handleClose = () => {
    if (disableClose) return;
    onClose();
  };

  useOutsideClick(ref as React.RefObject<HTMLDivElement>, handleClose);

  useEscapeKey(handleClose);

  React.useEffect(() => {
    if (!isOpen) {
      return;
    }

    document.body.classList.add("modal-open");

    return () => document.body.classList.remove("modal-open");
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }
  return (
    <Portal>
      <StyledDiv className="modal-wrapper">
        <div className="modal-dialog" ref={ref}>
          <div className="modal-content">
            <div className="modal-header">
              {headerTitle && (
                <Typography as="subtitle1" className="modal-title">
                  {headerTitle}
                </Typography>
              )}
              {headerSubTitle && (
                <Typography as="subtitle2">{headerSubTitle}</Typography>
              )}

              <div className="modal-close-icon" onClick={handleClose}>
                <X size={16} />
              </div>
            </div>
            <div className="modal-body">{children}</div>
          </div>
        </div>
      </StyledDiv>
    </Portal>
  );
};

export default Modal;
