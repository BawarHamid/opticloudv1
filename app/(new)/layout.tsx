"use client";
import Navbar from "@/components/new/Navbar";
import Sidebar from "@/components/new/Sidebar";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [screenSize, setScreenSize] = useState("lg");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1280) {
        setScreenSize("xl");
      } else if (width >= 1024) {
        setScreenSize("lg");
      } else if (width >= 768) {
        setScreenSize("md");
      } else {
        setScreenSize("sm");
      }
    };

    // Set the initial screen size
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="h-fit min-h-screen flex">
      {/* Left-side div */}
      <div className="w-[14%] md:w-[10%] lg:w-[16%] xl:w-[14%] p-4 bg-[#3C4455]">
        <Link
          href={"/dashboard"}
          className="flex justify-center items-center p-2"
        >
          {screenSize === "sm" || screenSize === "md" ? (
            <Image
              src={"/icons/tandhjul1.png"}
              alt="Optilogic Logo"
              width={65}
              height={65}
            />
          ) : (
            <Image
              src={"/icons/logo-white.png"}
              alt="Optilogic Logo"
              width={105}
              height={105}
            />
          )}
        </Link>
        <Sidebar />
      </div>
      {/* right-side div */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll flex flex-col">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
