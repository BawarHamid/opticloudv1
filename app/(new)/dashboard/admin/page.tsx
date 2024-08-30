import InfoCard from "@/components/new/cards/InfoCard";
import React from "react";

export default function AdminPage() {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row ">
      {/* LEFT */}
      <div className="w-full lg:w-2/3">
        {/* INFO CARDS */}
        <div className="flex gap-4 flex-wrap justify-between">
          <InfoCard type="User" />
          <InfoCard type="Person" />
          <InfoCard type="Organization" />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3">r</div>
    </div>
  );
}
