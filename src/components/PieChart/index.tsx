// components/Chart.tsx
"use client"; // Needed for Next.js 13+ app directory

import React from "react";

import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import clsx from "clsx";

import { PieChartDataType } from "@/types/pie-chart-types";

import PieChartSkeletonLoading from "../Loader/PieChartSkeletonLoading";
import Typography from "../Typography";

import { StyledDiv } from "./style";

Chart.register(ArcElement, Tooltip, Legend);

type ChartProps = {
  data: PieChartDataType;
  type: "doughnut" | "pie";
  chartTitle?: string;
  isLoading?: boolean;
  className?: string;
};

const PieChart: React.FC<ChartProps> = ({
  type = "doughnut",
  chartTitle,
  data,
  isLoading,
  className,
}) => {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);

  React.useEffect(() => {
    if (!canvasRef.current) return;

    const chartInstance = new Chart(canvasRef.current, {
      type: "doughnut", // Chart.js only has 'doughnut'; Pie = cutout: 0
      data: {
        labels: data.labels,
        datasets: [
          {
            data: data.value,
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
            hoverOffset: 10,
          },
        ],
      },
      options: {
        cutout: type === "pie" ? "0%" : "50%", // 0% for Pie, 50% for Doughnut
        responsive: true,
        plugins: {
          legend: { position: "bottom" },
          tooltip: { enabled: true },
        },
      },
    });

    return () => {
      chartInstance.destroy(); // Cleanup chart instance
    };
  }, [data, type]);

  if (isLoading) {
    return <PieChartSkeletonLoading />;
  }

  return (
    <StyledDiv className={clsx("chart-wrapper", className)}>
      {chartTitle && (
        <Typography as="p" className="chart-title">
          {chartTitle}
        </Typography>
      )}

      <div className="chart-inner-wrapper">
        <canvas ref={canvasRef} />
      </div>
    </StyledDiv>
  );
};

export default PieChart;
