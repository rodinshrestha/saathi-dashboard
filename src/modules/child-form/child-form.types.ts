import { AttachmentTypes } from "@/types/attachment.types";

export type ChildFormType = {
  /** Progrmam unique number i.e child form */
  program_id: number;

  /** Unique registration number of the child */
  registration_no: string;

  /** Date of registration (nullable) */
  registration_date: Date | null;

  /** Full name of the child */
  full_name: string;

  /** Age of the child */
  age: string;

  /** Current grade/class of the child */
  grade: string;

  /** Name of the school the child attends */
  school: string;

  /** Educational status (e.g., regular, dropout) */
  education_status: string;

  /** Person or organization that referred the child */
  referred_by: string;

  /** Current address where the child is living */
  current_address: string;

  /** Background information or case details */
  background: string;

  /** Current health status of the child */
  health_status: string;

  /** Psychosocial evaluation/remarks */
  psychosocial_assessment: string;

  /** Summary of overall assessment */
  overall_assessment: string;

  /** Profile picture */
  profile_picture: File | string | null;

  /** Attachments */
  attachments: AttachmentTypes;
};
