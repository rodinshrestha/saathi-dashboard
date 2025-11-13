import React from "react";

import { Clock, FileText, House } from "lucide-react";

import MiniCard from "@/components/MiniCard";

import { StyledDiv } from "./style";

const DashboardResponseTab = () => {
  return (
    <StyledDiv>
      <div className="response-tab-card-wrapper">
        <MiniCard
          label="No. of Registrations"
          value={223}
          icon={<FileText />}
          variant="orange"
        />
        <MiniCard
          label="Total Number of Shelters"
          value={28}
          icon={<House />}
          variant="orange"
        />
        <MiniCard
          label="UNFPA Supported Shelters"
          value={12}
          icon={<House />}
          variant="orange"
        />
        <MiniCard
          label="Avg. Duration of Stay(days)"
          value={45}
          icon={<Clock />}
          variant="orange"
        />
      </div>
    </StyledDiv>
  );
};

export default DashboardResponseTab;
