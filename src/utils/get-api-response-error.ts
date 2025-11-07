import { ApiErrorResponseType } from "@/types/api-error-response.types";

/**
 * iterate the error from the api response
 * and convert it into the object i.e key and value pairs
 */
export const getApiResponseErrorObj = (
  err: unknown
): Record<string, string> => {
  const errors = (err as ApiErrorResponseType)?.response?.data?.data || {};

  if (!errors || Object.keys(errors).length === 0) {
    return {};
  }

  return Object.entries(errors).reduce(
    (acc, [key, value]) => {
      if (Array.isArray(value) && value.length) {
        return { ...acc, [key]: value[0] };
      }
      return acc;
    },
    {} as Record<string, string>
  );
};
