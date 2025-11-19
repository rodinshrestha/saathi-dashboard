"use client";

import { useFormik } from "formik";
import { ArrowLeft, FileSearch, Paperclip, User } from "lucide-react";
import Link from "next/link";

import AttachmentForm from "@/components/AttachmentForm";
import ModuleSectionWrapper from "@/components/ModuleSectionWrapper";
import MultiStepForm from "@/components/MultiStepForm";

import { ChildIntakeProgramFormType } from "./child-intake-program-form.types";
import ChildIntakeBasicInfo from "./components/ChildIntakeBasicInfo";
import ChildIntakeContactForm from "./components/ChildIntakeContactForm";
import ChildIntakeEducationForm from "./components/ChildIntakeEducationForm";
import ChildIntakeMedicalForm from "./components/ChildIntakeMedicalForm";
import ChildIntakeProtectionFrom from "./components/ChildIntakeProtectionForm";
import { StyledDiv } from "./style";

const ChildIntakeProgramForm = () => {
  const formik = useFormik<ChildIntakeProgramFormType>({
    initialValues: {
      case_code: "",
      full_name: "",
      registration_number: "",
      registration_date: null,
      indentification_cues: "",
      gender: "",
      date_of_birth_bs: null,
      date_of_birth_ad: null,
      age: 0,
      nationality: "",
      referred_from: "",
      referred_to: "",
      religion: "",
      ethnic: "",
      mother_tounge: "",
      vital_doucments: [],
      hospital_name: "",
      hospital_address: "",
      birth_year: "",
      permanent_address_province: "",
      premanent_address_district: "",
      permanent_address_municipality: "",
      permanent_address_ward: "",
      permanant_address_tole: "",
      temporary_address_province: "",
      temporary_address_district: "",
      temporary_address_municipality: "",
      temporary_address_ward: "",
      temporary_address_tole: "",
      emergency_contact_person_name: "",
      emergency_contact_person_relationship: "",
      emergency_contact_person_phone: "",
      emergency_contact_person_address: "",
      has_family_permanently_migrated: "",
      weight: "",
      height: "",
      any_health_issues: "",
      health_issue_details: "",
      any_disability: "",
      type_of_disability: "",
      any_ongoing_medication: "",
      medication_details: "",
      school_name: "",
      school_address: "",
      school_grade: "",
      education_status: "",
      reason_for_dropout: "",
      child_engaged_in_labour: "",
      child_labour_details: "",
      was_child_abused: "",
      type_of_violence: [],
      perpetrator_name: "",
      perpetrator_relation_to_child: "",
      perpetrator_age: 0,
      perpetrator_occupation: "",
      perpetrator_address: "",
      family_background: "",
      reason_for_comming_to_shelter: "",
      initial_psychosocial_assessment: "",
      father_name: "",
      father_age: "",
      father_health_status: "",
      father_occupation: "",
      father_monthly_income: "",
      father_education: "",
      father_status: "",
      father_if_death_year: "",
      father_cause_of_death: "",
      father_address: "",
      mother_name: "",
      mother_age: "",
      mother_health_status: "",
      mother_occupation: "",
      mother_monthly_income: "",
      mother_education: "",
      mother_status: "",
      mother_if_death_year: "",
      mother_cause_of_death: "",
      mother_address: "",
      guardian_name: "",
      guardian_age: 0,
      guardian_relation_to_child: "",
      guardian_address: "",
      children_program: [],
      formal_education_school_name: "",
      formal_education_school_address: "",
      formal_education_grade: "",
      legal_support_details: "",
      diploma_course_duration: [],
      diploma_course_details: "",
      bachelor: "",
      master: "",
      vocational_training_duration: [],
      vocational_training_details: "",
      vocational_training_support: [],
      abroad_support_internship: "",
      loan_support_for_abroad: "",
      internship_details: "",
      job_placement: "",
      follow_up: "",
      has_scholarship_in_program: "",
      scholarship_details: "",
      staff_name: "",
      staff_position: "",
    },
    onSubmit: () => {
      //
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
      icon: <FileSearch />,
      component: <ChildIntakeContactForm formik={formik} />,
    },
    {
      id: "health-medical",
      label: "Health & Medical",
      icon: <FileSearch />,
      component: <ChildIntakeMedicalForm formik={formik} />,
    },
    {
      id: "education",
      label: "Education",
      icon: <FileSearch />,
      component: <ChildIntakeEducationForm formik={formik} />,
    },
    {
      id: "protection",
      label: "Protection",
      icon: <FileSearch />,
      component: <ChildIntakeProtectionFrom formik={formik} />,
    },
    {
      id: "attachments",
      label: "Attachments",
      icon: <Paperclip />,
      component: <AttachmentForm />,
    },
  ];

  return (
    <StyledDiv>
      <Link
        href="/dashboard/data-entry/protection-program-form"
        className="multi-form-back-btn"
      >
        <ArrowLeft size={16} />
        Back to Form Selection
      </Link>
      <ModuleSectionWrapper
        title="Saathi Shelter Survivor Intake Form"
        className="multi-form-title"
      />
      <MultiStepForm
        steps={step}
        onSubmit={formik.handleSubmit}
        loader={false}
      />
    </StyledDiv>
  );
};

export default ChildIntakeProgramForm;
