import React from "react";

import clsx from "clsx";
import Link from "next/link";

import { StyledButton, StyledLink } from "./style";

interface ButtonBaseProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "contained" | "outline";
  size?: "sm" | "md" | "full-width";
  className?: string;
}

interface NormalButtonProps extends ButtonBaseProps {
  disabled?: boolean;
  href?: never;
  newTab?: never;
}

interface LinkButtonProps extends ButtonBaseProps {
  href?: string;
  newTab?: boolean;
  disabled?: never;
}

const Button = ({
  children,
  variant = "contained",
  size = "sm",
  className,
  ...rest
}: NormalButtonProps | LinkButtonProps) => {
  if (rest.href) {
    return (
      <StyledLink className={clsx(variant, className, size, "btn")}>
        <Link href={rest.href} target={rest.newTab ? "_blank" : "_self"}>
          {children}
        </Link>
      </StyledLink>
    );
  }

  return (
    <StyledButton
      className={clsx(variant, size, className, "btn")}
      disabled={rest.disabled}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
