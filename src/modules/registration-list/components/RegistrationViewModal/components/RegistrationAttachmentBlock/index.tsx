import React from "react";

import DocumentBlock from "@/components/DocumentBlock";
import Typography from "@/components/Typography";

import { StyledDiv } from "./style";

const documentList = [
  { name: "ID_Document.pdf", size: "PDF • 245 KB" },
  { name: "Registration_Form.pdf", size: "PDF • 186 KB" },
  { name: "Photo_ID.jpg", size: "Image • 523 KB" },
];

const RegistrationAttachmentBlock = () => {
  return (
    <StyledDiv>
      <Typography as="h3" className="information-block-title">
        Attachments
      </Typography>
      <div className="registration-document-wrapper">
        {documentList.map((document, i) => {
          return (
            <DocumentBlock name={document.name} size={document.size} key={i} />
          );
        })}
      </div>
    </StyledDiv>
  );
};

export default RegistrationAttachmentBlock;
