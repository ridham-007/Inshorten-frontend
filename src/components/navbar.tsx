"use client";

import Logo from "@/components/logo";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
export interface NavbarProps {}
export default function Navbar(props: NavbarProps) {
  let navData = [
    { title: "Blog", href: "/blog" },
    { title: "Disclaimer", href: "/disclaimer" },
  ];
  const hamburgerRef = React.useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <nav className="flex flex-col w-full h-[80px] justify-center relative z-[1000] bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-md">
      <div className="flex w-full justify-between items-center px-5 ">
        <Logo></Logo>
        <div className="flex items-center blog-list">
          {navData.map((tab: any, index) => (
            <Link
              key={`screen-header-${index}`}
              target="_blank"
              href={`${tab.href}`}
              className="hidden md:flex p-[10px] mr-[5px] rounded-[5px] cursor-pointer capitalize hover:text-[#0B80E0]"
              onClick={(e) => {
                if (!e.ctrlKey && !e.metaKey) {
                  e.preventDefault();
                  location.href = tab.href;
                }
              }}
            >
              {tab.title}
            </Link>
          ))}

          <RxHamburgerMenu
            size={24}
            className="md:hidden ml-[15px] cursor-pointer"
            onClick={() => handleOpen()}
          />
        </div>
      </div>

      {/* Navigation in Mobile */}
      <div
        ref={hamburgerRef}
        className={`bg-white absolute top-[60px] w-full py-0 md:opacity-0 md:max-h-[0px] transition-all duration-300 ${
          open ? "opacity-100 h-auto" : "opacity-0 max-h-[0px] rounded-md"
        }`}
      >
        <div
          className={`shadow-lg rounded-md flex-col mt-10 ${
            open ? "flex" : "hidden"
          }`}
        >
          {/* Render the menu  */}
          {navData.map((item: any, index: any) => (
            <Link
              href={`${item.href}`}
              target="_blank"
              key={`mobile-nav-${index}`}
              className="flex my-auto capitalize border-transparent text-center cursor-pointer w-full hover:text-[#0B80E0]"
              onClick={(e) => {
                if (!e.ctrlKey && !e.metaKey) {
                  e.preventDefault();
                  location.href = item.href;
                }
              }}
            >
              <label className="flex font-medium text-[14px] justify-center w-full p-2">
                {item.title}
              </label>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
