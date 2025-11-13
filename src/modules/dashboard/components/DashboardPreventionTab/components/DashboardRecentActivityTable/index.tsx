import React from "react";

import Table from "@/components/Table";

import { RecentActivityTableColumn } from "./recent-activity.table.columns";

const tableData = [
  {
    project_name: "Community Awareness Program",
    province: "Province 1",
    district: "Morang",
    date: "2024-03-15",
    organization: "I/NGOs, CSOs",
    attendance: 120,
  },
  {
    project_name: "Violence Prevention Workshop",
    province: "Province 2",
    district: "Dhanusha",
    date: "2024-03-18",
    organization: "Local-level govt. Staff",
    attendance: 95,
  },
  {
    project_name: "Youth Engagement Session",
    province: "Province 3",
    district: "Kathmandu",
    date: "2024-03-20",
    organization: "UNFPA and Implementing Partners staffs",
    attendance: 145,
  },
];

const DashboardRecentActivityTable = () => {
  return (
    <Table
      columns={RecentActivityTableColumn()}
      data={tableData}
      tableTitle="Recent Activities"
      showBoxShadow
    />
  );
};

export default DashboardRecentActivityTable;
