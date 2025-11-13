import React from "react";

import { GraduationCap, House, UsersRound } from "lucide-react";

import MiniCard from "@/components/MiniCard";

import { StyledDiv } from "./style";

const DashboardProtectionTab = () => {
  return (
    <StyledDiv>
      <div className="protection-tab-card-wrapper">
        <MiniCard
          label="No. of Children Intake"
          value={173}
          icon={<UsersRound />}
          variant="yellow"
        />
        <MiniCard
          label="Children Program - Safer Home"
          value={89}
          icon={<House />}
          variant="yellow"
        />
        <MiniCard
          label="Youth Settlement Program"
          value={45}
          icon={<GraduationCap />}
          variant="yellow"
        />
      </div>
    </StyledDiv>
  );
};

export default DashboardProtectionTab;
