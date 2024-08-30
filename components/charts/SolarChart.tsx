"use client";
import React from "react";
import ReactECharts from "echarts-for-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
} from "recharts";

export function SolarInverterECharts() {
  const option = {
    title: {
      text: "24h Solar Inverter Curve",
    },
    tooltip: {
      trigger: "axis",
      formatter: (params: any) => {
        let tooltipText = `${params[0].axisValue}<br/>`;
        params.forEach((item: any) => {
          tooltipText += `${item.marker} ${item.seriesName}: ${item.data} kW <br/>`;
        });
        return tooltipText;
      },
    },
    legend: {
      data: ["Production Power", "Consumption Power"],
    },
    xAxis: {
      type: "category",
      data: Array.from({ length: 24 }, (_, i) => `${i}:00`),
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "Production Power",
        type: "line",
        data: [
          0, 0, 0, 0, 0, 0, 50, 150, 300, 500, 700, 900, 1000, 950, 850, 700,
          500, 300, 150, 50, 0, 0, 0, 0,
        ],
        itemStyle: {
          color: "blue",
        },
        areaStyle: {}, // This adds the area fill under the line
      },
      {
        name: "Consumption Power",
        type: "line",
        data: [
          200, 180, 160, 150, 140, 130, 120, 110, 150, 200, 250, 300, 350, 320,
          300, 280, 260, 240, 220, 210, 200, 190, 180, 170,
        ],
        itemStyle: {
          color: "red",
        },
        areaStyle: {}, // This adds the area fill under the line
      },
    ],
  };

  return (
    <div className="w-full h-full">
      <ReactECharts
        option={option}
        style={{ height: "400px", width: "800px" }}
      />
    </div>
  );
}

const data = [
  { time: "0:00", production: 0, consumption: 200 },
  { time: "1:00", production: 0, consumption: 180 },
  { time: "2:00", production: 0, consumption: 160 },
  { time: "3:00", production: 0, consumption: 150 },
  { time: "4:00", production: 0, consumption: 140 },
  { time: "5:00", production: 0, consumption: 130 },
  { time: "6:00", production: 50, consumption: 120 },
  { time: "7:00", production: 150, consumption: 110 },
  { time: "8:00", production: 300, consumption: 150 },
  { time: "9:00", production: 500, consumption: 200 },
  { time: "10:00", production: 700, consumption: 250 },
  { time: "11:00", production: 900, consumption: 300 },
  { time: "12:00", production: 1000, consumption: 350 },
  { time: "13:00", production: 950, consumption: 320 },
  { time: "14:00", production: 850, consumption: 300 },
  { time: "15:00", production: 700, consumption: 280 },
  { time: "16:00", production: 500, consumption: 260 },
  { time: "17:00", production: 300, consumption: 240 },
  { time: "18:00", production: 150, consumption: 220 },
  { time: "19:00", production: 50, consumption: 210 },
  { time: "20:00", production: 0, consumption: 200 },
  { time: "21:00", production: 0, consumption: 190 },
  { time: "22:00", production: 0, consumption: 180 },
  { time: "23:00", production: 0, consumption: 170 },
  { time: "23:59", production: 0, consumption: 120 },
];

export function SolarInverterReCharts() {
  return (
    <div className="w-full h-full">
      <AreaChart width={800} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="production"
          stroke="#8CB0FA"
          fill="#8CB0FA"
        />
        <Area
          type="monotone"
          dataKey="consumption"
          stroke="#EB9FA5"
          fill="#EB9FA5"
        />
      </AreaChart>
    </div>
  );
}
