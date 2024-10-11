import React from "react";
import Blog from "@/components/blog";

const BlogLayout = () => {
  return (
    <>
      <div className="flex flex-col w-full max-w-[1440px] self-center py-20">
        <Blog />
      </div>
    </>
  );
};
export default BlogLayout;
