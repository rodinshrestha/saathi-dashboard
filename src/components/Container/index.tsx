import React from "react";

import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  fluid?: boolean;
  className?: string;
};

const Container = ({ fluid, className, children }: Props) => {
  return (
    <div
      className={clsx(
        { container: !fluid, "container-fluid": fluid },
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Container;
