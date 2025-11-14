"use client";

import { FolderOpen, MapPin, UsersRound } from "lucide-react";
import useSWR from "swr";

import BarChart from "@/components/BarChart";
import BarGraph from "@/components/BarGraph";
import MiniCard from "@/components/MiniCard";
import { getBarChartData } from "@/utils/get-bar-chart-data";
import { getBarGraphData } from "@/utils/get-bar-graph-data";

import DashboardFundedByTable from "./components/DashboardFundedByTable";
import DashboardRecentActivityTable from "./components/DashboardRecentActivityTable";
import { StyledDiv } from "./style";

const DashboardPreventionTab = () => {
  const { data, isLoading } = useSWR("/dashboard");

  const { prevention } = data?.data || {};

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <StyledDiv>
      <div className="prevention-tab-card-wrapper">
        <MiniCard
          label="No. of Projects"
          value={prevention?.kpis?.project_count}
          icon={<FolderOpen />}
        />
        <MiniCard
          label="Province Covered"
          value={prevention?.kpis?.provinces_covered}
          icon={<MapPin />}
        />
        <MiniCard
          label="Attendance Count"
          value={prevention?.kpis?.provinces_covered}
          icon={<UsersRound />}
        />
      </div>
      <BarChart
        label="Attendance per Project"
        data={getBarChartData(prevention?.attendance_per_project || [])}
      />
      <BarGraph
        label="Participation by Organization"
        data={getBarGraphData(prevention?.participation_by_organization || [])}
      />
      <DashboardRecentActivityTable
        tableData={prevention?.recent_activities || []}
      />
      <DashboardFundedByTable tableData={prevention?.funders || []} />
    </StyledDiv>
  );
};

export default DashboardPreventionTab;
