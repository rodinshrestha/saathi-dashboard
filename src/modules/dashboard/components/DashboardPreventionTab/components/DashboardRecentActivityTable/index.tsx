import Table from "@/components/Table";

import { RecentActivityTableColumn } from "./recent-activity.table.columns";

type Props = {
  tableData: Array<{ [key: string]: string }>;
  isLoading?: boolean;
};

const DashboardRecentActivityTable = ({ tableData, isLoading }: Props) => {
  return (
    <Table
      columns={RecentActivityTableColumn()}
      data={tableData}
      tableTitle="Recent Activities"
      showBoxShadow
      isLoading={isLoading}
    />
  );
};

export default DashboardRecentActivityTable;
