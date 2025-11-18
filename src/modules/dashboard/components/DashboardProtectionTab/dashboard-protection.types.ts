import { MetrixDataType } from "@/types/metrix-data.types";

export type DashboardProtectionData = {
  /* Key Performance Indicators */
  kpis: {
    /* Total number of children intake */
    no_of_children_intake: number;
    /* Number of children in safer home program */
    children_program_safer_home: number;
    /* Number of children in youth settlement program */
    youth_settlement_program: number;
  };

  /* Services and support provided to children */
  services_and_support_provied: Array<MetrixDataType>;

  /* Distribution of children by age range */
  age_range_distribution: Array<MetrixDataType>;

  /* Types of violence experienced */
  types_of_violence: Array<MetrixDataType>;

  /* Distribution by ethnicity */
  ethnicity_distribution: Array<MetrixDataType>;

  /* Distribution by gender */
  gender_distribution: Array<MetrixDataType>;

  /* Distribution by disability status */
  disability_status: Array<MetrixDataType>;

  /* Distribution by education status */
  education_distribution: Array<MetrixDataType>;

  /* Distribution by family status */
  family_status: Array<MetrixDataType>;

  /* Total number of perpetrators */
  perpetrator_count: number;

  /* Total number of scholarships awarded */
  scholarship_count: number;

  /* Coverage by province */
  province_coverage: Array<MetrixDataType>;

  /* Summary of referrals */
  referral_summary: {
    /* Referrals sent to others */
    referrals_to: Array<MetrixDataType>;
    /* Referrals received from others */
    referrals_from: Array<MetrixDataType>;
  };
};

export type DashboardProtectionType = {
  data: {
    protection: DashboardProtectionData;
  };
};
