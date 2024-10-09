'use client';

import { getArticleList } from '@/app/actions';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import ImageWithFallback from './image-with-fallback';
import Image from 'next/image';

const gradientColors = [
  "linear-gradient(135deg,#d4e9bc 0,#f2f5c0 100%)",
  "linear-gradient(135deg,#fbd0b8 0,#fcdcbe 48%,#fcdcbe 49%,#fceac3 100%)",
  "linear-gradient(33deg,#e2c8df,#f2ced8)",
  "linear-gradient(218deg,#c9dae7 0,#ebeff9 100%)",
  "linear-gradient(135deg,#ffafbd 0,#ffc3a0 100%)",
  "linear-gradient(135deg,#1c92d2 0,#f2fcfe 100%)"
];

const MarketingCard = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const articleResponse = await getArticleList('recent');
      setData(articleResponse?.data || []);
    } catch {
      console.error("Error fetching articles");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-row justify-start w-full h-auto py-10 px-16 overflow-x-auto md:py-5 lg:px-20 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
      {data?.map((item: any, index: number) => {
        const isLastCard = index === data.length - 1;
        const background = gradientColors[index % gradientColors.length];

        return (
          <Link
            key={index}
            href={`/blog/${item.slug}`}
            className={`min-w-[200px] gap-5 cursor-pointer max-w-[230px] ml-[-50px] min-h-[290px] flex flex-col rounded-2xl p-5 transition-transform duration-300 ease-in-out transform hover:translate-y-[-1rem] hover:rotate-3 ${!isLastCard ? 'hover:mr-14' : ''}`}
            style={{
              background: background,
              boxShadow: '0px 8px 24px 4px rgba(0,0,0,0.1),0px 2px 2px 0px rgba(0,0,0,0.1)',
            }}
          >
            {/* <div>
              <ImageWithFallback
                src={item?.featureImage}
                alt='Image not found'
              />
            </div> */}
            <Image
              src={item.featureImage || "/images/preview.jpg"}
              alt='not found'
              width={200}
              height={100}
              className='rounded-md h-[110px]'
            />
            <h2 className="text-[#1d1d1f] text-[18px] leading-7 font-bold text-ellipsis line-clamp-3">
              {item.title}
            </h2>
          </Link>
        );
      })}
    </div>
  );
};

export default MarketingCard;
