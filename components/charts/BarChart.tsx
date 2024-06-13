"use client";
import { dummyDataset1 } from "@/lib/data/dummydata";
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
        data: dummyDataset1.map((data) => data.total),
        backgroundColor: "#0e7dbb",
        borderRadius: 6,
      },
    ],
    labels: dummyDataset1.map((data) => data.month),
  };
  return (
    <div className="w-[400px] h-[300px] flex justify-center items-center px-5">
      <Bar data={data} />
    </div>
  );
};

export default BarChart;
