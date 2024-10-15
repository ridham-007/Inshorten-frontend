import Content from "@/components/content";
import DynamicUrl from "@/components/dynamic-url";
import React from "react";

const DynamicUrlLayout = () => {
  return (
    <>
      <div className="flex flex-col  w-full">
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
