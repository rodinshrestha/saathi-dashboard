import React from "react";

import { Download, FileText } from "lucide-react";

import useToaster from "@/hooks/useToaster";
import { authAxios } from "@/utils/axios";
import { getApiResponseErrorToast } from "@/utils/get-api-response-error-toast";
import { getDownloadLink } from "@/utils/get-download-link";
import { getFileType } from "@/utils/get-file-type";

import ImageWithFallback from "../ImageWithFallback";
import CircleProgress from "../Loader/CircleProgressBar";
import Typography from "../Typography";

import { StyledDiv } from "./style";

type Props = {
  name: string;
  size: string;
  fileType: string;
  url: string;
  id: number;
};

const DocumentBlock = ({ name, size, fileType, url, id }: Props) => {
  const [progress, setProgress] = React.useState(0);
  const [isDownloading, setIsDownloading] = React.useState(false);

  const { successToast } = useToaster();

  const handleDownload = (id: number) => {
    setIsDownloading(true);
    authAxios
      .get(`attachments/${id}/download`, {
        responseType: "blob",
        onDownloadProgress: (event) => {
          if (event.total) {
            const percent = (event.loaded / event.total) * 100;
            setProgress(percent);
          }
        },
      })
      .then((res) => {
        successToast("File has been downloaded");
        getDownloadLink(res, name);
      })
      .catch((err) => {
        getApiResponseErrorToast(err);
      })
      .finally(() => {
        setProgress(0);
        setIsDownloading(false);
      });
  };

  return (
    <StyledDiv className="document-block-wrapper">
      <div className="document-detail-wrapper">
        <div className="document-icon-wrapper">
          {fileType === "image" ? (
            <ImageWithFallback src={url} alt="image" fill />
          ) : (
            <FileText size={20} />
          )}
        </div>
        <div className="document-content-wrapper">
          {name && (
            <Typography as="p" className="document-content-id">
              {name}
            </Typography>
          )}
          {size && (
            <Typography as="p" className="document-size-value">
              {getFileType(fileType)} • {size}
            </Typography>
          )}
        </div>
      </div>

      <div className="docoument-download-icon-wrapper">
        {isDownloading ? (
          <CircleProgress progress={progress} />
        ) : (
          <Download
            size={16}
            className="document-download-icon"
            onClick={() => handleDownload(id)}
          />
        )}
      </div>
    </StyledDiv>
  );
};

export default DocumentBlock;
