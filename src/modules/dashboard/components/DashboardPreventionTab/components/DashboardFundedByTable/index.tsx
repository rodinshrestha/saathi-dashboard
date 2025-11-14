import React from "react";

import Table from "@/components/Table";

import { FundedTableColumn } from "./funded.table.column";

type Props = {
  tableData: Array<{ [keyof: string]: string }>;
};

const DashboardFundedByTable = ({ tableData }: Props) => {
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
