import { BlogBanner, BlogBannerSkeleton } from "@/components/blog-banner";
import CategoryBanner, {
  CategoryBannerSkeleton,
} from "@/components/category-banner";
import React, { Suspense } from "react";

const Blog = async () => {
  return (
    <main className="flex w-full max-w-[1440px] self-center flex-1 flex-col flex-wrap h-auto gap-2 px-5 md:px-10 mt-10">
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
        <div id="div-gpt-ad-1732541591461-0"></div>
        <div id="div-gpt-ad-1732541591461-1"></div>
      </div>
      <Suspense fallback={<BlogBannerSkeleton />}>
        {(async function () {
          return <BlogBanner />;
        })()}
      </Suspense>
      <Suspense fallback={<CategoryBannerSkeleton />}>
        {(async function () {
          return <CategoryBanner />;
        })()}
      </Suspense>
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
        <div id="div-gpt-ad-1732541591461-2"></div>
        <div id="div-gpt-ad-1732541591461-3"></div>
      </div>
    </main>
  );
};

export default Blog;
