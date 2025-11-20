export type ChildIntakeProgramFormType = {
  /** Unique case identification code */
  case_code: string;

  /** Full legal name of the child */
  full_name: string;

  /** Registration number assigned to the child */
  registration_number: string;

  /** Date when the child was registered */
  registration_date: Date | null;

  /** Visible identification cues or marks */
  indentification_cues: string;

  /** Gender of the child */
  gender: string;

  /** Date of birth in Bikram Sambat (BS) */
  date_of_birth_bs: Date | null;

  /** Date of birth in Gregorian calendar (AD) */
  date_of_birth_ad: Date | null;

  /** Age of the child in years */
  age: string;

  /** Nationality of the child */
  nationality: string;

  /** Source/organization/person who referred the child */
  referred_from: string;

  /** Source/organization/person who referred to child */
  referred_to: string;

  /** Religion of the child */
  religion: string;

  /** Ethnicity of the child */
  ethnic: string;

  /** Mother tongue/language spoken at home */
  mother_tounge: string;

  /** List of vital documents available (birth certificate, etc.) */
  vital_doucments: Array<string>;

  /** Name of the hospital where the child was born */
  hospital_name: string;

  /** Address of the hospital */
  hospital_address: string;

  /** Birth year (nullable) */
  birth_year: string;

  /** Permanent address: province */
  permanent_address_province: string;

  /** Permanent address: district */
  premanent_address_district: string;

  /** Permanent address: municipality */
  permanent_address_municipality: string;

  /** Permanent address: ward number */
  permanent_address_ward: string;

  /** Permanent address: tole/area */
  permanant_address_tole: string;

  /** Temporary address: province */
  temporary_address_province: string;

  /** Temporary address: district */
  temporary_address_district: string;

  /** Temporary address: municipality */
  temporary_address_municipality: string;

  /** Temporary address: ward number */
  temporary_address_ward: string;

  /** Temporary address: tole/area */
  temporary_address_tole: string;

  /** Emergency contact person's name */
  emergency_contact_person_name: string;

  /** Relationship of emergency contact to the child */
  emergency_contact_person_relationship: string;

  /** Emergency contact person's phone number */
  emergency_contact_person_phone: string;

  /** Address of the emergency contact person */
  emergency_contact_person_address: string;

  /** Whether the family has permanently migrated */
  has_family_permanently_migrated: string;

  /** Weight of the child */
  weight: string;

  /** Height of the child */
  height: string;

  /** Whether the child has any health issues */
  any_health_issues: string;

  /** Details of any health issues */
  health_issue_details: string;

  /** Whether the child has any disability */
  any_disability: string;

  /** Type of disability (if applicable) */
  type_of_disability: string;

  /** Whether the child is on ongoing medication */
  any_ongoing_medication: string;

  /** Details of the medication */
  medication_details: string;

  /** Name of the school the child attends/attended */
  school_name: string;

  /** Address of the school */
  school_address: string;

  /** School grade/class */
  school_grade: string;

  /** education status  */
  education_status: string;

  /** Reason for dropping out (if applicable) */
  reason_for_dropout: string;

  /** Whether the child was engaged in labour */
  child_engaged_in_labour: string;

  /** Details of child labour engagement */
  child_labour_details: string;

  /** Whether the child was abused */
  was_child_abused: string;

  /** Types of violence faced by the child */
  type_of_violence: Array<string>;

  /** Perpetrator's name */
  perpetrator_name: string;

  /** Perpetrator's relationship to the child */
  perpetrator_relation_to_child: string;

  /** Age of the perpetrator */
  perpetrator_age: string;

  /** Occupation of the perpetrator */
  perpetrator_occupation: string;

  /** Address of the perpetrator */
  perpetrator_address: string;

  /** Background information of the child/family */
  family_background: string;

  /** Reason for coming to the shelter/home */
  reason_for_comming_to_shelter: string;

  /** Initial psychosocial assessment details */
  initial_psychosocial_assessment: string;

  /** Father's name */
  father_name: string;

  /** Father's age */
  father_age: string;

  /** Father's health status */
  father_health_status: string;

  /** Father's occupation */
  father_occupation: string;

  /** Father's monthly income */
  father_monthly_income: string;

  /** Father's education level */
  father_education: string;

  /** Father's living status (alive/deceased/missing) */
  father_status: string;

  /** Father's year of death (if applicable) */
  father_if_death_year: string;

  /** Father's cause of death (if applicable) */
  father_cause_of_death: string;

  /** Father's current/permanent address */
  father_address: string;

  /** Mother's name */
  mother_name: string;

  /** Mother's age */
  mother_age: string;

  /** Mother's health status */
  mother_health_status: string;

  /** Mother's occupation */
  mother_occupation: string;

  /** Mother's monthly income */
  mother_monthly_income: string;

  /** Mother's education level */
  mother_education: string;

  /** Mother's living status (alive/deceased/missing) */
  mother_status: string;

  /** Mother's year of death (if applicable) */
  mother_if_death_year: string;

  /** Mother's cause of death */
  mother_cause_of_death: string;

  /** Mother's permanent/current address */
  mother_address: string;

  /** Guardian's name */
  guardian_name: string;

  /** Guardian's age */
  guardian_age: string;

  /** Guardian's relationship to the child */
  guardian_relation_to_child: string;

  /** Guardian's address */
  guardian_address: string;

  /** Child program types the child is enrolled in */
  children_program: Array<string>;

  /** School name for formal education */
  formal_education_school_name: string;

  /** School address for formal education */
  formal_education_school_address: string;

  /** Grade level in formal education */
  formal_education_grade: string;

  /** Legal support received (if any) */
  legal_support_details: string;

  /** Duration of diploma courses */
  diploma_course_duration: Array<string>;

  /** Details about diploma courses */
  diploma_course_details: string;

  /** Bachelor level education details */
  bachelor: string;

  /** Master level education details */
  master: string;

  /** Duration of vocational training */
  vocational_training_duration: Array<string>;

  /** Details about vocational training */
  vocational_training_details: string;

  /** Vocational training support provided */
  vocational_training_support: Array<string>;

  /** Support for internships abroad */
  abroad_support_internship: string;

  /** Loan support for going abroad */
  loan_support_for_abroad: string;

  /** Details of internships */
  internship_details: string;

  /** Job placement information */
  job_placement: string;

  /** Follow-up details */
  follow_up: string;

  /** Whether the child has a scholarship in the program */
  has_scholarship_in_program: string;

  /** Scholarship details */
  scholarship_details: string;

  /** Name of the responsible staff */
  staff_name: string;

  /** Position of the staff */
  staff_position: string;
};
