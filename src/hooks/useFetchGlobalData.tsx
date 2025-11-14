import React from "react";

import { getProvince } from "@/http/get-province-list";
import { useGlobalStore } from "@/store/useGlobalConfigStore";
import { getApiResponseErrorToast } from "@/utils/get-api-response-error-toast";

const useFetchGlobalData = () => {
  const { setGlobalLoader, setGlobalData } = useGlobalStore();

  const fetchGlobalData = React.useCallback(() => {
    setGlobalLoader(true);
    Promise.all([getProvince()])
      .then((res) => {
        const [provinceResponse] = res || [];

        const provinceData = provinceResponse?.data?.data || [];

        setGlobalData({ provinceData });
        setGlobalLoader(false);
      })
      .catch((err) => {
        getApiResponseErrorToast(err);
      })
      .finally(() => {
        setGlobalLoader(false);
      });
  }, [setGlobalData, setGlobalLoader]);

  return { fetchGlobalData };
};

export default useFetchGlobalData;
