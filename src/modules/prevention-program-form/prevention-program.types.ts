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
  event_title: string;
  activity_code: string;
  fund_code: string;
  organizer: string;
  start_date: Date | null;
  end_date: Date | null;
  province: string;
  district: string;
  address: string;
  ward: string;
  event_venue: string;
  participant: ParticipantType[];
  profile_picture: string;
  supporting_documents: string[];
};
