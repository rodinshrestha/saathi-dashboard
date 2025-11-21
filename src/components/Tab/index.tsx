"use client";
import React from "react";

import clsx from "clsx";
import { useSearchParams } from "next/navigation";

import useUpdateParams from "@/hooks/useUpdateParams";

import { StyledDiv } from "./style";

export type Tab = {
  id: string;
  label: string;
  content: React.ReactNode;
};

type Props<T extends readonly Tab[]> = {
  tabs: T;
  defaultSelectedTab?: T[number]["id"];
  pushToUrl?: boolean;
  selectedProgram?: string;
};

const Tab = <T extends readonly Tab[]>({
  tabs,
  defaultSelectedTab,
  pushToUrl = false,
  selectedProgram = "",
}: Props<T>) => {
  const searchParams = useSearchParams();

  const selectedTab = searchParams.get("tab");

  const [activeTab, setActiveTab] = React.useState(
    selectedTab || defaultSelectedTab || tabs[0].id
  );

  const { updateQueryParams } = useUpdateParams();

  const handleOnTabClick = (tab: Tab, disabled: boolean) => {
    // if (disabled) return;

    setActiveTab(tab.id);

    if (pushToUrl) {
      // updateQueryParams("tab", tab.id);
    }
  };

  const getDisableTab = (selectedProgram: string, id: string) => {
    if (!selectedProgram || selectedProgram === "all-program") {
      return false;
    }
    return id !== selectedProgram;
  };

  return (
    <StyledDiv className="tab-wrapper">
      <div className={clsx("tab-header-list")}>
        {tabs.map((tab) => {
          const disabled = getDisableTab(selectedProgram, tab.id);
          return (
            <div
              key={tab.id}
              onClick={() => handleOnTabClick(tab, disabled)}
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
