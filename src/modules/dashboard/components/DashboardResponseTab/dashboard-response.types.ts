import { MetrixDataType } from "@/types/metrix-data.types";

export type DashbordResponseData = {
  /** Key Performance Indicators */
  kpis: {
    /** Total number of registrations */
    total_registrations: number;

    /** Number of UNFPA-supported shelters */
    unfpa_supported_shelters: number;

    /** Number of Saathi shelters */
    saathi_shelters: number;

    /** Average duration of stay (e.g., in days) */
    duration_of_stay: number;
  };

  /** Services and support provided */
  services_and_support_provided: Array<MetrixDataType>;

  /** Sheltered vs Non-sheltered individuals */
  sheltered_vs_non_sheltered: Array<MetrixDataType>;

  /** Dependents vs non-dependents */
  dependent_vs_non_dependent: Array<MetrixDataType>;

  /** Age range distribution */
  age_range_distribution: Array<MetrixDataType>;

  /** Types of violence */
  types_of_violence: Array<MetrixDataType>;

  /** Ethnicity distribution */
  ethnicity_distribution: Array<MetrixDataType>;

  /** Disability status */
  disability_status: Array<MetrixDataType>;

  /** Pregnancy status */
  pregnancy_status: Array<MetrixDataType>;

  /** Marital status */
  marital_status: Array<MetrixDataType>;

  /** Perpetrator statistics */
  perpetrator_count: number;
  perpetrator_count_of_saathi_sheltor_intake: number;
  perpetrator_count_of_UNFPA_supported_shelter_program: number;
  chargedPerpetrators: number;
  sociallyPowerfulPerpetrators: number;
  substanceUsingPerpetrators: number;
  mentalHealthPerpetrators: number;

  /** District distribution */
  district_distribution: Array<MetrixDataType>;

  /** Province distribution */
  province_distribution: Array<MetrixDataType>;

  /** Referral summary */
  referral_summary: {
    referrals_to: Array<MetrixDataType>;
    referrals_from: Array<MetrixDataType>;
  };
};

export type DashboardResponseType = {
  data: {
    response: DashbordResponseData;
  };
};
