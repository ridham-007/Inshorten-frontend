'use client'
import Link from "next/link";
import ImageWithFallback from "./image-with-fallback";
import { useRouter } from "next/navigation";
import { GoChevronRight } from "react-icons/go";


export interface NewsWallProps {
  title: string
  news: {
    title: string;
    featureImage: string;
    createdAt?: string;
    slug: string;
  }[];
}
export default function DynamicNewsWall(props: NewsWallProps) {
  const router = useRouter();
  const formatDate = (date: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return (new Date(date))?.toLocaleDateString("en-US", options);
  }

  return (
    <div className="flex flex-col h-auto p-5 md:border-l-[1px] news mt-5 blog-list">
      <div className="flex items-center text-[20px] font-semibold md:text-[20px] text-foreground pb-2 cursor-pointer">{props.title}<GoChevronRight size={24} className="ml-3" /></div>
      {props.news?.map((cur: any, index) => {
        return (
          <Link
            className="flex flex-col"
            key={`${props.title}-${index}`}
            href={cur.slug}
            target="_blank"
            onClick={(e) => {
              if (!e.ctrlKey && !e.metaKey) {
                e.preventDefault();
                location.href = `/blog/${cur.slug}`;
              }
            }}
          >
            <hr className="py-2 text-[#e3e3e3]"></hr>
            <label
              key={`${cur.title}-${index}`}
              className="flex flex-row items-start cursor-pointer gap-[10px]"
            >
              <div className="flex flex-col basis-[80%] min-h-[40px] gap-[5px] overflow-hidden">
                <div className="flex flex-grow font-medium basis-full flex-col">
                  <p className="text-[14px] text-foreground md:text-[14px] text-ellipsis line-clamp-2 font-semibold">
                    {cur?.title}
                  </p>
                </div>
              </div>
              <div className="flex basis-[20%] overflow-hidden w-full h-full">
                <ImageWithFallback
                  alt={`article-placeholder-${index}`}
                  src={cur?.featureImage}
                ></ImageWithFallback>
              </div>
            </label>
            <label className="flex text-sm font-normal news gap-2 whitespace-nowrap py-1 text-[#444746]">
              {formatDate(cur?.updatedAt)}
              <span className="font-medium">
                Read
              </span>
            </label>
          </Link>
        );
      })}
    </div>
  );
}

export function DynamicNewsWallSkeleton(props: { label: string }) {
  return (
    <div className="flex flex-col h-auto p-5 border-l-[1px] mt-5">
      <div className="h-[30px] w-full md:h-[33px] items-center">
        <div className="flex h-6 flex-1 bg-[#d1d5db] rounded-full animate-pulse"></div>
      </div>
      {Array(5)
        .fill(null)
        ?.map((index) => {
          return (
            <div className="flex flex-col" key={`${props.label}-${index}`}>
              <hr className="py-2"></hr>
              <div
                key={`${index}-shimmer`}
                className="flex flex-row gap-[10px]"
              >
                <div className="flex flex-col flex-1 basis-[80%] justify-around">
                  <p className="h-[14px] bg-[#d1d5db] rounded-full animate-pulse"></p>
                  <p className="h-[14px] bg-[#d1d5db] rounded-full animate-pulse"></p>
                </div>
                <div className="flex basis-[20%] overflow-hidden w-full h-full">
                  <ImageWithFallback alt={`article-placeholder-${index}`} src={'/preview.jpg'}></ImageWithFallback>
                </div>
              </div>
              <div className="flex h-7 py-1">
                <p className="flex flex-1 h-4 max-w-[50%] bg-[#d1d5db] rounded-full animate-pulse"></p>
              </div>
            </div>
          );
        })}
    </div>
  );
}
