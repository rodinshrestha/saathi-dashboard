import React from "react";

import { AxiosResponse } from "axios";
import { useSearchParams } from "next/navigation";

import { PENDING, REJECTED, RESOLVED } from "@/constant/loading.state";
import { PER_PAGE } from "@/constant/pagination.constant";
import { authAxios } from "@/utils/axios";
import { getApiResponseErrorToast } from "@/utils/get-api-response-error-toast";

import { ProjectDataResponseType } from "../projects.types";
import { useProjectStore } from "../store/useProjectStore";

const getProjectApiURl = (
  page: number,
  perPage: number,
  searchTerm?: string | null
) => {
  if (searchTerm) {
    return `/projects?page=${page}&per_page=${perPage}&q=${searchTerm}`;
  }

  return `/projects?page=${page}&per_page=${perPage}`;
};

const useFetchProjectData = () => {
  const { setProjectData, setProjectDataLoader } = useProjectStore();
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const perPage = Number(searchParams.get("per_page")) || PER_PAGE;
  const searchterm = searchParams.get("search");

  const fetchProjectData = React.useCallback(async () => {
    setProjectDataLoader(PENDING);
    return authAxios
      .get<ProjectDataResponseType>(getProjectApiURl(page, perPage, searchterm))
      .then((res: AxiosResponse<ProjectDataResponseType>) => {
        setProjectData(res?.data || []);
        setProjectDataLoader(RESOLVED);
      })
      .catch((err) => {
        getApiResponseErrorToast(err);
        setProjectDataLoader(REJECTED);
      });
  }, [setProjectData, setProjectDataLoader, page, perPage, searchterm]);

  return {
    fetchProjectData,
  };
};

export default useFetchProjectData;
