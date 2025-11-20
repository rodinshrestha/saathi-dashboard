import React from "react";

import { Eye, SquarePen } from "lucide-react";

import { RegistrationListType } from "../../registration-list.types";

import { StyledDiv } from "./style";

type Props = {
  setIsViewModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedData: React.Dispatch<
    React.SetStateAction<RegistrationListType | null>
  >;
  data: RegistrationListType;
};

const RegistrationTableAction = ({
  setIsViewModalOpen,
  data,
  setSelectedData,
}: Props) => {
  const handleOnClick = () => {
    setSelectedData(data);
    setIsViewModalOpen(true);
  };

  return (
    <StyledDiv className="registration-table-action-wrapper">
      <Eye size={18} onClick={handleOnClick} />
      <SquarePen size={18} />
    </StyledDiv>
  );
};

export default RegistrationTableAction;
