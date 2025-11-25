import { AttachmentTypes } from "@/types/attachment.types";

export const sanitizeAttachmentsFile = (attachments: AttachmentTypes = []) => {
  if (!Array.isArray(attachments) || !attachments.length) {
    return [];
  }

  return attachments.reduce((acc, iterator) => {
    const { file, error } = iterator;

    if (error) return acc;

    return [...acc, file];
  }, [] as Array<File>);
};
