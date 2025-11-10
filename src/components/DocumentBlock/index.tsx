import React from "react";

import { Download, FileText } from "lucide-react";

import Typography from "../Typography";

import { StyledDiv } from "./style";

type Props = {
  name: string;
  size: string;
};

const DocumentBlock = ({ name, size }: Props) => {
  return (
    <StyledDiv className="document-block-wrapper">
      <div className="document-detail-wrapper">
        <div className="document-icon-wrapper">
          <FileText size={20} />
        </div>
        <div className="document-content-wrapper">
          {name && (
            <Typography as="p" className="document-content-id">
              {name}
            </Typography>
          )}
          {size && (
            <Typography as="p" className="document-size-value">
              {size}
            </Typography>
          )}
        </div>
      </div>

      <div className="docoument-download-icon-wrapper">
        <Download size={16} className="document-download-icon" />
      </div>
    </StyledDiv>
  );
};

export default DocumentBlock;
