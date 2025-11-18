"use client";
import React from "react";

import { Chart, registerables } from "chart.js";
import clsx from "clsx";

import { BarChartDataType } from "@/constant/barchart.types";

import { BarChartSkeletonLoading } from "../Loader/BarChartSkeletonLoading";
import Typography from "../Typography";

import { StyledDiv } from "./style";

Chart.register(...registerables);

type Props = {
  data: BarChartDataType;
  label?: string;
  isLoading?: boolean;
  className?: string;
};

const BarChart = ({ label, data, isLoading, className }: Props) => {
  const barChartRef = React.useRef<HTMLCanvasElement>(null);

  const attendanceData = React.useMemo(
    () => ({
      labels: data.labels,
      datasets: [
        {
          label: "Attendance",
          data: data.value,
          backgroundColor: "#10B981",
          borderRadius: 8,
        },
      ],
    }),
    [data.labels, data.value]
  );

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
  }, [attendanceData]);

  if (isLoading) {
    return <BarChartSkeletonLoading />;
  }

  return (
    <StyledDiv className={clsx("barchart-wrapper", className)}>
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
