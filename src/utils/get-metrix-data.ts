import { GraphValueType } from "@/types/graph-value.type";
import { MetrixDataType } from "@/types/metrix-data.types";

export const getMetrixData = (data: Array<MetrixDataType> = []) => {
  if (Array.isArray(data) && !data.length) {
    return { labels: [], value: [] };
  }

  return data.reduce<GraphValueType>(
    (acc, iterator) => {
      const { label = "", value = "" } = iterator || {};

      return {
        labels: [...acc.labels, label],
        value: [...acc.value, Number(value)],
      };
    },
    { labels: [], value: [] }
  );
};
