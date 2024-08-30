"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaRegUserCircle } from "react-icons/fa";
import {
  RiHome5Line,
  RiLogoutBoxRLine,
  RiSettings4Line,
  RiUser2Line,
  RiUserLine,
} from "react-icons/ri";
import { VscOrganization } from "react-icons/vsc";

export default function NavLinks() {
  const iconStyle = "relative size-6 text-gray-300";
  const menuItems = [
    {
      title: "MENU",
      items: [
        {
          icon: <RiHome5Line className={iconStyle} />,
          path: "/dashboard",
          label: "Home",
        },
        {
          icon: <RiUserLine className={iconStyle} />,
          path: "/list/users",
          label: "Users",
        },
        {
          icon: <RiUser2Line className={iconStyle} />,
          path: "/list/persons",
          label: "Persons",
        },
        {
          icon: <VscOrganization className={iconStyle} />,
          path: "/list/organizations",
          label: "Organizations",
        },
      ],
    },
    {
      title: "OTHER",
      items: [
        {
          icon: <FaRegUserCircle className={iconStyle} />,
          path: "/profile",
          label: "Profile",
          // visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: <RiSettings4Line className={iconStyle} />,
          path: "/settings",
          label: "Settings",
          // visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: <RiLogoutBoxRLine className={iconStyle} />,
          path: "/logout",
          label: "Logout",
          // visible: ["admin", "teacher", "student", "parent"],
        },
      ],
    },
  ];

  return (
    <div className="mt-4 lg:mt-2 text-sm">
      {menuItems.map((mitem) => (
        <div className="flex flex-col gap-2 my-2" key={mitem.title}>
          <span className="hidden lg:block text-gray-100 font-medium my-4">
            {mitem.title}
          </span>
          {mitem.items.map((item) => (
            <Link
              href={item.path}
              key={item.label}
              className="flex items-center justify-center lg:justify-start gap-4 text-white py-2"
            >
              {item.icon}
              <span className="hidden lg:block">{item.label}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}
