import { getArticleList } from "@/app/actions";
import { BlogBanner, BlogBannerSkeleton } from "@/components/blog-banner";
import CategoryBanner, { CategoryBannerSkeleton } from "@/components/category-banner";
import { Metadata } from "next";
import React, { Suspense } from "react";

export const metadata: Metadata = {
  title: "AI Humanizer Blog | Tips & Tricks for AI Text Conversion",
  description: "Explore our AI Humanizer Blog for the latest tips, tricks, and insights on converting AI-generated text into human-readable content. Stay updated with the best practices to bypass AI detectors.",
  keywords:"AI Humanizer Blog, AI Text Conversion Tips, Humanize AI Text, AI to Human Text Converter, Bypass AI Detector, AI Content Insights",
  openGraph: {
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog`,
    type: "website",
    title: "AI Humanizer Blog | Tips & Tricks for AI Text Conversion",
    description: "Explore our AI Humanizer Blog for the latest tips, tricks, and insights on converting AI-generated text into human-readable content. Stay updated with the best practices to bypass AI detectors.",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/blog`
  }
};

const Blog = async () => {
  return (
    <main className="flex w-full flex-1 flex-col flex-wrap h-auto gap-2 bg-white px-5 md:px-10">
      {/* <Suspense fallback={<BlogBannerSkeleton/>}>
        {(async function () {
          const articleResponse = await getArticleList('recent');
          return <BlogBanner articles={articleResponse?.data as any} />;
        })()}
      </Suspense> */}
      <Suspense fallback={<CategoryBannerSkeleton/>}>
        {(async function () {
          const articleResponse = await getArticleList('recent');
          return <CategoryBanner articles={articleResponse?.data as any} />;
        })()}
      </Suspense>
    </main>
  );
};

export default Blog;
