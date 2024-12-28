import StaticUrl from "@/components/static-url";
import Content from "@/components/content";
import React from "react";
import { Metadata } from "next";

const keywordsArray = [
  "url link shortener",
  "url shortening service",
  "create a short url",
  "best free url shortener",
  "link shortener for instagram",
  "url shortener for instagram",
  "link shortener instagram",
  "shorten url for free",
  "shorten url for twitter",
  "short url for youtube",
  "youtube shortcut link",
  "url shortener for facebook",
  "whatsapp url shortener",
  "google drive link shortener",
  "shorten website link",
  "google site shortener",
];

export const metadata: Metadata = {
  title: "Url Link Shortener | create a link shortener- InShorten",
  description:
    "Create a short URL for easy to share on sites , URL Link Shortener use for manage your link its free, easy and fast tool.",
  keywords: keywordsArray.toString(),
  openGraph: {
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/url-link-shortener`,
    type: "website",
    title: "Url Link Shortener | create a link shortener- InShorten",
    description:
      "Create a short URL for easy to share on sites , URL Link Shortener use for manage your link its free, easy and fast tool.",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/url-link-shortener`,
  },
};

const StaticUrlLayout = () => {
  return (
    <div className="flex flex-col w-full gap-12 my-14">
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          padding: "20px 0px",
          minHeight: "250px",
          gap: "50px",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {/* <div id="div-gpt-ad-1732541591461-0"></div>
        <div id="div-gpt-ad-1732541591461-1"></div> */}
      </div>
      <StaticUrl />
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          padding: "20px 0px",
          minHeight: "250px",
          gap: "50px",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {/* <div id="div-gpt-ad-1732541591461-2"></div>
        <div id="div-gpt-ad-1732541591461-3"></div> */}
      </div>
      <Content
        title="A fast and simple URL shortener"
        description="InShorten allows to shorten long links from Instagram, Facebook, YouTube, Twitter, Linked In, WhatsApp, TikTok, blogs and sites."
      />
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          padding: "20px 0px",
          minHeight: "250px",
          gap: "50px",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {/* <div id="div-gpt-ad-1732541591461-4"></div>
        <div id="div-gpt-ad-1732541591461-5"></div> */}
      </div>
    </div>
  );
};
export default StaticUrlLayout;
