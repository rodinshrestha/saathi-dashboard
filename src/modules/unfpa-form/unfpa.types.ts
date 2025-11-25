import { AttachmentTypes } from "@/types/attachment.types";
import { ProvinceType } from "@/types/province.types";

export type UNFPAFormType = {
  /* Fixed program ID for UNFPA forms */
  program_id: 6;

  /* Unique identifier for the survivor’s case */
  unique_case_id: string;

  /* Date when the case was registered */
  registration_date: Date | null;

  /* Type/category of the case filed */
  case_type: string;

  /* Name of the safe house or shelter involved */
  safe_house_shelter_name: string;

  /* Full legal name of the survivor */
  full_name: string;

  /* Survivor's personal contact number */
  contact_number: string;

  /* Survivor's permanent province */
  province_id: string | ProvinceType;

  /* Survivor's permanent district */
  district_id: string;

  /* Survivor’s permanent municipality or ward number */
  municipality_or_ward: string;

  /* Current temporary residential address */
  temporary_address: string;

  /* Type of identification (citizenship, voter ID, etc.) */
  citizenship_or_id_type: string;

  /* ID or document number */
  citizenship_id_no: string;

  /* Number of dependent children */
  dependent_children: string;

  /* Date when the incident occurred */
  date_of_incident: Date | null;

  /* Location where the incident happened */
  location_of_incident: string;

  /* Main type of violence experienced */
  type_of_violence: string;

  /* Subcategory of the violence */
  subtype: string;

  /* Relationship of the perpetrator to the survivor */
  perpetrator_relationship: string;

  /* Gender of the perpetrator */
  perpetrator_gender: string;

  /* Age of the perpetrator */
  perpetrator_age: string;

  /* Address of the perpetrator */
  perpetrator_address: string;

  /* Whether a police case was filed (Yes/No) */
  police_case_filed: string;

  /* Police case registration number (if applicable) */
  case_registration_number: string;

  /* Information about any legal protection order */
  legal_protection_order: string;

  /* Whether the survivor experienced repeated incidents */
  previous_incidents_or_repeated_violence: string;

  /* Details about previous or repeated incidents */
  specify_details: string;

  /* Additional notes or remarks about the case */
  additional_information_or_notes: string;

  /** Profile picture */
  profile_picture: File | string | null;

  /** Attachments */
  attachments: AttachmentTypes;
};
