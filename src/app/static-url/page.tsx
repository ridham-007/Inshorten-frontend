import StaticUrl from "@/components/static-url";
import Content from "@/components/content";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Url Link Shortener | create a link shortener- InShorten",
  description: "Create a short URL for easy to share on sites , URL Link Shortener use for manage your link its free, easy and fast tool.",
  keywords:"url link shortener, create a short url, url shortening service",
  openGraph: {
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/static-url`,
    type: "website",
    title: "Url Link Shortener | create a link shortener- InShorten",
    description: "Create a short URL for easy to share on sites , URL Link Shortener use for manage your link its free, easy and fast tool.",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/static-url`
  }
};

const StaticUrlLayout = () => {
  return (
    <div className="flex flex-col w-full gap-12 my-14">
      <StaticUrl />
      <Content
        title="A fast and simple URL shortener"
        description="InShorten allows to shorten long links from Instagram, Facebook, YouTube, Twitter, Linked In, WhatsApp, TikTok, blogs and sites."
      />
    </div>
  );
};
export default StaticUrlLayout;
