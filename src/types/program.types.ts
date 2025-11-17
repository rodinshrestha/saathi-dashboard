export type ProgramType = {
  /** Unique ID of the record */
  id: number;

  /** Name of the program */
  name: string;

  /** Short code/identifier for the program */
  code: string;

  /** Detailed description of what the program is about */
  description: string;

  /** Whether the program is active ("1" = active, "0" = inactive) */
  is_active: string;

  /** Parent program ID if this is a child category (null if none) */
  parent_id: number | null;

  /** Date when the record was created (ISO timestamp) */
  created_at: string;

  /** Date when the record was last updated (ISO timestamp) */
  updated_at: string;
};
