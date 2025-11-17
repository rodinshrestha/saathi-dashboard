export type ParticipantType = {
  /** Full name of the participant */
  participant_name: string;

  /** Name of the office or school the participant belongs to */
  office_school: string;

  /** Participant's job position or role */
  position: string;

  /** Participant’s contact phone number */
  phone_number: string;

  /** Participant’s email address */
  email: string;

  /** Participant’s age */
  age: string;

  /** Participant’s sex (e.g., Male/Female/Other) */
  sex: string;

  /** Participant’s ethnicity group */
  ethnicity: string;

  /** Type of disability, if any (empty string if none) */
  disability_type: string;
};

export type PreventionProgramFormType = {
  program_id: number;
  project_id: string;
  event_id: string;
  activity_code: string;
  fund_code: string;
  organizer: string;
  start_date: Date | null;
  end_date: Date | null;
  province_id: string;
  district_id: string;
  address: string;
  ward: string;
  event_venue: string;
  participant: ParticipantType[];
  profile_picture: string;
  // supporting_documents: string[];
};
