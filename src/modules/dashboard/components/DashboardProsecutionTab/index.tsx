import { FolderOpen, MapPin, UsersRound } from "lucide-react";

import MiniCard from "@/components/MiniCard";

import { StyledDiv } from "./style";

const DashboardProsecutionTab = () => {
  return (
    <StyledDiv>
      <div className="prosecution-tab-card-wrapper">
        <MiniCard
          label="No. of Projects"
          value={8}
          icon={<FolderOpen />}
          variant="blue"
        />
        <MiniCard
          label="Province Covered"
          value={6}
          icon={<MapPin />}
          variant="blue"
        />
        <MiniCard
          label="Attendance Count"
          value={405}
          icon={<UsersRound />}
          variant="blue"
        />
      </div>
    </StyledDiv>
  );
};

export default DashboardProsecutionTab;
