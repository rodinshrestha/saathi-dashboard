type ParticipantType = {
  participant_name: string;
  office_school: string;
  position: string;
  phone_number: string;
  email: string;
  age: string;
  sex: string;
  ethnicity: string;
  disability_type: string;
};

export type PreventionProgramFormType = {
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
