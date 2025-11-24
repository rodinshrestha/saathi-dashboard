import { ParticipantType } from "@/modules/prevention-program-form/prevention-program.types";

const pariticipantInitialValue: Array<ParticipantType> = [
  {
    name: "",
    organization_id: "",
    position: "",
    phone: "",
    email: "",
    age_range: "",
    sex: "",
    ethnicity_id: "",
    disability_type: "",
  },
];

export const getParticipantsValue = (data: Array<ParticipantType> = []) => {
  if (!data) {
    return pariticipantInitialValue;
  }

  if (!data.length) {
    return pariticipantInitialValue;
  }

  return data;
};
