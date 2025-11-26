import React from "react";

import { useSearchParams } from "next/navigation";

import { IDLE, PENDING, REJECTED, RESOLVED } from "@/constant/loading.state";
import { PER_PAGE } from "@/constant/pagination.constant";
import { useDebuggerStore } from "@/store/useDebuggerStore";
import { LoadingType } from "@/types/loading.types";
import { authAxios } from "@/utils/axios";
import { getApiResponseErrorToast } from "@/utils/get-api-response-error-toast";

import { RegistrationListResponseType } from "../registration-list.types";

const getRegistrationListUrl = (
  page: number,
  perPage: number,
  searchTerm?: string | null
) => {
  if (searchTerm) {
    return `/survivors?page=${page}&per_page=${perPage}&q=${searchTerm}`;
  }

  return `/survivors?page=${page}&per_page=${perPage}`;
};

const useFetchRegistration = () => {
  const { tablePerPage } = useDebuggerStore();

  const [status, setStatus] = React.useState<LoadingType>(IDLE);
  const [registrationList, setRegistrationList] =
    React.useState<RegistrationListResponseType | null>(null);
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const perPage =
    Number(searchParams.get("per_page")) || tablePerPage || PER_PAGE;
  const searchterm = searchParams.get("search");

  React.useEffect(() => {
    setStatus(PENDING);
    authAxios<RegistrationListResponseType>(
      getRegistrationListUrl(page, perPage, searchterm)
    )
      .then((res) => {
        setRegistrationList(res?.data || []);
        setStatus(RESOLVED);
      })
      .catch((err) => {
        getApiResponseErrorToast(err);
        setStatus(REJECTED);
      });
  }, [page, perPage, searchterm]);

  return {
    registrationList,
    isLoading: status === IDLE || status === PENDING,
    isError: status === REJECTED,
  };
};

export default useFetchRegistration;
