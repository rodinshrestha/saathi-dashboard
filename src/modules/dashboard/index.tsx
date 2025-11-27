"use client";
import React from "react";

import { useSearchParams } from "next/navigation";

import ModuleSectionWrapper from "@/components/ModuleSectionWrapper";
import { DashboardFilterType } from "@/types/dashboard-filter.types";

import DashboardFilter from "./components/DashboardFilter";
import DashboardTab from "./components/DashboardTab";
import { StyledDiv } from "./style";

const Dasbhoard = () => {
  const searchParams = useSearchParams();

  const [selectedProgramTab, setSelectedProgramTab] =
    React.useState("all-program");

  const [dashboardFilter, setDashboardFilter] =
    React.useState<DashboardFilterType>({
      start_date: searchParams.get("start_date") || null,
      end_date: searchParams.get("end_date") || null,
      province_id: searchParams.get("province_id") || "",
      program_id: searchParams.get("program") || "all-program",
      project_id: searchParams.get("project_id") || "",
    });

  return (
    <StyledDiv>
      <ModuleSectionWrapper
        title="Dashboard"
        titleHelperText="Program Data Overview"
      />

      <DashboardFilter
        dashboardFilter={dashboardFilter}
        setDashboardFilter={setDashboardFilter}
        setSelectedProgramTab={setSelectedProgramTab}
      />

      <DashboardTab selectedProgramTab={selectedProgramTab} />
    </StyledDiv>
  );
};

export default Dasbhoard;
