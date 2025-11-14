import { Tab } from "@/components/Tab";

type SelectedTabProps = {
  tabs: Array<Tab>;
  selectedTab?: string;
  activeTab?: string;
};

export const getSelectedTab = ({
  tabs,
  selectedTab,
  activeTab,
}: SelectedTabProps) => {
  if (Array.isArray(tabs) && !tabs.length) {
    throw Error("Tabs cannot be empty");
  }

  if (!selectedTab) {
    return tabs[0].id;
  }

  const selected = tabs.find((tab) => tab.id === selectedTab);

  if (selected) return selected.id;

  return activeTab;
};
