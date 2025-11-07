"use client";

import React from "react";

import Button from "@/components/Button";
import Modal from "@/components/Modal";
import Typography from "@/components/Typography";
import useToaster from "@/hooks/useToaster";
import { authAxios } from "@/utils/axios";
import { getApiResponseErrorToast } from "@/utils/get-api-response-error-toast";

import useFetchProjectData from "../../hooks/useFetchProjectData";
import { ProjectDataType } from "../../projects.types";

import { StyledDiv } from "./style";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  data: ProjectDataType;
};

const DeleteProjectModal = ({ isOpen, onClose, data }: Props) => {
  const [loader, setLoader] = React.useState(false);
  const { fetchProjectData } = useFetchProjectData();
  const { successToast } = useToaster();

  const handleOnDelete = async (id: number) => {
    setLoader(true);
    authAxios
      .delete(`/projects/${id}`)
      .then(() => {
        fetchProjectData().finally(() => {
          successToast(`${data?.project_title || ""} has been deleted`);
          setLoader(false);
          onClose();
        });
      })
      .catch((err) => {
        console.log(err);
        getApiResponseErrorToast(err);
        setLoader(false);
      });
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      headerTitle="Delete Project"
      disableClose={loader}
    >
      <StyledDiv>
        <Typography as="p" className="delete-project-content">
          {`Are you sure you want to delete "${data?.project_title || ""}"? This
        action cannot be undone and will remove all associated data.`}
        </Typography>
        <div className="delete-project-btn-wrapper">
          <Button variant="outline" onClick={onClose} disabled={loader}>
            Cancel
          </Button>
          <Button
            className="project-delete-btn"
            onClick={() => handleOnDelete(data.id)}
            disabled={loader}
            loading={loader}
          >
            Delete
          </Button>
        </div>
      </StyledDiv>
    </Modal>
  );
};

export default DeleteProjectModal;
