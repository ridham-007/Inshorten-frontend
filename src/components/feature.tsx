'use client';
import React from 'react';
import { MdOutlineSecurity } from 'react-icons/md';
import { MdManageSearch } from 'react-icons/md';
import { FaRegHand } from 'react-icons/fa6';
import { FaComputer } from 'react-icons/fa6';
import { GoThumbsup } from 'react-icons/go';
import { ImLink } from 'react-icons/im';
const featureData = [
  {
    icon: <GoThumbsup />,
    title: 'Easy',
    description:
      'ShortURL is easy and fast, enter the long link to get your shortened link',
  },
  {
    icon: <ImLink />,
    title: 'Shortened',
    description: 'Use any link, no matter what size, ShortURL always shortens',
  },
  {
    icon: <MdOutlineSecurity />,
    title: 'Secure',
    description:
      'It is fast and secure, our service has HTTPS protocol and data encryption',
  },
  {
    icon: <MdManageSearch />,
    title: 'Statistics',
    description: 'Check the number of clicks that your shortened URL received',
  },
  {
    icon: <FaRegHand />,
    title: 'Reliable',
    description:
      'All links that try to disseminate spam, viruses and malware are deleted',
  },
  {
    icon: <FaComputer />,
    title: 'Devices',
    description: 'Compatible with smartphones, tablets and desktop',
  },
];

const Feature = () => {
  return (
    <div className="flex flex-col w-full max-w-[1400px] mx-auto gap-20">
      <div className="flex flex-col">
        <div className="text-center text-[38px] font-semibold">Features</div>
        <div className="w-full max-w-[1000px] self-center text-center text-[16px] text-gray-600">
          With Inshorten urls, it is possible to create an intuitive tool for
          creating personalized QR codes. From a business QR code to an events
          QR code or even a personal QR code, all of this is easy to achieve,
          transforming any content into a scannable code in just a few seconds.
        </div>
      </div>

      {/* Feature Blocks */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center items-center">
        {featureData.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col gap-5 bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-5"
          >
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="text-[38px] bg-[#f1f1f2] p-2 rounded-md">
                {feature.icon}
              </div>
              <div className="text-[22px] font-serif font-semibold">
                {feature.title}
              </div>
            </div>
            <div className="text-[16px] text-gray-500 text-center">
              {feature.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
