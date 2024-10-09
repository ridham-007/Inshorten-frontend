"use client";
import React, { useEffect, useState } from "react";
import parser from "html-react-parser";
import AdCustom from "./AdCustom";
import { createRoot } from "react-dom/client";
import { info } from "@/utils/ads";

const ShowArticle = ({ article }: any) => {
  const formatDate = (date: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(date)?.toLocaleDateString("en-US", options);
  };

  useEffect(() => {
    document.querySelectorAll("div").forEach(function (element) {
      if ((element?.textContent ?? "").trim().slice(-1) === "?") {
        element.style.fontWeight = "700"; // Example action
      }
    });
    document.querySelectorAll("p").forEach(function (element) {
      if ((element?.textContent ?? "").trim().slice(-1) === "?") {
        element.style.fontWeight = "700"; // Example action
      }
    });
  }, []);


  return (
    <div className="article-container">
      <AdCustom
        dataAdId={info.RESPONSIVE_ADS_3.id}
        width={info.RESPONSIVE_ADS_3.width}
        height={info.RESPONSIVE_ADS_3.height}
      />
      <div className="flex flex-col pb-2 mb-2 border-b border-[#e3e3e3]">
        <h2 className="font-semibold py-1">{article?.title}</h2>
        <div className="flex w-[100%] justify-start gap-[10px] pb-0 items-center">
          <div className="flex text-sm font-normal news gap-2 whitespace-nowrap py-1 text-[#444746]">
            {formatDate(article?.updatedAt)}
          </div>
        </div>
      </div>
      {article?.content &&
        parser(article.content, {
          replace(domNode: any) {
            if (domNode.attribs && domNode.attribs.id === "ads-div") {
              return (
                <AdCustom
                  dataAdId={info.RESPONSIVE_ADS_2.id}
                  width={info.RESPONSIVE_ADS_2.width}
                  height={info.RESPONSIVE_ADS_2.height}
                />
              );
            }
          },
        })}
      <AdCustom
        dataAdId={info.RESPONSIVE_ADS_1.id}
        width={info.RESPONSIVE_ADS_1.width}
        height={info.RESPONSIVE_ADS_1.height}
      />
    </div>
  );
};

export default ShowArticle;

export function ArticleSkeleton() {
  return (
    <div className="article-container !px-5">
      <div className="flex w-full flex-col gap-2">
        <div className="w-[160px] h-[35px] bg-[#d1d5db] animate-pulse rounded-sm"></div>
        {Array(12)
          .fill(null)
          .map((item, index) => {
            return (
              <div
                key={`CategoryWiseTopNewsSkeleton1-${index}`}
                className="flex flex-col basis-[98%] gap-2 w-[100%] overflow-hidden mt-[10px]"
              >
                <div className="w-[50%] h-[35px] bg-[#d1d5db] animate-pulse rounded-sm"></div>
                <div className="flex flex-col gap-2 px-[12px] py-[2px]">
                  <div className="w-full h-5 bg-[#d1d5db] animate-pulse rounded-sm"></div>
                  <div className="w-full h-5 bg-[#d1d5db] animate-pulse rounded-sm"></div>
                  <div className="w-full h-5 bg-[#d1d5db] animate-pulse rounded-sm"></div>
                </div>
              </div>
            );
          })}

        {/* <div className="flex flex-col basis-[98%] gap-2 w-[100%] overflow-hidden mt-[10px]">
                <div className="w-[50%] h-[35px] bg-[#d1d5db] animate-pulse rounded-sm"></div>
                <div className="flex flex-col gap-2 px-[12px] py-[2px]">
                  <div className="w-full h-5 bg-[#d1d5db] animate-pulse rounded-sm"></div>
                  <div className="w-full h-5 bg-[#d1d5db] animate-pulse rounded-sm"></div>
                  <div className="w-full h-5 bg-[#d1d5db] animate-pulse rounded-sm"></div>
                </div>
              </div> */}
      </div>
    </div>
  );
}
