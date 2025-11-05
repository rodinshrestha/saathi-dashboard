import { FormikProps } from "formik";

export const setFormikResponseError = <T extends object>(
  formik: FormikProps<T>,
  errorObj: { [key: string]: string }
) => {
  if (!Object.keys(errorObj).length) {
    return;
  }

  for (const [key, value] of Object.entries(errorObj)) {
    formik.setFieldError(key, value);
  }
};
