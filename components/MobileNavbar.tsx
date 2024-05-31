"use client";

import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type MobileNavbarProps = {
  user?: string; //have to be type User later.
};

const MobileNavbar: React.FC<MobileNavbarProps> = ({ user }) => {
  const pathName = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src={"/icons/hamburger.svg"}
            alt="sheet icon"
            width={24}
            height={24}
            className="cursor-pointer brightness-[5]"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-sidebar-1">
          <Link href={"/"} className="flex cursor-pointer items-center gap-2">
            <Image
              src={"/icons/logo-white.png"}
              alt="Optilogic Logo"
              width={100}
              height={100}
            />
          </Link>
          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((links) => {
                  const isActive =
                    pathName === links.route ||
                    pathName.startsWith(`${links.route}/`);
                  return (
                    <SheetClose asChild key={links.route}>
                      <Link
                        href={links.route}
                        key={links.label}
                        className={cn(
                          "flex gap-3 items-center p-4 rounded-lg w-full max-w-60",
                          { "bg-primary-400": isActive }
                        )}
                      >
                        <div className="relative size-6 brightness-[3]">
                          <Image
                            src={links.imgUrl}
                            alt={links.label}
                            width={24}
                            height={24}
                            className={cn({
                              "brightness-[3] invert-0": isActive,
                            })}
                          />
                        </div>
                        <p
                          className={cn(
                            "text-[16px] font-semibold text-white",
                            { "!text-white": isActive }
                          )}
                        >
                          {links.label}
                        </p>
                      </Link>
                    </SheetClose>
                  );
                })}
                {/* userdata */}
              </nav>
            </SheetClose>
            {/* footer */}
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNavbar;
