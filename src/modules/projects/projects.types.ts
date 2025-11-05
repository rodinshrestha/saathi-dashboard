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
