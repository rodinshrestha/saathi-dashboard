"use client";
import React from "react";

import { Chart, registerables } from "chart.js";

import { BarChartDataType } from "@/constant/barchart.types";

import Typography from "../Typography";

import { StyledDiv } from "./style";

Chart.register(...registerables);

type Props = {
  label?: string;
  data: BarChartDataType;
};

const BarGraph = ({ label, data }: Props) => {
  const barGraphRef = React.useRef<HTMLCanvasElement>(null);

  const participationByOrgData = {
    labels: data.labels,
    datasets: [
      {
        label: "Participants",
        data: data.value,
        backgroundColor: [
          "#10B981",
          "#3B82F6",
          "#F59E0B",
          "#EF4444",
          "#8B5CF6",
          "#EC4899",
          "#14B8A6",
          "#F97316",
          "#06B6D4",
          "#84CC16",
          "#6366F1",
          "#A855F7",
          "#22D3EE",
          "#FB923C",
          "#94A3B8",
          "#10B981",
        ],
        borderWidth: 0,
      },
    ],
  };

  React.useEffect(() => {
    let chart: Chart<"bar", number[], string> | null = null;

    if (barGraphRef.current) {
      const ctx = barGraphRef.current.getContext("2d");
      if (ctx) {
        chart = new Chart(ctx, {
          type: "bar",
          data: participationByOrgData,
          options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: "y",
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              x: {
                beginAtZero: true,
                grid: {
                  color: "#E5E7EB",
                },
              },
              y: {
                grid: {
                  display: false,
                },
              },
            },
          },
        });
      }
    }

    return () => {
      chart?.destroy();
    };
  }, []);

  return (
    <StyledDiv>
      {label && (
        <Typography as="p" className="bar-graph-title">
          {label}
        </Typography>
      )}
      <canvas ref={barGraphRef}></canvas>
    </StyledDiv>
  );
};

export default BarGraph;
