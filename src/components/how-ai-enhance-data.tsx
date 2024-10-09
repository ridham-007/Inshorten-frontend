'use client'
import { useDictionary } from "@/context/dictionary-provider";
import React from "react";

export const HowAIEnhanceData = () => {
  const dictionary = useDictionary();
  const data = {
    title: dictionary.how_quality_enhance_question,
    description: dictionary.how_quality_enhance_short_answer,
    details: [
      {
        key: dictionary.how_quality_enhance_1,
        value:dictionary.how_quality_enhance_1_info
      },
      {
        key: dictionary.how_quality_enhance_2,
        value:dictionary.how_quality_enhance_2_info
      },
      {
        key: dictionary.how_quality_enhance_3,
        value:dictionary.how_quality_enhance_3_info
      },
      {
        key: dictionary.how_quality_enhance_4,
        value:dictionary.how_quality_enhance_4_info
      },
      {
        key: dictionary.how_quality_enhance_5,
        value:dictionary.how_quality_enhance_5_info
      },
      {
        key: dictionary.how_quality_enhance_6,
        value:dictionary.how_quality_enhance_6_info
      },
    ],
  };
  return (
    <div className="flex flex-col w-full px-5 md:px-10 py-3">
      <div className="text-xl lg:text-3xl font-semibold">{data.title}</div>
      <div className="py-5">{data.description}</div>
      {data.details.map((cur: any, index: number) => (
        <div
          className="flex-row font-semibold ml-5 list-item py-1"
          key={`how-ai-enhance-${index}`}
        >
          {cur.key}
          <span className="contents font-normal">{` - ${cur.value} `}</span>
        </div>
      ))}
    </div>
  );
};
