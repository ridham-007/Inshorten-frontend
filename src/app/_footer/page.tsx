"use client";
import Link from "next/link";
import Logo from "@/components/logo";
import { RiFacebookFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { FaRegCopyright, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { useDictionary } from "@/context/dictionary-provider";
import CustomButton from "@/components/ui/custom-buttom";
import { ActionResponse, AVAILABLE_LANGUAGE } from "@/type-identifier";
import { useFormState } from "react-dom";
import { subscribeNewsSettler } from "@/app/actions";
import { useEffect, useState } from "react";
const Cookies = require("js-cookie");
import { animateScroll } from "react-scroll";
import { Locale } from "@/i18n-config";
import { usePathname } from "next/navigation";
import { getDictionary } from "@/dictionaries";
export default function Footer() {
  const pathname = usePathname();

  const [currentLocale, setCurrentLocale] = useState<Locale>('en');
  const [dictionary, setDictionary] = useState<Record<string,string>>({});

  const [state, formAction] = useFormState<ActionResponse<void>, FormData>(
    subscribeNewsSettler,
    null
  );
  const navData = [
    { title: dictionary?.about_us ?? 'About Us', href: "/about-us" },
    { title: dictionary?.disclaimer ?? 'Disclaimer', href: "/disclaimer" },
    { title: dictionary?.terms_conditions ?? 'Terms & Condition', href: "/terms-conditions" },
    { title: dictionary?.privacy_policy ?? 'Privacy Policy', href: "/privacy-policy" },
  ];
  const socialLink = [
    {
      socialIcon: <RiFacebookFill size={24} color="white" />,
      href: "",
      ariaLabel: "facebook",
    },
    {
      socialIcon: <BsInstagram size={20} color="white" />,
      href: "",
      ariaLabel: "instagram",
    },
    {
      socialIcon: <FaXTwitter size={20} color="white" />,
      href: "",
      ariaLabel: "twitter",
    },
    {
      socialIcon: <FaYoutube size={20} color="white" />,
      href: "",
      ariaLabel: "youtube",
    },
  ];

  const setTheLanguage = ()=>{
    AVAILABLE_LANGUAGE.forEach((lang)=>{
      if(pathname.includes(`/${lang}`)){
        setCurrentLocale(lang as Locale);
      }
    })
  }


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

  useEffect(() => {
    // Function to handle clicks outside the wrapper
    getDictionary(currentLocale).then((dic)=>{
      if(!!dic){
        setDictionary(dic);
      }
    })
  }, [currentLocale]);

  return (
    <footer
      key={Math.random()}
      id="footer"
      className={`flex flex-col h-auto w-full bg-[#EBF1F7] py-5 px-5 md:px-10 mt-5`}
    >
      <div className="flex">
        <Logo imageClass="w-[50px] h-[53px]"></Logo>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col w-full lg:w-[33%] px-4">
          <div className="text-xl font-medium mt-5 mb-6">
            {dictionary.about_us}
          </div>
          <div className="mb-2">{dictionary.about_us_content}</div>
        </div>
        <div className="w-full lg:w-[33%] px-4 ">
          <div className="text-xl font-medium mt-5 mb-6">
            {dictionary.quick_link}
          </div>
          <div className="flex flex-col sm:flex-row">
            <div className="flex w-full flex-col">
              {navData.slice(0, 2).map((link: any, index) => (
                <Link
                  href={link.href}
                  target="_blank"
                  key={index}
                  className="w-full font-medium hover:text-[#0B80E0]"
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
            <div className="flex w-full flex-col">
              {navData.slice(2).map((link: any, index) => (
                <Link
                  href={link.href}
                  target="_blank"
                  key={index}
                  onClick={(e) => {
                    if (!e.ctrlKey && !e.metaKey) {
                      e.preventDefault();
                      location.href = `${link.href}`;
                    }
                  }}
                  className="w-full font-medium hover:text-[#0B80E0]"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center w-full lg:w-[33%] px-4 ">
          <div className="font-medium mt-5">
            {dictionary.subscribe_to_our_newsletter}
          </div>
          <form
            action={formAction}
            className="flex w-full bg-white rounded-3xl mt-4"
          >
            <input
              type="email"
              required
              placeholder={dictionary.enter_your_email}
              className="w-full bg-transparent p-3 outline-none pl-5"
            />
            <CustomButton
              type="submit"
              label={dictionary.subscribe}
              className="bg-gradient-to-br from-[#0B80E0] to-[#77b6e9] text-white font-medium px-5 md:px-12 lg:px-5 !rounded-3xl"
            ></CustomButton>
          </form>
        </div>
      </div>
      <div className="flex justify-center border-t border-gray-300 mt-5 pt-5">
        <FaRegCopyright size={24} className="mr-2"/> 2024 by BrainAITools. All
        Right Reserved.
      </div>
    </footer>
  );
}
