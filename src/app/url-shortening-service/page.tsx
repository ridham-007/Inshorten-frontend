import Content from "@/components/content";
import DynamicUrl from "@/components/dynamic-url";
import { Metadata } from "next";
import React from "react";

const keywordsArray = [
  'url link shortener',
  'url shortening service',
  'create a short url',
  'best free url shortener',
  'link shortener for instagram',
  'url shortener for instagram',
  'link shortener instagram',
  'shorten url for free',
  'shorten url for twitter',
  'short url for youtube',
  'youtube shortcut link',
  'url shortener for facebook',
  'whatsapp url shortener',
  'google drive link shortener',
  'shorten website link',
  'google site shortener',
];

export const metadata: Metadata = {
  title: "Url shortening service |free url Shortener -InShorten",
  description: "Transform your long URLs into dynamic short links with our url shortening service. get simple and easy to use free url shortener.",
  keywords: keywordsArray.toString(),
  openGraph: {
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/url-shortening-service`,
    type: "website",
    title: "Url shortening service |free url Shortener -InShorten",
    description: "Transform your long URLs into dynamic short links with our url shortening service. get simple and easy to use free url shortener.",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/url-shortening-service`
  }
};


const DynamicUrlLayout = () => {
  return (
    <>
      <div className="flex flex-col w-full gap-12 my-14">
        <DynamicUrl />
        <Content
          title="A fast and simple Dynamic URL shortener"
          description=" Long links in social networks look awful, additionally, the system
              can cut off and transmit to the user in a half-finished form. A
              short link like InShorten looks very nice, very easy for
              copying, and even easuliar to remember. Statistics of each click
              you will also receive - regardless of where you place the link -
              in Facebook, Telegram or Twitter. Wrap in your short link."
        />
      </div>
    </>
  );
};
export default DynamicUrlLayout;
