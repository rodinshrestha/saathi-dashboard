import React from "react";

import { FormikProps } from "formik";
import { Camera, Upload, User } from "lucide-react";
import Image from "next/image";

import { FILE_SIZE } from "@/constant/file-size.constant";
import useToaster from "@/hooks/useToaster";
import { AttachmentTypes } from "@/types/attachment.types";
import { getProfilePictureUrl } from "@/utils/get-profile-picture-url";

import ImageWithFallback from "../ImageWithFallback";
import SupportingDocuments from "../SupportingDocuments";
import Typography from "../Typography";

import { StyledDiv } from "./style";

type Props<T> = {
  formik: FormikProps<T>;
  showProfile?: boolean;
};

const AttachmentForm = <
  T extends {
    profile_picture?: File | string | null;
    attachments: AttachmentTypes;
  },
>({
  formik,
  showProfile,
}: Props<T>) => {
  const [profilePictureErrorList, setProfilePictureErrorList] = React.useState({
    type: "",
    fileSize: "",
  });

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

    formik.setFieldValue("profile_picture", file);
  };

  const showProfilePictureError =
    profilePictureErrorList.fileSize || profilePictureErrorList.type;

  const { profile_picture } = formik?.values;

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

      {showProfile && (
        <div className="attachment-profile-wrapper">
          <Typography as="p" className="attachment-profile-content">
            <Camera size={16} />
            Profile Picture
          </Typography>

          <div className="attachment-profile-content-wrapper">
            <div className="profile-icon-wrapper">
              {profile_picture ? (
                <ImageWithFallback
                  src={getProfilePictureUrl(profile_picture)}
                  alt="profle picture"
                  fill
                />
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
                  name="file_upload"
                  type="file"
                  id="profile-picture-upload"
                  accept="image/*"
                  className="attachment-profile-upload-btn"
                  onChange={handleProfilePicture}
                />
                <Camera size={16} />
                {profile_picture ? "Update" : "Upload"} Photo
              </label>

              <Typography as="p" className="profile-upload-instruction-text">
                Recommended: Square image, at least 400x400px <br /> JPG, PNG,
                or GIF • Max 2MB
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
      )}
      <SupportingDocuments formik={formik} />
    </StyledDiv>
  );
};

export default AttachmentForm;
