import { MetaType } from "@/types/api-respone.types";
import { ProvinceDistrictType } from "@/types/province.types";

export type ProgramDataType = {
  /** Unique identifier for the program */
  id: number;

  /** Name of the program */
  name: string;

  /** Short code or identifier for the program */
  code: string;

  /** Description of what the program is about */
  description: string;

  /** Whether the program is currently active */
  is_active: boolean;
};

export type ProjectDataType = {
  /** Details of the user who created the project */
  created_by: {
    /** Creator's user ID */
    id: number;

    /** Creator's full name */
    name: string;

    /** Creator's email address */
    email: string;

    /** Creator's role in the system */
    role: string;
  };

  /** District where the project is located */
  district: ProvinceDistrictType;

  /** Program associated with the project */
  program: ProgramDataType;

  /** Project end date */
  end_date: Date;

  /** Title of the event within the project */
  event_title: string;

  /** List of funders supporting the project */
  funders: Array<{
    /** Unique funder ID */
    id: number;

    /** Name of the funding organization or individual */
    name: string;
  }>;

  /** Unique identifier for the project */
  id: number;

  /** Title of the project */
  project_title: string;

  /** Province where the project is located */
  province: {
    /** Province ID */
    id: number;

    /** Province name */
    name: string;
  };

  /** Project start date */
  start_date: Date;
};

export type ProjectDataResponseType = {
  data: Array<ProjectDataType>;
  meta: MetaType;
  success: boolean;
  message: string;
  code: number;
};
