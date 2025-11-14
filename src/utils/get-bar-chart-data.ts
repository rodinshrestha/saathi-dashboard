import { BarChartDataType } from "@/constant/barchart.types";

type DataType = {
  attendance: string;
  project_id: string;
  project_title: string;
};

export const getBarChartData = (data: Array<DataType>) => {
  if (Array.isArray(data) && !data.length) {
    return { labels: [], value: [] };
  }

  return data.reduce<BarChartDataType>(
    (acc, iterator) => {
      const { project_title = "", attendance = "" } = iterator || {};

      return {
        labels: [...acc.labels, project_title],
        value: [...acc.value, Number(attendance)],
      };
    },
    { labels: [], value: [] }
  );
};
