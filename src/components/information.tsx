'use client';
import React from 'react';
import CustomButton from './ui/custom-buttom';
import Image from 'next/image';
import { PiLink, PiLinkSimpleBold } from 'react-icons/pi';
import { IoQrCodeOutline } from 'react-icons/io5';
import { useRouter } from 'next/navigation';

const Information = () => {
  const router = useRouter();

  const items = [
    {
      icon: <PiLink className="text-[32px]" />,
      title: 'Static URL ',
      description: 'Create short url links',
      route: '/static-url',
    },
    {
      icon: <PiLinkSimpleBold className="text-[32px]" />,
      title: 'Dynamic URL ',
      description: 'This url is editable',
      route: '/dynamic-url',
    },
    {
      icon: <IoQrCodeOutline className="text-[32px]" />,
      title: ' QR Code',
      description: 'Create QR Code',
      route: '/qr-code',
    },
  ];

  const handleRedirect = (route: any) => {
    router.push(route);
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row w-full mt-14 justify-between px-3 md:px-8 gap-7 ">
        <div className="flex flex-col w-full lg:max-w-[800px] gap-10">
          <div className="flex flex-col gap-1">
            <div className="text-[26px] sm:text-[28px] md:text-[35px] font-bold leading-[30px] md:leading-[40px] font-serif">
              Generate QR Codes & short Link with Inshorten
            </div>
            <div className="text-[14px] sm:text-[16px] text-gray-500 font-normal">
              Simple, Fast & Free. Bringing back the good days!
            </div>
          </div>
          <CustomButton
            label={'Generate Now'}
            className="!w-full max-w-[200px] bg-black"
          />
          <div className="flex flex-col gap-5">
            <div className="font-bold text-gray-700">Explore More</div>
            <div className="flex flex-wrap gap-4">
              {items.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleRedirect(item.route)}
                  className="flex w-auto gap-2 border border-gray-600 rounded-md p-2 justify-center items-center cursor-pointer bg-white"
                >
                  <div className="flex justify-center items-center">
                    {item.icon}
                  </div>
                  <div className="flex flex-col">
                    <div className="text-[16px] md:text-[17px] text-gray-700 font-semibold">
                      {item.title}
                    </div>
                    <div className="w-full max-w-[150px] text-[11px] md:text-[12px] text-gray-500 font-normal">
                      {item.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center sm:justify-end xl:mr-20">
          <Image
            src="/images/homepage-QR.webp"
            width={400}
            height={400}
            alt="QR code image"
            className="lg:self-start w-[400px] h-[300px] sm:w-[700px] sm:h-[400px]"
          />
        </div>
      </div>
    </>
  );
};
export default Information;
