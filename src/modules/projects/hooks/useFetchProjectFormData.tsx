import React from "react";

import { getApiResponseErrorToast } from "@/utils/get-api-response-error-toast";

import { getProgram } from "../http/get-program";
import { useProjectStore } from "../store/useProjectStore";

const useFetchProjectFormData = () => {
  const { setFormData, setLoader } = useProjectStore();

  const fetchFormData = React.useCallback(() => {
    setLoader(true);
    getProgram()
      .then((res) => {
        const programData = res?.data?.data || [];

        setFormData({ programData });
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
