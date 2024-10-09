import React from "react";
import { GiCheckMark } from "react-icons/gi";
import Image from "next/image";
import percentage from "@public/images/percentage.svg";

export interface FeatureListProps {
  image?: string;
  title?: string;
  features?: string[];
}
export const FeatureList = (props: FeatureListProps) => {
  return (
    <div className="flex flex-col w-full px-2">
      <div className="flex items-center gap-2 py-3 ml-[-10px]">
        <Image
          src={props.image!}
          alt="hero image"
          width={60}
          height={60}
          className="shadow-lg rounded-[30px]"
        />
        <div className="text-[18px] font-bold">{props.title}</div>
      </div>
        {props.features?.map((feature: any, index: number) => (
          <div className="flex items-center p-2" key={`${props.title?.trim()}-${index}`}>
            <GiCheckMark
              size={24}
              color="white"
              className="bg-[#0373dd] p-1 rounded-full mr-1"
            />
            <div className="text-sm">{feature}</div>
          </div>
        ))}
    </div>
  );
};
