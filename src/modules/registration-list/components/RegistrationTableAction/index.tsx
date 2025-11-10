import React from "react";

import { Eye, SquarePen } from "lucide-react";

import { StyledDiv } from "./style";

type Props = {
  setIsViewModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const RegistrationTableAction = ({ setIsViewModalOpen }: Props) => {
  return (
    <StyledDiv className="registration-table-action-wrapper">
      <Eye size={18} onClick={() => setIsViewModalOpen(true)} />
      <SquarePen size={18} />
    </StyledDiv>
  );
};

export default RegistrationTableAction;
