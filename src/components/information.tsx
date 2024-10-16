"use client";
import React from "react";
import CustomButton from "./ui/custom-buttom";
import Image from "next/image";
import { PiLink, PiLinkSimpleBold } from "react-icons/pi";
import { IoQrCodeOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

const Information = () => {
  const router = useRouter();

  const items = [
    {
      icon: <PiLink className="text-[26px] sm:text-[30px]" />,
      title: "Static URL ",
      description: "Create short url",
      route: "/static-url",
    },
    {
      icon: <PiLinkSimpleBold className="text-[26px] sm:text-[30px]" />,
      title: "Dynamic URL ",
      description: "This url is editable",
      route: "/dynamic-url",
    },
    {
      icon: <IoQrCodeOutline className="text-[26px] sm:text-[30px]" />,
      title: " QR Code",
      description: "Create QR Code",
      route: "/qr-code",
    },
  ];

  const handleRedirect = (route: any) => {
    router.push(route);
  };
  const handleStaticUrl = () => {
    router.push("/static-url");
  };

  return (
    <div className="flex flex-col lg:flex-row w-full justify-around gap-7">
      <div className="flex flex-col basis-[50%] max-h-fit gap-10 px-1 sm:px-10">
        <div className="flex flex-col gap-1 lg:justify-start justify-center">
          <div className="text-[26px] sm:text-[28px] md:text-[35px] font-bold leading-[30px] md:leading-[40px] md:text-left text-center ">
            Generate QR Codes & short Link with InShorten
          </div>
          <div className="text-[14px] sm:text-[16px] text-gray-500 font-normal md:text-left text-center ">
            Simple, Fast & Free. Bringing back the good days!
          </div>
        </div>
        <CustomButton
          label={"Generate Now"}
          className="!w-full max-w-[200px] bg-black md:self-start self-center"
          onClick={handleStaticUrl}
        />
        <div className="flex w-full flex-col gap-5">
          <div className="flex font-bold text-gray-700 justify-center lg:justify-start">
            Explore More
          </div>
          <div className="flex w-full flex-row flex-wrap gap-4 justify-center lg:justify-start">
            {items.map((item, index) => (
              <div
                key={index}
                onClick={() => handleRedirect(item.route)}
                className="flex w-full max-w-[180px] h-[60px] gap-1 border border-gray-600 rounded-md  justify-center items-center cursor-pointer bg-white p-2"
              >
                <div className="flex justify-center items-center">
                  {item.icon}
                </div>
                <div className="flex flex-col">
                  <div className="text-[15px] md:text-[16px] text-gray-700 font-semibold text-nowrap">
                    {item.title}
                  </div>
                  <div className="w-full max-w-[150px] text-[11px] md:text-[12px] text-gray-500 font-normal text-nowrap">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex basis-[50%] justify-center max-h-fit">
        <Image
          src="/images/homepage-QR.webp"
          width={400}
          height={400}
          alt="QR code image"
          className="lg:self-start w-[400px] h-[300px] sm:w-[700px] sm:h-[400px]"
        />
      </div>
    </div>
  );
};
export default Information;
