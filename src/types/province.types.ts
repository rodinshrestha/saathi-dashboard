export type ProvinceDistrictType = {
  /** Unique identifier for the province or district */
  id: number;

  /** Name of the province or district */
  name: string;
};

export type ProvinceType = {
  /** Unique identifier for the province */
  id: number;

  /** Name of the province */
  name: string;

  /** List of districts that belong to this province */
  districts: Array<ProvinceDistrictType>;
};
