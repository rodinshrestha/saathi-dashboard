"use client";
import React from "react";

import { Chart, registerables } from "chart.js";

import Typography from "../Typography";

import { StyledDiv } from "./style";

Chart.register(...registerables);

const attendanceData = {
  labels: ["Project A", "Project B", "Project C", "Project D", "Project E"],
  datasets: [
    {
      label: "Attendance",
      data: [120, 95, 145, 78, 110],
      backgroundColor: "#10B981",
      borderRadius: 8,
    },
  ],
};

type Props = {
  label?: string;
};

const BarChart = ({ label }: Props) => {
  const barChartRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    let chart: Chart<"bar", number[], string> | null = null;
    if (barChartRef.current) {
      const ctx = barChartRef.current.getContext("2d");
      if (ctx) {
        chart = new Chart(ctx, {
          type: "bar",
          data: attendanceData,
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              y: {
                beginAtZero: true,
                grid: {
                  color: "#E5E7EB",
                },
              },
              x: {
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
    <StyledDiv className="barchart-wrapper">
      {label && (
        <Typography as="p" className="bar-chart-title">
          {label}
        </Typography>
      )}
      <canvas ref={barChartRef}></canvas>
    </StyledDiv>
  );
};

export default BarChart;
