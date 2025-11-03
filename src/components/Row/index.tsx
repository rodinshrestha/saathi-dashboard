import React from "react";

import clsx from "clsx";
import { CSSProperties } from "styled-components";

type Props = {
  children: React.ReactNode;
  id?: string;
  className?: string;
  style?: CSSProperties;
};

const Row = ({ children, className, id, style }: Props) => {
  return (
    <div className={clsx("row", className)} id={id} style={style}>
      {children}
    </div>
  );
};

export default Row;
