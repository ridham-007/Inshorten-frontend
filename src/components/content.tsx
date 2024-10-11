"use client";
import { useRouter } from "next/navigation";

import React from "react";

const Content = ({ title, description }: any) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };
  return (
    <>
      <div className="flex flex-col w-full max-w-[1100px] mx-auto rounded-md bg-[#196091] text-white p-10 gap-8 mb-16">
        <div className="flex flex-col gap-2">
          <div className="text-[22px] sm:text-[25px] font-bold ">{title}</div>
          <div className="text-[14px] sm:text-[15px] w-full sm:max-w-[700px]">
            {description}
          </div>
        </div>
        <div
          className="flex justify-center items-center rounded-sm w-[150px] border border-white p-2 cursor-pointer"
          onClick={handleClick}
        >
          InShorten
        </div>
      </div>
    </>
  );
};

export default Content;
