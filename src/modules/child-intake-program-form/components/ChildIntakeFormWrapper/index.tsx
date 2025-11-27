"use client";

import React from "react";

import { useFormik } from "formik";
import {
  Briefcase,
  FileText,
  GraduationCap,
  Heart,
  MapPin,
  Paperclip,
  Shield,
  User,
  Users,
} from "lucide-react";
import { useRouter } from "next/navigation";

import AttachmentForm from "@/components/AttachmentForm";
import MultiStepForm from "@/components/MultiStepForm";
import useToaster from "@/hooks/useToaster";
import { authAxios } from "@/utils/axios";
import { getApiResponseErrorToast } from "@/utils/get-api-response-error-toast";
import { getConvertedDate } from "@/utils/get-converted-date";
import { initializeAttachmentsData } from "@/utils/initialize-attachments-data";
import { objectToFormData } from "@/utils/object-to-form-data";
import { sanitizeAttachmentsFile } from "@/utils/sanitize-attachments-file";

import { ChildIntakeProgramFormType } from "../../child-intake-program-form.types";
import ChildIntakeBasicInfo from "../ChildIntakeBasicInfo";
import ChildIntakeCaseHistoryForm from "../ChildIntakeCaseHistoryForm";
import ChildIntakeContactForm from "../ChildIntakeContactForm";
import ChildIntakeEducationForm from "../ChildIntakeEducationForm";
import ChildIntakeFamilyInfoForm from "../ChildIntakeFamilyInfoForm";
import ChildIntakeMedicalForm from "../ChildIntakeMedicalForm";
import ChildIntakeProtectionFrom from "../ChildIntakeProtectionForm";
import ChildIntakeServiceForm from "../ChildIntakeServiceForm";

type Props = {
  data?: ChildIntakeProgramFormType & { id: string };
  isUpdate?: boolean;
};

