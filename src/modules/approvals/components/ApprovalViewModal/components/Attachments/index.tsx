import React from "react";

import DocumentBlock from "@/components/DocumentBlock";

import { StyledDiv } from "./style";

const documentList = [
  { name: "ID_Document.pdf", size: "PDF • 245 KB" },
  { name: "Registration_Form.pdf", size: "PDF • 186 KB" },
  { name: "Photo_ID.jpg", size: "Image • 523 KB" },
];

const Attachments = () => {
  return (
    <StyledDiv>
      {documentList.map((document, i) => {
        return (
          <DocumentBlock name={document.name} size={document.size} key={i} />
        );
      })}
    </StyledDiv>
  );
};

export default Attachments;
