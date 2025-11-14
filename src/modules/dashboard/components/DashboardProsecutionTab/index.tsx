"use client";
import { FolderOpen, MapPin, UsersRound } from "lucide-react";
import useSWR from "swr";

import BarChart from "@/components/BarChart";
import BarGraph from "@/components/BarGraph";
import MiniCard from "@/components/MiniCard";
import { getBarChartData } from "@/utils/get-bar-chart-data";
import { getBarGraphData } from "@/utils/get-bar-graph-data";

import DashboardRecentActivityTable from "../DashboardPreventionTab/components/DashboardRecentActivityTable";

import { StyledDiv } from "./style";

const DashboardProsecutionTab = () => {
  const { data, isLoading } = useSWR("/dashboard?program=prosecution");

  if (isLoading) {
    return <p>loading...</p>;
  }

  const { prosecution } = data?.data || {};

  return (
    <StyledDiv>
      <div className="prosecution-tab-card-wrapper">
        <MiniCard
          label="No. of Projects"
          value={prosecution?.kpis?.project_count}
          icon={<FolderOpen />}
          variant="blue"
        />
        <MiniCard
          label="Province Covered"
          value={prosecution?.kpis?.provinces_covered}
          icon={<MapPin />}
          variant="blue"
        />
        <MiniCard
          label="Attendance Count"
          value={prosecution?.kpis?.attendance_count}
          icon={<UsersRound />}
          variant="blue"
        />
      </div>

      <BarChart
        label="Attendance per Project"
        data={getBarChartData(prosecution?.attendance_per_project || [])}
      />

      <BarGraph
        label="Participation by Organization"
        data={getBarGraphData(prosecution?.participation_by_organization || [])}
      />

      <DashboardRecentActivityTable
        tableData={prosecution?.recent_activities || []}
      />
    </StyledDiv>
  );
};

export default DashboardProsecutionTab;
