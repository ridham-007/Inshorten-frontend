"use client";
import { useDictionary } from "@/context/dictionary-provider";
import Link from "next/link";
import React from "react";
import UnitedState from "../../public/images/united-states.png";
import Spain from "../../public/images/spain.png";
import Portugal from "../../public/images/portugal.png";
import Russia from "../../public/images/russia.png";
import Germany from "../../public/images/germany.png";
import Italy from "../../public/images/italy.png";
import Indonesia from "../../public/images/indonesia.png";
import Japan from "../../public/images/japan.png";
import Franch from "../../public/images/france.png";
import Turkey from "../../public/images/turkey.png";
import Denmark from "../../public/images/denmark.png";
import Image from "next/image";

export const LanguageAvailability = () => {
  const dictionary = useDictionary();
  const data = [
    {
      imageSrc: UnitedState.src,
      language: "English - ",
      title: "Plagiarism Checker",
      href: "/en",
    },
    {
      imageSrc: Spain.src,
      language: "Español - ",
      title: "Comprobador de plagio",
      href: "/es",
    },
    {
      imageSrc: Portugal.src,
      language: "Português - ",
      title: "Verificador de plágio",
      href: "/pt",
    },
    {
      imageSrc: Russia.src,
      language: "русский - ",
      title: "Проверка плагиата",
      href: "/ru",
    },
    {
      imageSrc: Germany.src,
      language: "Deutsche - ",
      title: "Plagiatsprüfer",
      href: "/de",
    },
    {
      imageSrc: Italy.src,
      language: "Italiano - ",
      title: "Controllo del plagio",
      href: "/it",
    },
    {
      imageSrc: Indonesia.src,
      language: "Indonesian - ",
      title: "Pemeriksa Plagiarisme",
      href: "/id",
    },
    {
      imageSrc: Japan.src,
      language: "日本語 - ",
      title: "盗作チェッカー",
      href: "/ja",
    },
    {
      imageSrc: Franch.src,
      language: "French - ",
      title: "Vérificateur de plagiat",
      href: "/fr",
    },
    {
      imageSrc: Turkey.src,
      language: "Turkish - ",
      title: "İntihal Denetleyicisi",
      href: "/tr",
    },
    {
      imageSrc: Denmark.src,
      language: "Danish - ",
      title: "Plagiatkontrol",
      href: "/da",
    },
  ];
  return (
    <div className="flex flex-col p-[25px] gap-2 rounded-md bg-gradient-to-tr from-[#EBF1F7] to-[#CCD6E2]">
      <div className="flex justify-center w-full p-[10px] font-semibold text-[20px] bg-white border rounded-md">
        {dictionary.language_availability}
      </div>
      <div className="flex flex-row flex-wrap w-full gap-2 text-wrap ">
        {data.map((item: any, index: number) => (
          <Link
            href={item.href}
            target="_blank"
            key={`language-support-${index}`}
            className="flex whitespace-wrap p-[10px] border text-start rounded-md bg-white hover:bg-gradient-to-br from-[#0B80E077] to-[#77b6e977] cursor-pointer"
            onClick={(e) => {
              if (!e.ctrlKey && !e.metaKey) {
                e.preventDefault();
                location.href = item.href;
              }
            }}
          >
            <label className="contents text-[#020503] cursor-pointer">
              <Image
                src={item.imageSrc}
                alt="State"
                width={23}
                height={23}
                style={{ marginRight: "8px" }}
              ></Image>
              {item.language}
              {item.title}
            </label>
          </Link>
        ))}
      </div>
    </div>
  );
};
