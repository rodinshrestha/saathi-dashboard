"use client";
import React from "react";

import { useFormik } from "formik";
import { useRouter } from "next/navigation";

import Button from "@/components/Button";
import ImageWithFallback from "@/components/ImageWithFallback";
import InputField from "@/components/InputField";
import Typography from "@/components/Typography";
import { ACCESS_TOKEN } from "@/constant/token.constant";
import useToaster from "@/hooks/useToaster";
import { authAxios } from "@/utils/axios";
import { setCookie } from "@/utils/cookie";

import { loginSchema } from "./login.schema";
import { StyledDiv } from "./style";

const LoginModule = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const { errorToast } = useToaster();
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "admin@saathi.com",
      password: "password",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      setIsLoading(true);
      authAxios
        .post("/login", { ...values })
        .then((res) => {
          const { token = "" } = res?.data?.data || {};
          if (!token) {
            errorToast("Token is empty. Check API");
            return;
          }

          setCookie(ACCESS_TOKEN, token);
          router.push("/dashboard");
        })
        .catch(() => {
          errorToast("Failed");
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
  });

  return (
    <StyledDiv>
      <div className="login-wrapper">
        <div className="login-logo-wrapper">
          <ImageWithFallback src="/vercel.svg" alt="sathi-logo" fill />
        </div>

        <div className="login-title-wrapper">
          <Typography as="h1">Saathi Data System</Typography>
          <Typography as="p">
            Strengthening Data Systems for Safer Communities
          </Typography>
        </div>

        <form className="login-form-wrapper" onSubmit={formik.handleSubmit}>
          <InputField
            name="email"
            label="Email"
            type="text"
            placeholder="Enter your email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.email}
            touched={formik.touched.email}
          />
          <InputField
            name="password"
            label="Password"
            type="password"
            placeholder="*****"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.password}
            touched={formik.touched.password}
          />

          <Button
            size="full-width"
            type="submit"
            disabled={!formik.isValid || isLoading}
            loading={isLoading}
          >
            Sign In
          </Button>
        </form>
      </div>
    </StyledDiv>
  );
};

export default LoginModule;
