import clsx from "clsx";
import { FileText, X } from "lucide-react";

import ImageWithFallback from "@/components/ImageWithFallback";
import Typography from "@/components/Typography";
import { getFileSize } from "@/utils/get-file-size";

import { StyledDiv } from "./style";

type Props = {
  file: File;
  index: number;
  onDeleteClick: (index: number) => void;
  error?: string;
};

const UploadedFile = ({ file, error, onDeleteClick, index }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getFileType = (file: any) => {
    if (file.type.includes("image/")) {
      return (
        <ImageWithFallback
          src={file?.file_path ? file.file_path : URL.createObjectURL(file)}
          alt={file.name}
          fill
        />
      );
    }

    return <FileText />;
  };
  return (
    <StyledDiv>
      <div className={clsx("uploaded-image-wrapper", { error })}>
        <div className="uploaded-image-inner-wrapper">
          <div className="image-wrapper">{getFileType(file)}</div>
          <div className="file-information">
            <Typography as="p" className="file-name">
              {file.name}
            </Typography>
            <Typography as="p" className="file-size">
              {getFileSize(file.size)}
            </Typography>
          </div>
        </div>
        <div
          className="delete-action-wrapper"
          onClick={() => onDeleteClick(index)}
        >
          <X size={18} />
        </div>
      </div>
      {error && (
        <div className="uploaded-image-error-wrapper">
          <Typography as="p" className="file-upload-error-text">
            {`${error}. This file will be ignored.`}
          </Typography>
        </div>
      )}
    </StyledDiv>
  );
};

export default UploadedFile;
