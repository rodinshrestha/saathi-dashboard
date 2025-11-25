import React from "react";

import { FormikProps } from "formik";
import { FileText, Upload } from "lucide-react";

import { ALLOWED_FILE_TYPES } from "@/constant/allowed-file-types.constant";
import { FILE_SIZE } from "@/constant/file-size.constant";
import { AttachmentTypes } from "@/types/attachment.types";

import Typography from "../Typography";

import { StyledDiv } from "./style";
import UploadedFile from "./UploadedFile";

type Props<T> = {
  formik: FormikProps<T>;
};

const SupportingDocuments = <T extends { attachments: AttachmentTypes }>({
  formik,
}: Props<T>) => {
  const processFiles = (files: File[]) => {
    const fileData = files.reduce(
      (acc, file) => {
        if (file?.size > FILE_SIZE) {
          return [...acc, { file, error: "File size must be less than 2mb" }];
        }

        const isAllowed =
          file.type.startsWith("image/") ||
          ALLOWED_FILE_TYPES.includes(file.type);

        if (!isAllowed) {
          return [
            ...acc,
            { file, error: "File must be image, pdf, doc, text" },
          ];
        }

        return [...acc, { file, error: "" }];
      },
      [] as Array<{ file: File; error?: string }>
    );

    formik.setFieldValue("attachments", [
      ...formik.values.attachments.map((x) => ({
        file: x.file,
        error: x?.error,
      })),
      ...fileData,
    ]);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const selectedFiles = Array.from(e.target.files || []);
    processFiles(selectedFiles);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    processFiles(droppedFiles);
  };

  const handleOnRemove = (index: number) => {
    const filterdAttachment = formik.values.attachments.filter(
      (_, i) => i !== index
    );
    formik.setFieldValue("attachments", filterdAttachment);
  };

  return (
    <StyledDiv className="supporting-document-wrapper">
      <Typography as="p" className="supporting-document-title">
        <FileText size={16} />
        Supporting Documents
      </Typography>

      <div className="supporting-upload-area">
        <input
          type="file"
          id="supporting-documents-upload"
          className="hidden"
          accept="image/*,.pdf,.doc,.docx,.txt"
          onChange={handleFileUpload}
          multiple
        />
        <label
          htmlFor="supporting-documents-upload"
          className="upload-information-wrapper"
          onDrop={handleDrop}
        >
          <div className="upload-icon-wrapper">
            <Upload color="#3a86ff" />
          </div>
          <Typography as="p" className="file-upload-title-wrapper">
            <span className="file-upload-title">Click to upload</span>
            <span>or drag and drop</span>
          </Typography>
          <Typography as="p" className="supporting-upload-file-size-info">
            PNG, JPG, PDF, DOC up to 5MB per file • Multiple files allowed
          </Typography>
        </label>
      </div>

      <div className="upload-area-instruction-list-wrapper">
        <Typography as="p" className="upload-instruction-title">
          Supported file types:
        </Typography>
        <ul className="upload-instruction-content-wrapper">
          <li>Images: JPG, PNG, GIF</li>
          <li>Documents: PDF, DOC, DOCX, TXT</li>
          <li>
            Legal Documents: Birth certifcates, referral letters, court
            doucments
          </li>
        </ul>
      </div>

      <div className="uploaded-file-container">
        {formik.values.attachments.map((file, i) => {
          return (
            <UploadedFile
              key={i}
              file={file.file}
              error={file.error}
              onDeleteClick={handleOnRemove}
              index={i}
            />
          );
        })}
      </div>
    </StyledDiv>
  );
};

export default SupportingDocuments;
