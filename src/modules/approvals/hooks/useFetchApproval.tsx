import React from "react";

import { useSearchParams } from "next/navigation";

import { PENDING, REJECTED, RESOLVED } from "@/constant/loading.state";
import { PER_PAGE } from "@/constant/pagination.constant";
import { authAxios } from "@/utils/axios";
import { getApiResponseErrorToast } from "@/utils/get-api-response-error-toast";

import { useApprovalStore } from "../store/useApprovalStore";

const getApprovalURl = (
  page: number,
  perPage: number,
  searchTerm?: string | null
) => {
  if (searchTerm) {
    return `/registrations/pending?page=${page}&per_page=${perPage}&q=${searchTerm}`;
  }

  return `/registrations/pending?page=${page}&per_page=${perPage}`;
};

const useFetchApproval = () => {
  const { setApprovalLoader, setApprovalData } = useApprovalStore();
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const perPage = Number(searchParams.get("per_page")) || PER_PAGE;
  const searchterm = searchParams.get("search");

  const fetchApprovalList = React.useCallback(() => {
    setApprovalLoader(PENDING);
    return authAxios(getApprovalURl(page, perPage, searchterm))
      .then((res) => {
        // const { data = [] } = res?.data || {};
        setApprovalData(res?.data || null);
        setApprovalLoader(RESOLVED);
      })
      .catch((err) => {
        getApiResponseErrorToast(err);
        setApprovalLoader(REJECTED);
      });
  }, [setApprovalLoader, page, perPage, searchterm, setApprovalData]);

  return { fetchApprovalList };
};

export default useFetchApproval;
