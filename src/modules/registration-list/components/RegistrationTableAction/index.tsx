import React from "react";

import { Eye, SquarePen } from "lucide-react";

import NextLink from "@/components/NextLink";
import { getProgramUrl } from "@/utils/get-program-url";

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

  const { id: programId } = data?.program || {};
  const { id: userId } = data || {};

  if (!programId) {
    debugger;
  }

  return (
    <StyledDiv className="registration-table-action-wrapper">
      <Eye size={18} onClick={handleOnClick} />
      <NextLink href={getProgramUrl(programId, userId)}>
        <SquarePen size={18} />
      </NextLink>
    </StyledDiv>
  );
};

export default RegistrationTableAction;
