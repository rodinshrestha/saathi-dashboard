export type UserType = {
  /** Unique ID of the user */
  id: number;

  /** Full name of the user */
  name: string;

  /** Email address of the user */
  email: string;

  /** Timestamp when the email was verified (null if not verified) */
  email_verified_at: string | null;

  /** Record creation timestamp (ISO string) */
  created_at: string;

  /** Record last updated timestamp (ISO string) */
  updated_at: string;
};
