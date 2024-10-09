"use client";
import { useDictionary } from "@/context/dictionary-provider";
import React from "react";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { LuThumbsUp } from "react-icons/lu";
import { PiMedalFill } from "react-icons/pi";
import { TbCurrencyDollarOff } from "react-icons/tb";

const Offer = () => {
  const dictionary = useDictionary();
  const offers = [
    {
      id: 1,
      icon: <TbCurrencyDollarOff />,
      title: dictionary.what_we_offer_1_title,
      description: dictionary.what_we_offer_1_description,
    },
    {
      id: 2,
      icon: <AiFillSafetyCertificate />,
      title: dictionary.what_we_offer_2_title,
      description: dictionary.what_we_offer_2_description,
    },
    {
      id: 3,
      icon: <PiMedalFill />,
      title: dictionary.what_we_offer_3_title,
      description: dictionary.what_we_offer_3_description,
    },
    {
      id: 4,
      icon: <LuThumbsUp />,
      title: dictionary.what_we_offer_4_title,
      description: dictionary.what_we_offer_4_description,
    },
  ];

  return (
    <>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 w-full px-[20px] my-[30px] gap-2">
        {offers.map((offer) => (
          <div key={offer.id} className="flex flex-col items-center p-2">
            <div className="flex flex-col justify-center">
              <div className="flex text-[70px] border-[1px] bg-sky-300 border-sky-500 text-sky-800 h-[120px] w-[120px] justify-center items-center self-center rounded-full">
                {offer.icon}
              </div>
              <div className="flex text-[18px] font-bold self-center mt-[20px]">
                {offer.title}
              </div>
            </div>
            <p className="mt-[7px]">{offer.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Offer;
