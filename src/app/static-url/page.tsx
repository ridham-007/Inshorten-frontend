import StaticUrl from "@/components/static-url";
import Content from "@/components/content";
import React from "react";

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
