import React from "react";

import Table from "@/components/Table";

import { FundedTableColumn } from "./funded.table.column";

const tableData = [
  {
    project_title: "Community Awareness Program 2024",
    program: "Prevention",
    province: " Koshi Province",
    funded_by: "UNFPA UN WOMEN",
  },
  {
    project_title: "Community Awareness Program 2025",
    program: "Prevention",
    province: " Koshi Province",
    funded_by: "UNFPA UN WOMEN",
  },
  {
    project_title: "Community Awareness Program 2026",
    program: "Prevention",
    province: " Koshi Province",
    funded_by: "UNFPA UN WOMEN",
  },
];

const DashboardFundedByTable = () => {
  return (
    <Table
      columns={FundedTableColumn()}
      data={tableData}
      showBoxShadow
      tableTitle="Funded by"
    />
  );
};

export default DashboardFundedByTable;
