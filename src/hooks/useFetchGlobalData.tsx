import React from "react";

import { getEthnicity } from "@/http/get-ethnicity";
import { getOrganizationList } from "@/http/get-organization-list";
import { getProjectList } from "@/http/get-project-list";
import { getProvince } from "@/http/get-province-list";
import { getServicesList } from "@/http/get-services-list";
import { useGlobalStore } from "@/store/useGlobalConfigStore";
import { getApiResponseErrorToast } from "@/utils/get-api-response-error-toast";

const useFetchGlobalData = () => {
  const { setGlobalLoader, setGlobalData } = useGlobalStore();

  const fetchGlobalData = React.useCallback(() => {
    setGlobalLoader(true);
    Promise.all([
      getProvince(),
      getOrganizationList(),
      getEthnicity(),
      getServicesList(),
      getProjectList(),
    ])
      .then((res) => {
        const [
          provinceResponse,
          organizationReponse,
          ethnicityResponse,
          servicesResponse,
          projectResponse,
        ] = res || [];

        const provinceData = provinceResponse?.data?.data || [];
        const organizationData = organizationReponse?.data?.data || [];
        const ethnicityData = ethnicityResponse?.data?.data || [];
        const servicesData = servicesResponse?.data?.data || [];
        const projectData = projectResponse?.data?.data || [];

        setGlobalData({
          provinceData,
          organizationData,
          ethnicityData,
          servicesData,
          projectData,
        });
        setGlobalLoader(false);
      })
      .catch((err) => {
        getApiResponseErrorToast(err);
        setGlobalLoader(false);
      });
  }, [setGlobalData, setGlobalLoader]);

  return { fetchGlobalData };
};

export default useFetchGlobalData;
