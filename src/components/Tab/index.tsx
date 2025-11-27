"use client";
import React from "react";

import clsx from "clsx";
import { useSearchParams } from "next/navigation";

import useUpdateParams from "@/hooks/useUpdateParams";

import { StyledDiv } from "./style";
import { useTabStore } from "./tab.store";

export type Tab = {
  id: string;
  label: string;
  content: React.ReactNode;
  hide?: boolean;
};

type Props<T extends readonly Tab[]> = {
  tabs: T;
  defaultSelectedTab?: T[number]["id"];
  pushToUrl?: boolean;
  selectedProgramTab?: string;
};

const Tab = <T extends readonly Tab[]>({
  tabs,
  defaultSelectedTab,
  pushToUrl = false,
  selectedProgramTab,
}: Props<T>) => {
  const { shallowUpdateQueryParams } = useUpdateParams();
  const searchParams = useSearchParams();
  const { setActiveTabValue } = useTabStore();

  const selectedTab = searchParams.get("tab");

  const [activeTab, setActiveTab] = React.useState(
    selectedTab || defaultSelectedTab || tabs[0].id
  );

  React.useEffect(() => {
    if (!selectedProgramTab || selectedProgramTab === "all-program") {
      return;
    }

    setActiveTab(selectedProgramTab);
  }, [selectedProgramTab]);

  React.useEffect(() => {
    setActiveTabValue(activeTab);
  }, [activeTab, setActiveTabValue]);

  const handleOnTabClick = (tab: Tab) => {
    setActiveTab(tab.id);

    if (pushToUrl) {
      shallowUpdateQueryParams("tab", tab.id);
    }
  };

  return (
    <StyledDiv className="tab-wrapper">
      <div className={clsx("tab-header-list")}>
        {tabs.map((tab) => {
          if (tab.hide) return;
          return (
            <div
              key={tab.id}
              onClick={() => handleOnTabClick(tab)}
              className={clsx({ active: activeTab === tab.id }, "tab-header")}
            >
              {tab.label}
            </div>
          );
        })}
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
