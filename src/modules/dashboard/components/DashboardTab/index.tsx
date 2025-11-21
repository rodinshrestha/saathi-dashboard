"use client";
import Tab from "@/components/Tab";
import { SelectValueTypes } from "@/types/select.types";

import DashboardPreventionTab from "../DashboardPreventionTab";
import DashboardProsecutionTab from "../DashboardProsecutionTab";
import DashboardProtectionTab from "../DashboardProtectionTab";
import DashboardResponseTab from "../DashboardResponseTab";

import { StyledDiv } from "./style";

type Props = {
  selectedProgram: SelectValueTypes;
};

const DashboardTab = ({ selectedProgram }: Props) => {
  const tabList = [
    {
      id: "prevention",
      label: "Prevention",
      content: <DashboardPreventionTab />,
    },
    {
      id: "prosecution",
      label: "Prosecution",
      content: <DashboardProsecutionTab />,
    },
    {
      id: "response",
      label: "Response",
      content: <DashboardResponseTab />,
    },

    {
      id: "protection",
      label: "Protection",
      content: <DashboardProtectionTab />,
    },
  ] as const;

  return (
    <StyledDiv className="dashboard-tab-wrapper">
      <Tab
        tabs={tabList}
        selectedProgram={selectedProgram as string}
        pushToUrl
      />
    </StyledDiv>
  );
};

export default DashboardTab;
