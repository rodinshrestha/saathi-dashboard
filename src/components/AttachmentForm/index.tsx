import React from "react";

import { Camera, FileText, Upload, User } from "lucide-react";
import Image from "next/image";

import { FILE_SIZE } from "@/constant/file-size.constant";
import useToaster from "@/hooks/useToaster";

import Typography from "../Typography";

import { StyledDiv } from "./style";

type ProfilePictureType = {
  id: string;
  name: string;
  type: string;
  size: number;
  preview?: string;
};

const AttachmentForm = () => {
  const [profilePicture, setProfilePicture] =
    React.useState<ProfilePictureType | null>(null);
  const [profilePictureErrorList, setProfilePictureErrorList] = React.useState({
    type: "",
    fileSize: "",
  });

  const profilePictureId = React.useId();
  const { errorToast } = useToaster();

  const handleProfilePicture = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      errorToast("Please select an image file for profile picture");
      setProfilePictureErrorList((prev) => ({
        ...prev,
        type: "Please select an image file for profile picture",
      }));
      return;
    } else {
      setProfilePictureErrorList((prev) => ({
        ...prev,
        type: "",
      }));
    }

    if (file.size > FILE_SIZE) {
      errorToast(`${file.name} exceeds the 5MB limit`);
      setProfilePictureErrorList((prev) => ({
        ...prev,
        fileSize: "file exceeds the 5MB limit",
      }));
      return;
    } else {
      setProfilePictureErrorList((prev) => ({
        ...prev,
        fileSize: "",
      }));
    }

    setProfilePicture({
      id: profilePictureId,
      name: file.name,
      type: file.type,
      size: file.size,
      preview: URL.createObjectURL(file),
    });
  };

  const showProfilePictureError =
    profilePictureErrorList.fileSize || profilePictureErrorList.type;

  return (
    <StyledDiv>
      <div className="attachment-form-title-wrapper">
        <Typography as="p" className="form-title">
          <Upload size={20} />
          Attachments
        </Typography>
        <Typography as="p" className="form-helper-title">
          Upload profile picture and supporting ducuments
        </Typography>
      </div>

      <div className="attachment-profile-wrapper">
        <Typography as="p" className="attachment-profile-content">
          <Camera size={16} />
          Profile Picture
        </Typography>

        <div className="attachment-profile-content-wrapper">
          <div className="profile-icon-wrapper">
            {profilePicture?.preview ? (
              <Image src={profilePicture.preview} alt="profle picture" fill />
            ) : (
              <User size={48} />
            )}
          </div>
          <div className="profile-content-wrapper">
            <label
              className="profile-upload-btn-wrapper"
              htmlFor="profile-picture-upload"
            >
              <input
                type="file"
                id="profile-picture-upload"
                accept="image/*"
                className="attachment-profile-upload-btn"
                onChange={handleProfilePicture}
              />
              <Camera size={16} />
              {profilePicture?.size ? "Update" : "Upload"} Photo
            </label>

            <Typography as="p" className="profile-upload-instruction-text">
              Recommended: Square image, at least 400x400px <br /> JPG, PNG, or
              GIF • Max 5MB
            </Typography>

            {showProfilePictureError && (
              <ul className="profile-picture-error-wrapper">
                {profilePictureErrorList.fileSize && (
                  <li>{profilePictureErrorList.fileSize}</li>
                )}
                {profilePictureErrorList.type && (
                  <li>{profilePictureErrorList.type}</li>
                )}
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className="supporting-document-wrapper">
        <Typography as="p" className="supporting-document-title">
          <FileText size={16} />
          Supporting Documents
        </Typography>

        <div className="supporting-upload-area"></div>

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
      </div>
    </StyledDiv>
  );
};

export default AttachmentForm;
