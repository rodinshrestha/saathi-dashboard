import React from "react";

import DocumentBlock from "@/components/DocumentBlock";

import { StyledDiv } from "./style";

const documentList = [
  {
    name: "ID_Document.pdf",
    size: "PDF • 245 KB",
    url: "#",
    id: 1,
    fileType: "pdf",
  },
  {
    name: "Registration_Form.pdf",
    size: "PDF • 186 KB",
    url: "#",
    id: 2,
    fileType: "pdf",
  },
  {
    name: "Photo_ID.jpg",
    size: "Image • 523 KB",
    url: "#",
    id: 3,
    fileType: "pdf",
  },
];

const Attachments = () => {
  return (
    <StyledDiv>
      {documentList.map((document, i) => {
        return (
          <DocumentBlock
            name={document.name}
            size={document.size}
            key={i}
            url={document.url}
            id={document.id}
            fileType={document.fileType}
          />
        );
      })}
    </StyledDiv>
  );
};

export default Attachments;
