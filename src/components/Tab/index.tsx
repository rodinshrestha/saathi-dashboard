"use client";
import React from "react";

import clsx from "clsx";

import { getSelectedTab } from "@/utils/get-selected-tab";

import { StyledDiv } from "./style";

export type Tab = {
  id: string;
  label: string;
  content: React.ReactNode;
};

type Props = {
  tabs: Array<Tab>;
  defaultSelectedTab?: string;
};

const Tab = ({ tabs, defaultSelectedTab }: Props) => {
  const [activeTab, setActiveTab] = React.useState(
    getSelectedTab({ tabs, selectedTab: defaultSelectedTab })
  );

  return (
    <StyledDiv className="tab-wrapper">
      <div className="tab-header-list">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={clsx({ active: activeTab === tab.id }, "tab-header")}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className="tab-pannel-wrapper">
        {tabs.map(
          (tab) =>
            tab.id === activeTab && (
              <div className="tab-pannel" key={tab.id}>
                {tab.content}
              </div>
            )
        )}
      </div>
    </StyledDiv>
  );
};

export default Tab;
