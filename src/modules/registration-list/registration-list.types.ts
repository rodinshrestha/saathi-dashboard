import { MetaType } from "@/types/api-respone.types";
import { ProgramType } from "@/types/program.types";
import { ProvinceType } from "@/types/province.types";
import { UserType } from "@/types/user.types";

import { ParticipantType } from "../prevention-program-form/prevention-program.types";

export type RegistrationListType = {
  /** Timestamp when the registration was created (ISO string) */
  created_at: string;

  /** Unique identifier for the registration record */
  id: number;

  /** Current status of the registration (e.g., pending, approved, rejected) */
  status: string;

  /** Program associated with this registration */
  program: ProgramType;

  /** User who submitted the registration */
  user: UserType;

  /** List of participants included in this registration */
  participants: Array<ParticipantType>;

  /** Timestamp when the registration was submitted */
  submitted_at: string;

  /** Unique registration identifier (external ID or code) */
  registration_id: string;

  /** ID of the program associated with this registration */
  program_id: string;

  /** Province Details associted with this registration */
  province: ProvinceType;

  /** Project dertails of associated registration  */
  project: {
    /** Project title */
    project_title: string;
  };
};

export type RegistrationListResponseType = {
  data: Array<RegistrationListType>;
  meta: MetaType;
};
