import { toast } from "react-toastify";

import { ApiErrorResponseType } from "@/types/api-error-response.types";

import { getApiResponseErrorObj } from "./get-api-response-error";

/**
 * Loops the error from the api response
 * shows in the toast
 */
export const getApiResponseErrorToast = (err: ApiErrorResponseType) => {
  const { message = "Something went wrong" } = err?.response?.data || {};

  const errorObj = getApiResponseErrorObj(err);

  if (Object.keys(errorObj).length === 0) {
    toast.error(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    return;
  }

  for (const [, value] of Object.entries(errorObj)) {
    toast.error(value, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }
};
