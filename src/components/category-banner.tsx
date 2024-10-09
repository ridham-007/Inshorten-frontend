"use client";
import { useRouter } from "next/navigation";
import ImageWithFallback from "./image-with-fallback";
import Link from "next/link";
import AdCustom from "./AdCustom";
import { info } from "@/utils/ads";

export default function CategoryBanner({ articles }: any) {
  return (
    <>
      <div className="flex w-full flex-wrap justify-between gap-2 h-fit blog-list">
        {articles.slice(0).map((item: any, index: any) => {
          return (
            <Link
              href={`/blog/${item?.slug}`}
              target="_blank"
              key={`CategoryWiseTopNews-${index}`}
              className="flex flex-col flex-1 lg:basis-[32%] sm:basis-[49%] basis-[100%] lg:max-w-[32%] sm:max-w-[49%] cursor-pointer p-1 rounded-sm"
              // onClick={() => handleArticleOpen(item)}
              onClick={(e) => {
                if (!e.ctrlKey && !e.metaKey) {
                  e.preventDefault();
                  location.href = `/blog/${item.slug}`;
                }
              }}
            >
              <label className="flex flex-col basis-[90%] flex-1 px-2 py-3 space-y-1.5">
                <div className="flex basis-[70%] flex-1 flex-col font-semibold leading-none tracking-tight">
                  <div className="block w-full h-full relative cursor-pointer">
                    <ImageWithFallback
                      alt={`CategoryWiseTopNews-${index}-alt`}
                      src={item?.featureImage}
                    ></ImageWithFallback>
                  </div>
                </div>
                {item.description && (
                  <p className="w-[100%] text-sm cursor-pointer text-foreground text-ellipsis line-clamp-3 text-muted-foreground">
                    {item.description}
                  </p>
                )}
              </label>
              <label className="flex text-[16px] cursor-pointer text-foreground font-medium overflow-hidden px-2 pb-2">
                <div className="line-clamp-2 text-sm text-muted-foreground">
                  {item?.title}
                </div>
              </label>
            </Link>
          );
        })}
      </div>
      <AdCustom
        dataAdId={info.RESPONSIVE_ADS_1.id}
        width={info.RESPONSIVE_ADS_1.width}
        height={info.RESPONSIVE_ADS_1.height}
      />
    </>
  );
}

export function CategoryBannerSkeleton() {
  return (
    <div className="flex w-full flex-wrap justify-start gap-2">
      {Array(10)
        .fill(null)
        .map((item, index) => {
          return (
            <div
              key={`CategoryWiseTopNews-${index}`}
              className="flex flex-col flex-1 lg:basis-[32%] sm:basis-[49%] basis-[100%] lg:max-w-[32%] sm:max-w-[49%] cursor-pointer p-1 rounded-sm border bg-card text-card-foreground shadow"
            >
              <div className="flex flex-col basis-[90%] flex-1 px-2 py-3 space-y-1.5">
                <div className="flex basis-[70%] flex-1 flex-col font-semibold leading-none tracking-tight">
                  <div className="block w-full h-full relative">
                    <ImageWithFallback
                      alt={`CategoryWiseTopNews-${index}-alt`}
                      src={item?.image}
                    ></ImageWithFallback>
                  </div>
                </div>
                <div className="flex flex-col gap-2 basis-[30%] w-[100%] overflow-hidden py-[2px]">
                  <div className="w-full h-5 bg-[#d1d5db] animate-pulse rounded-sm"></div>
                  <div className="w-full h-5 bg-[#d1d5db] animate-pulse rounded-sm"></div>
                  <div className="w-full h-5 bg-[#d1d5db] animate-pulse rounded-sm"></div>
                </div>
              </div>
              <div className="flex basis-[10%] px-2">
                <div className="w-full h-5 bg-[#d1d5db] animate-pulse rounded-sm"></div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
