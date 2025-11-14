"use client";
import React from "react";

import useFetchGlobalData from "@/hooks/useFetchGlobalData";

type Props = {
  children: React.ReactNode;
};

const BaseProvider = ({ children }: Props) => {
  const { fetchGlobalData } = useFetchGlobalData();
  React.useEffect(() => {
    fetchGlobalData();
  }, [fetchGlobalData]);

  return <React.Fragment>{children}</React.Fragment>;
};

export default BaseProvider;