const ChildIntakeFormWrapper = ({ data, isUpdate = false }: Props) => {
  const [loader, setLoader] = React.useState(false);

  const { successToast, errorToast } = useToaster();
  const router = useRouter();

  const formik = useFormik<ChildIntakeProgramFormType>({
    initialValues: {
      program_id: 9,
      case_code: data?.case_code || "",
      full_name: data?.full_name || "",
      registration_number: data?.registration_number || "",
      registration_date: data?.registration_date || null,
      indentification_cues: data?.indentification_cues || "",
      gender: data?.gender || "",
      date_of_birth_bs: data?.date_of_birth_bs || null,
      date_of_birth_ad: data?.date_of_birth_bs || null,
      age: data?.age || "",
      nationality: data?.nationality || "",
      referred_from: data?.referred_from || "",
      referred_to: data?.referred_to || "",
      religion: data?.religion || "",
      ethnic: data?.ethnic || "",
      mother_tounge: data?.mother_tounge || "",
      vital_doucments: data?.vital_doucments || [],
      hospital_name: data?.hospital_name || "",
      hospital_address: data?.hospital_address || "",
      birth_year: data?.birth_year || "",
      permanent_address_province: data?.permanent_address_province || "",
      premanent_address_district: data?.premanent_address_district || "",
      permanent_address_municipality:
        data?.permanent_address_municipality || "",
      permanent_address_ward: data?.permanent_address_ward || "",
      permanant_address_tole: data?.permanant_address_tole || "",
      temporary_address_province: data?.temporary_address_province || "",
      temporary_address_district: data?.temporary_address_district || "",
      temporary_address_municipality:
        data?.temporary_address_municipality || "",
      temporary_address_ward: data?.temporary_address_ward || "",
      temporary_address_tole: data?.temporary_address_tole || "",
      emergency_contact_person_name: data?.emergency_contact_person_name || "",
      emergency_contact_person_relationship:
        data?.emergency_contact_person_relationship || "",
      emergency_contact_person_phone: data?.emergency_contact_person_name || "",
      emergency_contact_person_address:
        data?.emergency_contact_person_address || "",
      has_family_permanently_migrated:
        data?.has_family_permanently_migrated || "",
      weight: data?.weight || "",
      height: data?.height || "",
      any_health_issues: data?.any_health_issues || "",
      health_issue_details: data?.health_issue_details || "",
      any_disability: data?.any_disability || "",
      type_of_disability: data?.type_of_disability || "",
      any_ongoing_medication: data?.any_ongoing_medication || "",
      medication_details: data?.medication_details || "",
      school_name: data?.school_name || "",
      school_address: data?.school_address || "",
      school_grade: data?.school_grade || "",
      education_status: data?.education_status || "",
      reason_for_dropout: data?.reason_for_dropout || "",
      child_engaged_in_labour: data?.child_engaged_in_labour || "",
      child_labour_details: data?.child_labour_details || "",
      was_child_abused: data?.was_child_abused || "",
      type_of_violence: data?.type_of_violence || [],
      perpetrator_name: data?.perpetrator_name || "",
      perpetrator_relation_to_child: data?.perpetrator_relation_to_child || "",
      perpetrator_age: data?.perpetrator_age || "",
      perpetrator_occupation: data?.perpetrator_occupation || "",
      perpetrator_address: data?.perpetrator_address || "",
      family_background: data?.family_background || "",
      reason_for_comming_to_shelter: data?.reason_for_comming_to_shelter || "",
      initial_psychosocial_assessment:
        data?.initial_psychosocial_assessment || "",
      father_name: data?.father_name || "",
      father_age: data?.father_age || "",
      father_health_status: data?.father_health_status || "",
      father_occupation: data?.father_occupation || "",
      father_monthly_income: data?.father_monthly_income || "",
      father_education: data?.father_education || "",
      father_status: data?.father_status || "",
      father_if_death_year: data?.father_if_death_year || "",
      father_cause_of_death: data?.father_cause_of_death || "",
      father_address: data?.father_address || "",
      mother_name: data?.mother_name || "",
      mother_age: data?.mother_age || "",
      mother_health_status: data?.mother_health_status || "",
      mother_occupation: data?.mother_occupation || "",
      mother_monthly_income: data?.mother_monthly_income || "",
      mother_education: data?.mother_education || "",
      mother_status: data?.mother_status || "",
      mother_if_death_year: data?.mother_if_death_year || "",
      mother_cause_of_death: data?.mother_cause_of_death || "",
      mother_address: data?.mother_address || "",
      guardian_name: data?.guardian_name || "",
      guardian_age: data?.guardian_age || "",
      guardian_relation_to_child: data?.guardian_relation_to_child || "",
      guardian_address: data?.guardian_address || "",
      children_program: data?.children_program || [],
      formal_education_school_name: data?.formal_education_school_name || "",
      formal_education_school_address:
        data?.formal_education_school_address || "",
      formal_education_grade: data?.formal_education_grade || "",
      legal_support_details: data?.legal_support_details || "",
      diploma_course_duration: data?.diploma_course_duration || [],
      diploma_course_details: data?.diploma_course_details || "",
      bachelor: data?.bachelor || "",
      master: data?.master || "",
      vocational_training_duration: data?.vocational_training_duration || [],
      vocational_training_details: data?.vocational_training_details || "",
      vocational_training_support: data?.vocational_training_support || [],
      abroad_support_internship: data?.abroad_support_internship || "",
      loan_support_for_abroad: data?.loan_support_for_abroad || "",
      internship_details: data?.internship_details || "",
      job_placement: data?.job_placement || "",
      follow_up: data?.follow_up || "",
      has_scholarship_in_program: data?.has_scholarship_in_program || "",
      scholarship_details: data?.scholarship_details || "",
      staff_name: data?.staff_name || "",
      staff_position: data?.staff_position || "",
      profile_picture: data?.profile_picture || null,
      attachments: initializeAttachmentsData(data?.attachments),
    },
    onSubmit: (values) => {
      setLoader(true);

      const {
        registration_date,
        date_of_birth_bs,
        date_of_birth_ad,
        attachments,
        ...rest
      } = values;

      const body = {
        registration_date: getConvertedDate(registration_date),
        date_of_birth_bs: getConvertedDate(date_of_birth_bs),
        date_of_birth_ad: getConvertedDate(date_of_birth_ad),
        attachments: sanitizeAttachmentsFile(attachments),
        ...rest,
      };

      if (isUpdate && !data?.id) {
        errorToast("Id Cannot be Empty");
        return;
      }

      const endPoint = isUpdate ? `/survivors/${data?.id}` : "/survivors";

      const formData = objectToFormData(body, isUpdate);

      authAxios
        .post(endPoint, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(() => {
          successToast(
            isUpdate
              ? "Project updated successfully"
              : "Project created successfully"
          );
          router.push("/registration-list");
        })
        .catch((err) => getApiResponseErrorToast(err))
        .finally(() => setLoader(false));
    },
  });

  const step = [
    {
      id: "child-intake-basic-info",
      label: "Basic Info",
      icon: <User />,
      component: <ChildIntakeBasicInfo formik={formik} />,
    },
    {
      id: "contact-address",
      label: "Conatct & Address",
      icon: <MapPin />,
      component: <ChildIntakeContactForm formik={formik} />,
    },
    {
      id: "health-medical",
      label: "Health & Medical",
      icon: <Heart />,
      component: <ChildIntakeMedicalForm formik={formik} />,
    },
    {
      id: "education",
      label: "Education",
      icon: <GraduationCap />,
      component: <ChildIntakeEducationForm formik={formik} />,
    },
    {
      id: "protection",
      label: "Protection",
      icon: <Shield />,
      component: <ChildIntakeProtectionFrom formik={formik} />,
    },
    {
      id: "case-history",
      label: "Case History",
      icon: <FileText />,
      component: <ChildIntakeCaseHistoryForm formik={formik} />,
    },
    {
      id: "family-info",
      label: "Family Info",
      icon: <Users />,
      component: <ChildIntakeFamilyInfoForm formik={formik} />,
    },
    {
      id: "service",
      label: "Service",
      icon: <Briefcase />,
      component: <ChildIntakeServiceForm formik={formik} />,
    },
    {
      id: "attachments",
      label: "Attachments",
      icon: <Paperclip />,
      component: <AttachmentForm formik={formik} showProfile />,
    },
  ];

  return (
    <MultiStepForm
      steps={step}
      onSubmit={formik.handleSubmit}
      loader={loader}
    />
  );
};

export default ChildIntakeFormWrapper;
