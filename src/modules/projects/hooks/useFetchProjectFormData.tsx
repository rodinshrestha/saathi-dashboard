import React from "react";

import { getApiResponseErrorToast } from "@/utils/get-api-response-error-toast";

import { getProgram } from "../http/get-program";
import { getProvince } from "../http/get-province";
import { useProjectFormDataStore } from "../store/useProjectFormDataStore";
import { convertProgramList } from "../utils/convert-program-list";
import { convertProvinceList } from "../utils/convert-province-list";

const useFetchProjectFormData = () => {
  const { setterStore, setLoader, provinceList, programList, loader } =
    useProjectFormDataStore();

  React.useEffect(() => {
    setLoader(true);
    Promise.all([getProvince(), getProgram()])
      .then((res) => {
        console.log(res, "@@@@");
        const [provinceRes, programRes] = res || [];

        const provinceList = convertProvinceList(provinceRes?.data || []);

        const programList = convertProgramList(programRes?.data || []);

        setterStore({ provinceList, programList });
      })
      .catch((err) => {
        getApiResponseErrorToast(err);
      })
      .finally(() => {
        setLoader(false);
      });
  }, [setterStore, setLoader]);

  return {
    loader,
    provinceList,
    programList,
  };
};

export default useFetchProjectFormData;
