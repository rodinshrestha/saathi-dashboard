import React from "react";

import DocumentBlock from "@/components/DocumentBlock";
import Typography from "@/components/Typography";
import { DoucmentAttachmentType } from "@/modules/registration-list/components/RegistrationViewModal/components/RegistrationAttachmentBlock";
import { getFileSize } from "@/utils/get-file-size";

import { StyledDiv } from "./style";

type Props<T> = {
  data?: T;
};

const Attachments = <T extends { attachments: Array<DoucmentAttachmentType> }>({
  data,
}: Props<T>) => {
  const { attachments = [] } = data || {};

  if (!attachments || !attachments.length) {
    return (
      <StyledDiv className="empty-attachment-wrapper">
        <Typography as="p">There is no any file</Typography>
      </StyledDiv>
    );
  }
  return (
    <StyledDiv>
      {attachments.map((attachment) => {
        return (
          <DocumentBlock
            name={attachment.file_name}
            size={getFileSize(attachment.file_size)}
            fileType={attachment.file_type}
            url={attachment.file_path}
            key={attachment.id}
            id={attachment.id}
          />
        );
      })}
    </StyledDiv>
  );
};

export default Attachments;
