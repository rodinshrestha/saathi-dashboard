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
};

const Modal = ({
  isOpen,
  onClose,
  children,
  headerTitle,
  headerSubTitle,
}: Props) => {
  const ref = React.useRef<HTMLDivElement | null>(null);

  useOutsideClick(ref as React.RefObject<HTMLDivElement>, onClose);

  useEscapeKey(onClose);

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
                <Typography as="subtitle1">{headerTitle}</Typography>
              )}
              {headerSubTitle && (
                <Typography as="subtitle2">{headerSubTitle}</Typography>
              )}

              <div className="modal-close-icon" onClick={onClose}>
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
