import MobileNavbar from "@/components/MobileNavbar";
import Sidebar from "@/components/SideBar";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  const loggedIn = { firstName: "Test", lastName: "test2" };
  return (
    <main className="flex h-screen w-full">
      <Sidebar />
      <div className="flex size-full flex-col overflow-hidden">
        <div className="flex h-16 items-center justify-between p-5 shadow-creditCard sm:p-8 md:hidden bg-sidebar-1">
          <Link href={"/"} className="flex items-center">
            <Image
              src={"/icons/logo-white.png"}
              alt="small-device logo"
              width={65}
              height={65}
            />
          </Link>
          <div>
            <MobileNavbar />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
};

export default RootLayout;
