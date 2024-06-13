import BarChart from "@/components/charts/BarChart";
import BrushBarChart from "@/components/charts/BrushBarChart";
import LineBarAreaComposedChart from "@/components/charts/LineBarAreaComposedChart";
import LineChart from "@/components/charts/LineChart";
import RechartsLineChart from "@/components/charts/RechartsLineChart";
import ActiveSessionCard from "@/components/data/cards/ActiveSessionCard";
import ChartCards from "@/components/data/cards/ChartCards";
import HeaderBox from "@/components/headers/HeaderBox";
import React from "react";

const Overview = () => {
  const loggedIn = { firstName: "Test" };
  return (
    <section className="flex w-full flex-row max-xl:max-h-screen max-xl:overflow-y-scroll no-scrollbar">
      <div className="flex w-full flex-col flex-1 gap-8 px-5 sm:px-8 py-7 lg:py-12 xl:max-h-screen xl:overflow-y-scroll no-scrollbar">
        <header className="overview-header">
          <HeaderBox
            headerType="withUser"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
          />

          {/* <ActiveSessionCard /> */}
          <div className="flex col space-x-6">
            <ChartCards chart={<BarChart />} title="Consumption:" />
            <ChartCards chart={<BarChart />} title="Consumption:" />
          </div>
          <div className="flex mt-6">
            <ChartCards chart={<LineChart />} title="Statistics:" />
          </div>
          <div className="flex mt-6">
            <ChartCards chart={<BrushBarChart />} title="BrushBarChart:" />
          </div>
          <div className="flex col space-x-6 mt-6">
            <ChartCards
              chart={<LineBarAreaComposedChart />}
              title="LineBarAreaComposedChart:"
            />
            <ChartCards
              chart={<RechartsLineChart />}
              title="RechartsLineChart:"
            />
          </div>
        </header>
      </div>
    </section>
  );
};

export default Overview;
