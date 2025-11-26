"use client";
import Tab from "@/components/Tab";
import { DashboardFilterType } from "@/types/dashboard-filter.types";

import DashboardPreventionTab from "../DashboardPreventionTab";
import DashboardProsecutionTab from "../DashboardProsecutionTab";
import DashboardProtectionTab from "../DashboardProtectionTab";
import DashboardResponseTab from "../DashboardResponseTab";

import { StyledDiv } from "./style";

type Props = {
  dashboardFilter: DashboardFilterType;
};

const DashboardTab = ({ dashboardFilter }: Props) => {
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
      <Tab tabs={tabList} pushToUrl />
    </StyledDiv>
  );
};

export default DashboardTab;
