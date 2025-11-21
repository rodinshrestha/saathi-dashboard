import { ParticipantType } from "@/modules/prevention-program-form/prevention-program.types";

const pariticipantInitialValue = [
  {
    participant_name: "",
    organization_id: "",
    position: "",
    phone_number: "",
    email: "",
    age: "",
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
