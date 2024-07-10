"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type SidebarProps = {
  user?: string; //have to be type User later.
};

const Sidebar: React.FC<SidebarProps> = ({ user }) => {
  const pathName = usePathname();
  return (
    <section className="sticky left-0 top-0 flex h-fit min-h-screen w-fit flex-col justify-between border-r border-gray-200 bg-sidebar-1 pt-2 text-white max-md:hidden sm:p-4 xl:p-6 2xl:w-[255px]">
      <nav className="flex flex-col gap-4">
        <Link
          href={"/"}
          className="flex mb-12 cursor-pointer items-center gap-2"
        >
          <Image
            src={"/icons/logo-white.png"}
            alt="Optilogic Logo"
            width={65}
            height={65}
            className="2xl:w-[120px] sm:w-[80px]"
          />
        </Link>
        {sidebarLinks.map((links) => {
          const isActive =
            pathName === links.route || pathName.startsWith(`${links.route}/`);
          return (
            <Link
              href={links.route}
              key={links.label}
              className={cn(
                "flex gap-3 items-center py-1 md:p-3 2xl:p-4 rounded-lg justify-center xl:justify-start",
                { "bg-primary-400": isActive }
              )}
            >
              <div className="relative size-6 items-center brightness-[3]">
                <Image
                  src={links.imgUrl}
                  alt={links.label}
                  fill
                  className={cn({
                    "brightness-[3] invert-0": isActive,
                  })}
                />
              </div>
              <p
                className={cn(
                  "text-[16px] leading-[24px] font-semibold text-white max-xl:hidden",
                  { "!text-white": isActive }
                )}
              >
                {links.label}
              </p>
            </Link>
          );
        })}
        {/* userinfo and logout */}
      </nav>
      {/* footer */}
    </section>
  );
};

export default Sidebar;
