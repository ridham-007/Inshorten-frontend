"use client";
import Link from "next/link";
import Logo from "@/components/logo";
import { RiFacebookFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { FaRegCopyright, FaXTwitter, FaYoutube } from "react-icons/fa6";
import CustomButton from "@/components/ui/custom-buttom";
import { ActionResponse, AVAILABLE_LANGUAGE } from "@/type-identifier";
import { useFormState } from "react-dom";
import { subscribeNewsSettler } from "@/app/actions";
import { useEffect, useState } from "react";
const Cookies = require("js-cookie");
import { animateScroll } from "react-scroll";
import { Locale } from "@/i18n-config";
import { usePathname } from "next/navigation";
import { div } from "framer-motion/m";
export default function Footer() {
  const pathname = usePathname();

  const [currentLocale, setCurrentLocale] = useState<Locale>("en");
  const [dictionary, setDictionary] = useState<Record<string, string>>({});

  const [state, formAction] = useFormState<ActionResponse<void>, FormData>(
    subscribeNewsSettler,
    null
  );
  const navData = [
    { title: "Disclaimer", href: "/disclaimer" },
    {
      title: "Terms & Condition",
      href: "/terms-conditions",
    },
    {
      title: "Privacy Policy",
      href: "/privacy-policy",
    },
  ];

  const setTheLanguage = () => {
    AVAILABLE_LANGUAGE.forEach((lang) => {
      if (pathname.includes(`/${lang}`)) {
        setCurrentLocale(lang as Locale);
      }
    });
  };

  useEffect(() => {
    if (document) {
      const showFooter = Cookies.get("show");
      if (showFooter) {
        setTimeout(() => {
          animateScroll.scrollToBottom({
            duration: 8000,
            smooth: "easeIn",
          });
        }, 3000);
      }
    }

    // bind the language
    setTheLanguage();
  }, []);

  return (
    <div className="py-7">
      <footer
        key={Math.random()}
        id="footer"
        className={`flex flex-col h-auto w-full bg-[#fff] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-md p-5 `}
      >
        <div className="flex flex-col md:flex-row w-full justify-between gap-4">
          <div className="flex">
            <Logo imageClass="w-[50px] h-[53px]"></Logo>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 md:gap-5 text-[14px] sm:text-[16px] md:justify-center md:items-center">
            {navData.slice(0, 3).map((link: any, index) => (
              <Link
                href={link.href}
                target="_blank"
                key={index}
                className="font-medium hover:text-[#0B80E0] !text-nowrap "
                onClick={(e) => {
                  if (!e.ctrlKey && !e.metaKey) {
                    e.preventDefault();
                    location.href = `${link.href}`;
                  }
                }}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex justify-center border-t border-gray-300 mt-5 pt-5 text-[14px] sm:text-[16px] text-nowrap">
          <FaRegCopyright className="mr-2 text-[19px] sm:text-[20px]" /> 2024 by
          InShorten. All Right Reserved.
        </div>
      </footer>
    </div>
  );
}
