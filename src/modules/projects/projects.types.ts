import { MetaType } from "@/types/api-respone.types";

export type ProvinceDistrictType = {
  id: number;
  name: string;
};

export type ProvinceDataType = {
  id: number;
  name: string;
  districts: Array<ProvinceDistrictType>;
};

export type ProgramDataType = {
  id: number;
  name: string;
  code: string;
  description: string;
  is_active: boolean;
};

export type ProjectDataType = {
  created_by: {
    id: number;
    name: string;
    email: string;
    role: string;
  };
  district: {
    id: number;
    name: string;
  };
  program: {
    id: number;
    name: string;
    code: string;
    description: string;
    is_active: boolean;
  };
  end_date: Date;
  event_title: string;
  funders: Array<{ id: number; name: string }>;
  id: number;
  project_title: string;
  province: { id: number; name: string };
  start_date: Date;
};

export type ProjectDataResponseType = {
  data: Array<ProjectDataType>;
  meta: MetaType;
  success: boolean;
  message: string;
  code: number;
};
