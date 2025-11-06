export type ProvinceListType = {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
};

export type DistrictListType = {
  id: number;
  province_id: string;
  name: string;
  created_at: string;
  updated_at: string;
};

export type ProgramListType = {
  id: number;
  name: string;
  code: string;
  description: string;
  is_active: boolean;
};

export type ProjectListType = {
  project_id: number;
  program_id: string;
  province_id: string;
  district_id: string;
  project_title: string;
  event_title: string;
  funders?: Array<{ name: string }>;
  start_date: string;
  end_date: string;
};
