import React from "react";

import { getApiResponseErrorToast } from "@/utils/get-api-response-error-toast";

import { getProgram } from "../http/get-program";
import { getProvince } from "../http/get-province";
import { useProjectStore } from "../store/useProjectStore";

const useFetchProjectFormData = () => {
  const { setFormData, setLoader } = useProjectStore();

  const fetchFormData = React.useCallback(() => {
    setLoader(true);
    Promise.all([getProvince(), getProgram()])
      .then((res) => {
        const [provinceRes, programRes] = res || [];

        const provinceData = provinceRes?.data?.data || [];
        const programData = programRes?.data?.data || [];

        setFormData({ provinceData, programData });
      })
      .catch((err) => {
        getApiResponseErrorToast(err);
      })
      .finally(() => {
        setLoader(false);
      });
  }, [setFormData, setLoader]);

  return {
    fetchFormData,
  };
};

export default useFetchProjectFormData;
