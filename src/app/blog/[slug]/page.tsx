import { getArticleBySlug, getArticleList } from "@/app/actions";
import AdCustom from "@/components/AdCustom";
import DynamicNewsWall, {
  DynamicNewsWallSkeleton,
} from "@/components/blog-banner-side";
import ShowArticle, { ArticleSkeleton } from "@/components/show-article";
import { info } from "@/utils/ads";
import { Metadata, ResolvingMetadata } from "next";
import React, { Suspense } from "react";

export async function generateMetadata(
  {
    params,
    searchParams,
  }: {
    params: { slug: string[] };
    searchParams: { [key: string]: string | string[] | undefined };
  },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = params;
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/common/meta-data/${process.env.NEXT_PUBLIC_SITE_ID}/${slug}`,
      {
        next: { revalidate: 10 },
      }
    );
    const responseData = await res.json();
    const { metaData } = responseData?.data;
    return {
      title:
        ((metaData?.openGraph?.title ||
          metaData?.openGraph?.ogTitle ||
          metaData?.name ||
          metaData?.title) &&
          (metaData?.openGraph?.title ||
            metaData?.openGraph?.ogTitle ||
            metaData?.name ||
            metaData?.title)) ||
        "Plagiarism Remover",
      description:
        metaData?.seo_description ||
        metaData?.description ||
        "Plagiarism Remover",
      ...(metaData?.keywords && {
        keywords: metaData?.keywords,
      }),
      openGraph: {
        ...((metaData?.openGraph?.title || metaData?.openGraph?.ogTitle) && {
          title: metaData?.openGraph?.title || metaData?.openGraph?.ogTitle,
        }),
        ...((metaData?.openGraph?.description ||
          metaData?.openGraph?.ogDescription) && {
          description:
            metaData?.openGraph?.description ||
            metaData?.openGraph?.ogDescription,
        }),
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}`,
        ...((metaData?.openGraph?.type || metaData?.openGraph?.ogType) && {
          type: metaData?.openGraph?.type || metaData?.openGraph?.ogType || "",
        }),
        ...((metaData?.openGraph?.locale || metaData?.openGraph?.ogLocale) && {
          locale: metaData?.openGraph?.locale || metaData?.openGraph?.ogLocale,
        }),
        ...((metaData?.openGraph?.site_name ||
          metaData?.openGraph?.ogSiteName) && {
          siteName:
            metaData?.openGraph?.site_name || metaData?.openGraph?.ogSiteName,
        }),
        images: [
          {
            url: metaData?.openGraph?.ogImage || "",
          },
        ],
      },
      twitter: {
        title: "",
        description: "",
        images: "",
      },
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}`,
      },
    };
  } catch (e) {
    return {
      title: "AI plagiarism remover for Free | The Best AI Text Converter",
      description:
        "BrainAITools is an online, free AI text converter that turns the AI generated text into a human readable text and best plagiarism remover.",
      keywords:
        "BrainAITools, Humanize AI Text, Humanize AI, AI Text Converter, AI to Human Text Converter, Bypass AI Detector, Bypass plagiarism, Convert AI Text, paraphraser tool, ai paraphraser, text paraphraser, paraphrase text, paraphraser online, online paraphraser, text paraphrase, paraphrase text online, best paraphraser, paraphraser tools, paraphrase a text, ai text paraphrase, auto paraphraser, automatic paraphraser, paraphraser generator, text paraphrase online, ai text paraphraser, text to paraphrase, ai to paraphrase text, ai paraphrase text, paraphrase english text online, website to paraphrase text, paraphrase ai text, paraphrase text english, ChatGPT Content Converter, ChatGPT Content To Human, Bard Content to Human Text, Convert AI Text",
      openGraph: {
        url: process.env.NEXT_PUBLIC_SITE_URL,
        type: "website",
        title: "AI plagiarism remover for Free | The Best AI Text Converter",
        description:
          "BrainAITools is an online, free AI text converter that turns the AI generated text into a human readable text and best plagiarism remover.",
        images: [
          {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/logo.png` ?? "",
          },
        ],
      },
      alternates: {
        canonical: process.env.NEXT_PUBLIC_SITE_URL,
      },
    };
  }
}

const Article = async (props: any) => {
  return (
    <main className="flex w-full flex-wrap gap-2 px-3">
      <section className="flex flex-col flex-1 basis-[100%] md:basis-[68%] overflow-auto">
        <Suspense fallback={<ArticleSkeleton />}>
          {(async function () {
            const articleResponse = await getArticleBySlug(props?.params?.slug);
            //   return <BlogBanner articles={articleResponse?.data as any} />;
            return <ShowArticle article={articleResponse?.data as any} />;
          })()}
        </Suspense>
      </section>

      <section className="flex flex-col flex-1 basis-[100%] md:basis-[22%] px-2 gap-4">
        <Suspense fallback={<DynamicNewsWallSkeleton label="Popular" />}>
          {(async function () {
            let articleResponse: any = await getArticleList("recent");
            let articles = [...articleResponse?.data].slice(0, 6);
            return <DynamicNewsWall title="Popular" news={articles as any} />;
          })()}
        </Suspense>
        <AdCustom
          dataAdId={info.RESPONSIVE_ADS_4.id}
          width={info.RESPONSIVE_ADS_4.width}
          height={info.RESPONSIVE_ADS_4.height}
        />
        <Suspense fallback={<DynamicNewsWallSkeleton label="Recent" />}>
          {(async function () {
            let articleResponse: any = await getArticleList("recent");
            let articles = [...articleResponse?.data].slice(6);
            return <DynamicNewsWall title="Recent" news={articles as any} />;
          })()}
        </Suspense>
      </section>
    </main>
  );
};

export default Article;
