import { MetrixDataType } from "@/types/metrix-data.types";

type Funder = {
  /** Project ID */
  project_id: string;
  /** Project title */
  project_title: string;
  /** Program name */
  program: string;
  /** Province name */
  province: string;
  /** Comma-separated funders */
  funders: string;
};

export type DashboardPreventionDataType = {
  /** KPI metrics */
  kpis: {
    /** Total number of projects */
    project_count: number;
    /** Total number of provinces covered */
    provinces_covered: number;
    /** Total attendance count */
    attendance_count: number;
  };
  /** Attendance per project */
  attendance_per_project: Array<MetrixDataType>;
  /** Participation by organization */
  participation_by_organization: Array<MetrixDataType>;
  /** Recent activities */
  recent_activities: Array<{ [key: string]: string }>;
  /** Funders for each project */
  funders: Funder[];
};

export type DashboardPreventionType = {
  data: {
    prevention: DashboardPreventionDataType;
  };
};
