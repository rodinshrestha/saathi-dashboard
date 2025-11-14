import { BarChartDataType } from "@/constant/barchart.types";

type dataType = {
  organization: string;
  count: string;
};

export const getBarGraphData = (data: Array<dataType>) => {
  if (Array.isArray(data) && !data.length) {
    return { labels: [], value: [] };
  }

  return data.reduce<BarChartDataType>(
    (acc, iterator) => {
      const { organization = "", count = "" } = iterator || {};

      return {
        labels: [...acc.labels, organization],
        value: [...acc.value, Number(count)],
      };
    },
    { labels: [], value: [] }
  );
};
