import React from "react";

import Tab from "@/components/Tab";

import DashboardPreventionTab from "../DashboardPreventionTab";
import DashboardProsecutionTab from "../DashboardProsecutionTab";
import DashboardProtectionTab from "../DashboardProtectionTab";
import DashboardResponseTab from "../DashboardResponseTab";

import { StyledDiv } from "./style";

const DashboardTab = () => {
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
  ];

  return (
    <StyledDiv className="dashboard-tab-wrapper">
      <Tab tabs={tabList} />
    </StyledDiv>
  );
};

export default DashboardTab;
