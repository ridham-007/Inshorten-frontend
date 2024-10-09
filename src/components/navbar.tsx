"use client";

import Logo from "@/components/logo";
import { getDictionary } from "@/dictionaries";
import { Locale } from "@/i18n-config";
import { AVAILABLE_LANGUAGE } from "@/type-identifier";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { TiWorld } from "react-icons/ti";
export interface NavbarProps {
}
export default function Navbar(props: NavbarProps) {
  const pathname = usePathname();

  const [currentLocale, setCurrentLocale] = useState<Locale>('en');
  const [dictionary, setDictionary] = useState<Record<string,string>>({});

  let navData = [
    { title: dictionary?.about_us ?? 'About Us', href: "/about-us" },
    { title: dictionary?.disclaimer ?? 'Disclaimer', href: "/disclaimer" },
    { title: dictionary?.blog ?? 'Blog', href: "/blog" },
  ];
  const hamburgerRef = React.useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const setTheLanguage = ()=>{
    AVAILABLE_LANGUAGE.forEach((lang)=>{
      if(pathname.includes(`/${lang}`)){
        setCurrentLocale(lang as Locale);
      }
    })
  }

  useEffect(() => {
    // Function to handle clicks outside the wrapper
    const handleClickOutside = (event: any) => {
      if (
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // bind the language
    setTheLanguage();

    // Cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Function to handle clicks outside the wrapper
    getDictionary(currentLocale).then((dic)=>{
      if(!!dic){
        setDictionary(dic);
      }
    })
  }, [currentLocale]);

  return (
    <nav className="flex flex-col w-full h-[60px] shadow-sm justify-center relative z-[1000]">
      <div className="flex w-full justify-between items-center px-5">
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
          <div className="flex">
            <TiWorld size={24} />
            {currentLocale}
          </div>
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
        className={`absolute top-[60px] w-full py-0 md:opacity-0 md:max-h-[0px] transition-all duration-300 ${
          open ? "opacity-100 h-auto" : "opacity-0 max-h-[0px]"
        }`}
      >
        <div className={`shadow-lg flex-col bg-white ${open ? "flex" : "hidden"}`}>
          {navData.map((item: any, index: any) => (
            <Link
              href={`${item.href}`}
              target="_blank"
              key={`mobile-nav-${index}`}
              className="flex my-auto capitalize border-transparent text-center cursor-pointer w-full  hover:text-[#0B80E0]"
              onClick={(e) => {if (!e.ctrlKey && !e.metaKey) { e.preventDefault(); location.href = item.href }}}
            >
              <label className="flex font-medium text-[14px] justify-center w-full py-3">
                {item.title}
              </label>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
