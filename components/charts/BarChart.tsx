"use client";

import { barChartData } from "@/lib/data/dummydata";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  defaults,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
defaults.maintainAspectRatio = false;
defaults.responsive = true;
ChartJS.register(ArcElement, Tooltip, Legend);

const BarChart = () => {
  const data = {
    datasets: [
      {
        label: "Total Consumption",
        data: barChartData.map((data) => data.total),
        backgroundColor: "#0e7dbb",
        borderRadius: 8,
      },
    ],
    labels: barChartData.map((data) => data.month),
  };
  return (
    <div className="w-[500xp] h-[500px]">
      <Bar data={data} />
    </div>
  );
};

export default BarChart;
