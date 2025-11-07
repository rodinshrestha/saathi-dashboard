import React from "react";

import { AxiosResponse } from "axios";

import { PENDING, REJECTED, RESOLVED } from "@/constant/loading.state";
import { authAxios } from "@/utils/axios";
import { getApiResponseErrorToast } from "@/utils/get-api-response-error-toast";

import { ProjectDataResponseType } from "../projects.types";
import { useProjectStore } from "../store/useProjectStore";

const useFetchProjectData = () => {
  const { setProjectData, setProjectDataLoader } = useProjectStore();

  const fetchProjectData = React.useCallback(async () => {
    setProjectDataLoader(PENDING);
    return authAxios
      .get<ProjectDataResponseType>("/projects")
      .then((res: AxiosResponse<ProjectDataResponseType>) => {
        setProjectData(res?.data || []);
        setProjectDataLoader(RESOLVED);
      })
      .catch((err) => {
        getApiResponseErrorToast(err);
        setProjectDataLoader(REJECTED);
      });
  }, [setProjectData, setProjectDataLoader]);

  return {
    fetchProjectData,
  };
};

export default useFetchProjectData;
