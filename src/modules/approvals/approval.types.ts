import { MetaType } from "@/types/api-respone.types";
import { ProgramType } from "@/types/program.types";
import { UserType } from "@/types/user.types";

export type ApprovalType = {
  /** Timestamp when the approval record was created (ISO format) */
  created_at: string;

  /** Unique identifier for the approval record */
  id: number;

  /** ID of the related program */
  program_id: string;

  /** Program information (only the name is required) */
  program: ProgramType;

  /** Information about the user who submitted/handled the approval */
  user: UserType;
  /** Related project information */
  project: {
    /** Title of the project */
    project_title: string;
  };

  /** Province information */
  province: {
    /** Name of the province */
    name: string;
  };

  /** Registration ID associated with the approval */
  registration_id: string;

  /** Current status of the approval (e.g., pending, approved, rejected) */
  status: string;

  /** Timestamp when the approval was submitted */
  submitted_at: string;

  /** Timestamp when the approval record was last updated */
  updated_at: string;

  /** ID of the user who submitted/created the approval */
  user_id: string;
};

export type ApprovalResponseType = {
  data: Array<ApprovalType>;
  meta: MetaType;
};
