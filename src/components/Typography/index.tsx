"use client";
import React from "react";

import clsx from "clsx";
import { CSSProperties } from "styled-components";

import { H1, H2, H3, H4, H5, H6, Paragraph, Span } from "./style";

export type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2";

type Props = {
  children: React.ReactNode;
  as: Variant;
  style?: CSSProperties;
} & React.HTMLAttributes<HTMLElement>;

const Typography = ({
  as = "p",
  children,
  style,
  className,
  ...props
}: Props) => {
  if (!as) {
    throw new Error("as cannot be empty");
  }

  if (!children) return null;

  let Element;
  if (as === "h1") Element = H1;
  else if (as === "h2") Element = H2;
  else if (as === "h3") Element = H3;
  else if (as === "h4") Element = H4;
  else if (as === "h5") Element = H5;
  else if (as === "h6") Element = H6;
  else if (as === "span") Element = Span;
  else Element = Paragraph;

  return (
    <Element
      style={style}
      {...props}
      className={clsx({ [as.toLowerCase()]: as }, className)}
    >
      {children}
    </Element>
  );
};

export default Typography;
