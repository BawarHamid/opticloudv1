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
        </header>
      </div>
    </section>
  );
};

export default Overview;
