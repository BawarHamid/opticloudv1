import Image from "next/image";
import React from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { CgSearch } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { RiNotification3Line } from "react-icons/ri";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between p-4">
      {/* SEARCH BAR */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <CgSearch className="size-5 text-gray-400" />
        <input
          className="w-[200px] p-2 bg-transparent outline-none"
          type="text"
          placeholder="Search..."
        />
      </div>
      {/* ICONS AND USERINFO */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center cursor-pointer">
          <AiOutlineMessage className="size-6 text-gray-400" />
        </div>
        <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center cursor-pointer relative">
          <RiNotification3Line className="size-6 text-gray-400" />
          <div className="rounded-full absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white text-xs">
            1
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">
            {"Test"} {"Test"}
          </span>
          <span className="text-[12px] text-gray-500 text-right">{"Role"}</span>
        </div>
        <Image
          src="/avatar.png"
          alt="pb-placeholder"
          width={36}
          height={36}
          className="rounded-full"
        />
      </div>
    </div>
  );
}
