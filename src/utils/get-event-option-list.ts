import { Option } from "@/components/Select";
import { EventDataTypes } from "@/types/event-data.types";

export const getEventOptionList = (
  data: Array<EventDataTypes> = []
): Array<Option> => {
  if (Array.isArray(data) && !data.length) return [];
  return data.map((x) => ({ label: x.event_title, value: x.id }));
};
