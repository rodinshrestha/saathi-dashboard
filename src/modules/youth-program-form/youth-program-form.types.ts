export type YouthProgramFormType = {
  /** Program id 8 i.e youth program */
  program_id: 8;

  /** Unique registration number for the youth */
  registration_no: string;

  /** Date of entering Saathi program  */
  enter_date_at_saathi: Date | null;

  /** Full name of the youth */
  full_name: string;

  /** Age of the youth */
  age: string;

  /** Current grade or academic level */
  grade: string;

  /** Name of the college the youth is attending */
  college_name: string;

  /** Faculty or academic stream */
  facuilty: string;

  /** Current semester or academic year */
  current_semester_year: string;

  /** Date when the youth joined the college (nullable) */
  date_of_joining_college: Date | null;

  /** Total duration of the academic course */
  duration_of_course: string;

  /** Attendance details or percentage */
  attendance: string;

  /** Date of college visit (nullable) */
  college_visit_date: Date | null;

  /** Date when the youth got settled in the youth program (nullable) */
  date_settled_in_youth_program: Date | null;

  /** Background information or personal history */
  background: string;

  /** Academic performance summary or remarks */
  academic_performance: string;

  /** Behaviour and attitude observations */
  behaviour_and_attitude: string;

  /** Result or performance report from college */
  college_result: string;

  /** Overall comments or assessment */
  overall_comments: string;
};
