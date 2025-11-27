"use client";
import Tab from "@/components/Tab";

import DashboardPreventionTab from "../DashboardPreventionTab";
import DashboardProsecutionTab from "../DashboardProsecutionTab";
import DashboardProtectionTab from "../DashboardProtectionTab";
import DashboardResponseTab from "../DashboardResponseTab";

import { StyledDiv } from "./style";

const helperFn = (selectedProgramTab: string, key: string) => {
  if (selectedProgramTab === "all-program") {
    return false;
  }

  if (selectedProgramTab !== key) {
    return true;
  }

  return false;
};

type Props = {
  selectedProgramTab: string;
};

const DashboardTab = ({ selectedProgramTab }: Props) => {
  const tabList = [
    {
      id: "prevention",
      label: "Prevention",
      content: <DashboardPreventionTab />,
      hide: helperFn(selectedProgramTab, "prevention"),
    },
    {
      id: "prosecution",
      label: "Prosecution",
      content: <DashboardProsecutionTab />,
      hide: helperFn(selectedProgramTab, "prosecution"),
    },
    {
      id: "response",
      label: "Response",
      content: <DashboardResponseTab />,
      hide: helperFn(selectedProgramTab, "response"),
    },

    {
      id: "protection",
      label: "Protection",
      content: <DashboardProtectionTab />,
      hide: helperFn(selectedProgramTab, "protection"),
    },
  ] as const;

  return (
    <StyledDiv className="dashboard-tab-wrapper">
      <Tab tabs={tabList} pushToUrl selectedProgramTab={selectedProgramTab} />
    </StyledDiv>
  );
};

export default DashboardTab;
