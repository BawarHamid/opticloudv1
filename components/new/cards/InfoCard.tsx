import React from "react";
import Clock from "../Clock";
import { VscEllipsis } from "react-icons/vsc";
import { FaEllipsisH } from "react-icons/fa";

export default function InfoCard({ type }: { type: string }) {
  return (
    <div className="rounded-2xl odd:bg-primary-300 even:bg-lime-300 p-4 flex-1 min-w-[130px]">
      <div className="flex justify-between">
        <span className="">
          <Clock />
        </span>
        <FaEllipsisH className="size-5 text-white cursor-pointer" />
      </div>
      <h1 className="text-2xl font-semibold my-4">{94}</h1>
      <h1 className="capitalize text-sm font-medium">{type}</h1>
    </div>
  );
}
