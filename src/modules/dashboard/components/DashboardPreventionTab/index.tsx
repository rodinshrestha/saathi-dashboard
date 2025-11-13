import React from "react";

import { FolderOpen, MapPin, UsersRound } from "lucide-react";

import BarChart from "@/components/BarChart";
import BarGraph from "@/components/BarGraph";
import MiniCard from "@/components/MiniCard";

import DashboardFundedByTable from "./components/DashboardFundedByTable";
import DashboardRecentActivityTable from "./components/DashboardRecentActivityTable";
import { StyledDiv } from "./style";

const DashboardPreventionTab = () => {
  return (
    <StyledDiv>
      <div className="prevention-tab-card-wrapper">
        <MiniCard label="No. of Projects" value={24} icon={<FolderOpen />} />
        <MiniCard label="Province Covered" value={7} icon={<MapPin />} />
        <MiniCard label="Attendance Count" value={548} icon={<UsersRound />} />
      </div>
      <BarChart label="Attendance per Project" />
      <BarGraph label="Participation by Organization" />
      <DashboardRecentActivityTable />
      <DashboardFundedByTable />
    </StyledDiv>
  );
};

export default DashboardPreventionTab;
