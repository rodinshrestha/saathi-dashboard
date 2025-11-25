// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const initializeAttachmentsData = (attachments: Array<any> = []) => {
  if (!Array.isArray(attachments) || !attachments.length) {
    return [];
  }

  return attachments.map((attachment) => ({
    file: {
      ...attachment,
      name: attachment.file_name,
      type: attachment.file_type,
      size: attachment.file_size,
    },
  }));
};
