import React from "react";

import Table from "@/components/Table";

import { FundedTableColumn } from "./funded.table.column";

type Props = {
  tableData: Array<{ [keyof: string]: string }>;
  isLoading?: boolean;
};

const DashboardFundedByTable = ({ tableData, isLoading }: Props) => {
  return (
    <Table
      columns={FundedTableColumn()}
      data={tableData}
      showBoxShadow
      tableTitle="Funded by"
      isLoading={isLoading}
    />
  );
};

export default DashboardFundedByTable;
