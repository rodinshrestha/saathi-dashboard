import React from "react";

import { getEthnicity } from "@/http/get-ethnicity";
import { getOrganizationList } from "@/http/get-organization-list";
import { getProvince } from "@/http/get-province-list";
import { useGlobalStore } from "@/store/useGlobalConfigStore";
import { getApiResponseErrorToast } from "@/utils/get-api-response-error-toast";

const useFetchGlobalData = () => {
  const { setGlobalLoader, setGlobalData } = useGlobalStore();

  const fetchGlobalData = React.useCallback(() => {
    setGlobalLoader(true);
    Promise.all([getProvince(), getOrganizationList(), getEthnicity()])
      .then((res) => {
        const [provinceResponse, organizationReponse, ethnicityResponse] =
          res || [];

        const provinceData = provinceResponse?.data?.data || [];
        const organizationData = organizationReponse?.data?.data || [];
        const ethnicityData = ethnicityResponse?.data?.data || [];

        setGlobalData({ provinceData, organizationData, ethnicityData });
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
