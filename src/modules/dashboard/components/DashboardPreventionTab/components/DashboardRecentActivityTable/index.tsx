import Table from "@/components/Table";

import { RecentActivityTableColumn } from "./recent-activity.table.columns";

type Props = {
  tableData: Array<{ [key: string]: string }>;
};

const DashboardRecentActivityTable = ({ tableData }: Props) => {
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
