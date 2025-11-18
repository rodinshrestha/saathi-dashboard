"use client";

import { FolderOpen, MapPin, UsersRound } from "lucide-react";
import useSWR from "swr";

import BarChart from "@/components/BarChart";
import BarGraph from "@/components/BarGraph";
import MiniCard from "@/components/MiniCard";
import { getMetrixData } from "@/utils/get-metrix-data";

import DashboardFundedByTable from "./components/DashboardFundedByTable";
import DashboardRecentActivityTable from "./components/DashboardRecentActivityTable";
import { StyledDiv } from "./style";

const DashboardPreventionTab = () => {
  const { data, isLoading } = useSWR("/dashboard");

  const { prevention } = data?.data || {};

  return (
    <StyledDiv>
      <div className="prevention-tab-card-wrapper">
        <MiniCard
          label="No. of Projects"
          value={prevention?.kpis?.project_count}
          icon={<FolderOpen />}
          isLoading={isLoading}
        />
        <MiniCard
          label="Province Covered"
          value={prevention?.kpis?.provinces_covered}
          icon={<MapPin />}
          isLoading={isLoading}
        />
        <MiniCard
          label="Attendance Count"
          value={prevention?.kpis?.provinces_covered}
          icon={<UsersRound />}
          isLoading={isLoading}
        />
      </div>
      <BarChart
        label="Attendance per Project"
        data={getMetrixData(prevention?.attendance_per_project || [])}
        isLoading={isLoading}
      />
      <BarGraph
        label="Participation by Organization"
        data={getMetrixData(prevention?.participation_by_organization || [])}
        isLoading={isLoading}
      />
      <DashboardRecentActivityTable
        tableData={prevention?.recent_activities || []}
        isLoading={isLoading}
      />
      <DashboardFundedByTable
        tableData={prevention?.funders || []}
        isLoading={isLoading}
      />
    </StyledDiv>
  );
};

export default DashboardPreventionTab;
