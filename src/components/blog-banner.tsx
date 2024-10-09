"use client";
import React from "react";
import ImageWithFallback from "@/components/image-with-fallback";
import Link from "next/link";
import { GoChevronRight } from "react-icons/go";
import Image from "next/image";
import { useRouter } from "next/navigation";
import AdCustom from "./AdCustom";
import { info } from "@/utils/ads";

export interface BLogProps {
  articles: {
    title: string;
    Image: string;
    featureImage: string;
    createdAt?: string;
    slug: string;
  }[];
}

export const BlogBanner = (props: BLogProps) => {
  const router = useRouter();
  return (
    <>
      <div className="mt-4">
      <AdCustom
        dataAdId={info.RESPONSIVE_ADS_2.id}
        width={info.RESPONSIVE_ADS_2.width}
        height={info.RESPONSIVE_ADS_2.height}
      />
        <div className="w-full gap-[15px] flex flex-col p-[20px] rounded-xl mt-[40px]">
          <div className="flex flex-row flex-wrap w-[100%] md:flex-nowrap gap-[20px]">
            <div className="flex flex-col sm:flex-row cursor-pointer basis-full flex-0 justify-around gap-[10px]">
              {props.articles?.slice(3, 5).map((item: any, index: any) => (
                <Link
                  href={`/blog/${item.slug}`}
                  key={`CategoryWiseTopNews-${index}`}
                  target="_blank"
                  className="flex flex-col flex-1 cursor-pointer rounded-sm"
                  onClick={(e) => {
                    if (!e.ctrlKey && !e.metaKey) {
                    e.preventDefault();
                    location.href = `/blog/${item.slug}`;
                    }
                  }}
                >
                  <div className="flex flex-col basis-[90%] flex-1 space-y-1.5 p-6 px-2 py-3">
                    <div className="flex basis-[70%] flex-1 flex-col font-semibold leading-none tracking-tight">
                      <div className="block w-full h-full relative">
                        <ImageWithFallback
                          alt={`CategoryWiseTopNews-${index}-alt`}
                          src={item?.featureImage}
                        ></ImageWithFallback>
                      </div>
                    </div>
                  </div>
                  <div className="flex text-[16px] text-foreground font-medium overflow-hidden px-2 pb-2">
                    <div className="line-clamp-2 text-sm text-muted-foreground">
                      {item?.title}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="flex basis-full md:basis-[33%] flex-shrink-0 flex-col justify-evenly">
              {props.articles?.slice(0, 3).map((cur: any, index: number) => {
                function setImgSrc(arg0: string) {
                  throw new Error("Function not implemented.");
                }

                return (
                  <div
                    key={index}
                    className="flex flex-col overflow-hidden "
                  >
                    <Link
                      href={`/blog/${cur.slug}`}
                      className="flex flex-row text-[14px] cursor-pointer text-[#444746] text-ellipsis line-clamp-3 gap-2 items-center"
                      target="_blank"
                      onClick={(e) => {
                        if (!e.ctrlKey && !e.metaKey) {
                        e.preventDefault();
                        location.href = `/blog/${cur.slug}`;
                        }
                      }}
                    >
                      <div className="block w-[80px] h-[60px] relative">
                        <ImageWithFallback
                          src={cur.featureImage}
                          alt={`CategoryWiseTopNews-${index}-alt`}
                        />
                      </div>

                      {cur.title}
                    </Link>
                    <hr className="my-[10px] text-[#e3e3e3]" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <AdCustom
        dataAdId={info.RESPONSIVE_ADS_4.id}
        width={info.RESPONSIVE_ADS_4.width}
        height={info.RESPONSIVE_ADS_4.height}
      />
      </div>
    </>
  );
};

export function BlogBannerSkeleton() {
  return (
    <div className="w-full gap-[15px] flex flex-col p-[20px] rounded-xl border bg-card text-card-foreground shadow mt-[40px]">
      <div className="flex flex-row flex-wrap w-[100%] md:flex-nowrap gap-[20px]">
        <div className="flex flex-col sm:flex-row cursor-pointer basis-full flex-0 justify-around gap-[10px]">
          {Array(2)
            .fill(null)
            ?.map((index) => {
              return (
                <div
                  key={`CategoryWiseTopNews-${index}`}
                  className="flex flex-col flex-1 cursor-pointer rounded-sm border bg-card text-card-foreground shadow"
                >
                  <div className="flex flex-col basis-[90%] flex-1 space-y-1.5 p-6 px-2 py-3">
                    <div className="flex basis-[70%] flex-1 flex-col font-semibold leading-none tracking-tight">
                      <div className="block w-full h-full relative">
                        <ImageWithFallback
                          alt={`CategoryWiseTopNews-${index}-alt`}
                          src={"/images/preview.jpg"}
                        ></ImageWithFallback>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col basis-[10%] px-2 py-2 gap-1">
                    <div className="w-full h-4 bg-[#d1d5db] animate-pulse rounded-sm"></div>
                    <div className="w-full h-4 bg-[#d1d5db] animate-pulse rounded-sm"></div>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="flex basis-full md:basis-[33%] flex-shrink-0 flex-col">
          {Array(3)
            .fill(null)
            ?.map((index) => {
              return (
                <div key={index}>
                  <div className="flex flex-col gap-[5px] w-full">
                    <div className="md:w-[300px] h-[17px] rounded-sm bg-[#d1d5db] animate-pulse"></div>
                    <div className="md:w-[300px] h-[17px] rounded-sm bg-[#d1d5db] animate-pulse"></div>
                    <div className="md:w-[300px] h-[17px] rounded-sm bg-[#d1d5db] animate-pulse"></div>
                  </div>
                  <hr className="my-[10px] text-[#e3e3e3]" />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
