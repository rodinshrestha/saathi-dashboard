import React from "react";

type Props = {
  children: React.ReactNode;
};

const Col = ({ children }: Props) => {
  return <div className="col">{children}</div>;
};

export default Col;
