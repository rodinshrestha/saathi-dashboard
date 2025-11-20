export type FamilyReintegrationFormType = {
  /** Program id 10 i.e family reintergation */
  program_id: 10;

  /** Date when reintegration happened */
  date_reintegration: Date | null;

  /** Total duration of service provided */
  total_duration_of_service: string;

  /** Address where the child/youth lived during reintegration */
  address_during_reintegration: string;

  /** Age during reintegration */
  age_during_reintegration: string;

  /** Current education status */
  education: string;

  /** Grade/class level */
  grade: string;

  /** Whether medication is required */
  medication_required: string;

  /** Details of required medications */
  medication_details: string;

  /** Number of family members */
  number_of_family_member: string;

  /** Head of the family */
  head_of_family: string;

  /** Monthly family income */
  monthly_family_income: string;

  /** Whether the income is sufficient */
  is_income_sufficent: string;

  /** Explanation if income is not sufficient */
  if_not_sufficient: string;

  /** Substance use reported in the family */
  substance_use_in_family: Array<string>;

  /** Any history of violence in the family */
  any_history_of_violence: string;

  /** Additional details if violence history exists */
  if_yes_to_violence: Array<string>;

  /** Whether the incident was reported to police */
  reported_to_police: string;

  /** Type of housing */
  housing_type: string;

  /** Utilities available in the house */
  utilities_available: Array<string>;

  /** Whether perpetrator lives in the same house */
  is_perpetrator_living_in_same_house: string;

  /** Risk level of revictimization */
  risk_of_revictimization: string;

  /** Any threats to the child or youth */
  any_threat_to_child_or_youth: string;

  /** Whether home environment is safe */
  is_home_environment_safe: string;

  /** Types of support needed */
  supports_need: Array<string>;

  /** Coordination and referral details */
  coordination_and_referral_details: string;

  /** Future plan for the child/youth */
  future_plan: string;
};
