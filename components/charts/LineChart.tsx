"use client";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  defaults,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { dummyDataset2 } from "@/lib/data/dummydata";

defaults.maintainAspectRatio = false;
defaults.responsive = true;
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);

const LineChart = () => {
  const data = {
    datasets: [
      {
        label: "Expense",
        data: dummyDataset2.map((data) => data.expense),
        borderColor: "#20ADF6",
        backgroundColor: "rgba(32, 173, 246, 0.2)",
        fill: true,
      },
      {
        label: "Income",
        data: dummyDataset2.map((data) => data.income),
        borderColor: "#04BA90",
        backgroundColor: "rgba(4, 186, 144, 0.2)",
        fill: true,
      },
    ],
    labels: dummyDataset2.map((data) => data.month),
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: "Month",
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: "Amount ($)",
        },
      },
    },
  };

  return (
    <div className="w-[900px] h-[400px] flex justify-center items-center px-1">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
