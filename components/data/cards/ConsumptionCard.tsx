import BarChart from "@/components/charts/BarChart";
import React from "react";

// type ConsumptionCardProps = {};

const ConsumptionCard = () => {
  return (
    // <section className="flex w-full items-center gap-4 rounded-xl border border-gray-200 p-4 shadow-sm sm:gap-6 sm:p-6 bg-primary-50">
    <section className="flex items-center gap-4 max-w-[500px] rounded-xl border border-gray-200 p-4 shadow-sm sm:gap-6 sm:p-6 bg-primary-50">
      <div className="flex flex-col w-full">
        <h2 className="font-semibold text-gray-900 text-[18px] leading-[22px] mb-2">
          Consumption
        </h2>
        {/* <div className="flex size-full max-w-[100px] items-center sm:max-w-[120px]"> */}
        <div className="flex items-center w-full">
          <BarChart />
        </div>
      </div>
    </section>
  );
};

export default ConsumptionCard;
