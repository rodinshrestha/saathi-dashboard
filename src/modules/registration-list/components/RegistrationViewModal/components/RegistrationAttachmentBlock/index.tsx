import React from "react";

import DocumentBlock from "@/components/DocumentBlock";
import Typography from "@/components/Typography";
import { getFileSize } from "@/utils/get-file-size";

import { StyledDiv } from "./style";

type DoucmentAttachmentType = {
  file_name: string;
  file_size: number;
  file_type: string;
  file_path: string;
  id: number;
};

type Props<T> = {
  data?: T;
};

const RegistrationAttachmentBlock = <
  T extends { attachments: Array<DoucmentAttachmentType> },
>({
  data,
}: Props<T>) => {
  const { attachments = [] } = data || {};

  if (!attachments || !attachments.length) {
    return null;
  }
  return (
    <StyledDiv>
      <Typography as="h3" className="information-block-title">
        Attachments
      </Typography>
      <div className="registration-document-wrapper">
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
      </div>
    </StyledDiv>
  );
};

export default RegistrationAttachmentBlock;
