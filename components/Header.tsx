"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GiCat } from "react-icons/gi";
import { AiOutlineMenu } from "react-icons/ai";
import { menus } from "@/config";

export const Header = () => {
  const pathname = usePathname();
  return (
    <div className="flex justify-between items-center py-4">
      <Link
        href="/"
        className="flex flex-1 items-center text-gray-900 no-underline"
      >
        <GiCat size={36} />

        <div className="hidden ml-2 text-2xl sm:block font-medium">
          RongqingBlog
        </div>
      </Link>
      <div className="flex items-center">
        <div className="hidden sm:block">
          {menus.map((menu) => (
            <Link
              key={menu.path}
              className={`
                pr-2 font-semibold sm:pr-6 no-underline hover:text-purple-900
                ${
                  pathname.startsWith(menu.path)
                    ? "text-purple-900"
                    : "text-gray-900"
                }
              `}
              href={menu.path}
            >
              {menu.title}
            </Link>
          ))}
        </div>
        <AiOutlineMenu size={28} className="sm:hidden" />
      </div>
    </div>
  );
};
