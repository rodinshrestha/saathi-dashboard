import { MetrixDataType } from "@/types/metrix-data.types";

export type DashboardProsecutionDataType = {
  /** KPI metrics */
  kpis: {
    /** Total number of projects */
    project_count: number;
    /** Number of provinces covered */
    provinces_covered: number;
    /** Total attendance count */
    attendance_count: number;
  };

  /** Attendance per project */
  attendance_per_project: Array<MetrixDataType>;
  /** Participation by organization */
  participation_by_organization: Array<MetrixDataType>;
  /** List of recent activities */
  recent_activities: Array<{ [key: string]: string }>;
};

export type DashboardProsecutionType = {
  data: {
    prosecution: DashboardProsecutionDataType;
  };
};
