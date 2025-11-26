"use client";
import React from "react";

import { FolderOpen, MapPin, UsersRound } from "lucide-react";
import useSWR from "swr";

import BarChart from "@/components/BarChart";
import BarGraph from "@/components/BarGraph";
import MiniCard from "@/components/MiniCard";
import { getMetrixData } from "@/utils/get-metrix-data";

import DashboardRecentActivityTable from "../DashboardPreventionTab/components/DashboardRecentActivityTable";

import { DashboardProsecutionType } from "./dashboard-prosecution.types";
import { StyledDiv } from "./style";

const DashboardProsecutionTab = () => {
  const { data, isLoading } = useSWR<DashboardProsecutionType>(
    "/dashboard?program=prosecution"
  );

  const { prosecution } = data?.data || {};

  return (
    <StyledDiv>
      <div className="prosecution-tab-card-wrapper">
        <MiniCard
          label="No. of Projects"
          value={prosecution?.kpis?.project_count}
          icon={<FolderOpen />}
          variant="blue"
          isLoading={isLoading}
        />
        <MiniCard
          label="Province Covered"
          value={prosecution?.kpis?.provinces_covered}
          icon={<MapPin />}
          variant="blue"
          isLoading={isLoading}
        />
        <MiniCard
          label="Attendance Count"
          value={prosecution?.kpis?.attendance_count}
          icon={<UsersRound />}
          variant="blue"
          isLoading={isLoading}
        />
      </div>

      <BarChart
        label="Attendance per Project"
        data={getMetrixData(prosecution?.attendance_per_project || [])}
        isLoading={isLoading}
      />

      <BarGraph
        label="Participation by Organization"
        data={getMetrixData(prosecution?.participation_by_organization || [])}
        isLoading={isLoading}
      />

      <DashboardRecentActivityTable
        tableData={prosecution?.recent_activities || []}
        isLoading={isLoading}
      />
    </StyledDiv>
  );
};

export default React.memo(DashboardProsecutionTab);
