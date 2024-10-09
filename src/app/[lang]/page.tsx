import EditorForm from "@/components/editor-form";
import { LanguageAvailability } from "@/components/language-availability";
import { getDictionary } from "@/dictionaries";
import percentage from "@public/images/percentage.svg";
import uploading from "@public/images/uploading.svg";
import { Metadata } from "next";
import AdCustom from "@/components/AdCustom";
import { info } from "@/utils/ads";
import Offer from "@/components/what-we-offer";
import WhoCanUse from "@/components/who-can-use";
import MarketingCard from "@/components/marketing-card";

export async function generateMetadata({
  params,
}: {
  params: { lang: "en" | "da" | "de" | "es" | "fr" | "id" | "it" | "ja" | "pt" | "ru" | "tr" };
}): Promise<Metadata> {
  const lang = params.lang;
  const dictionary = await getDictionary(lang ?? 'en');
  const title = dictionary.meta_title || "AI Humanizer for Free | The Best HumanText Converter";
  const description = dictionary.meta_description || "Ai Text Humanize is an online, free AI text converter that turns the AI generated text into a human readable text and best plagiarism remover.";
  const keywords = dictionary.meta_keywords || "Humanize AI Text, Humanize AI, AI Text Converter, AI to Human Text Converter, Bypass AI Detector, Convert AI Text";
  return {
    title,
    description,
    keywords,
    openGraph: {
      url: process.env.NEXT_PUBLIC_SITE_URL,
      type: "website",
      title,
      description,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/logo.png`,
        },
      ],
    },
    alternates: {
      canonical:`${process.env.NEXT_PUBLIC_SITE_URL}`,
      languages:{
        'da':`${process.env.NEXT_PUBLIC_SITE_URL}/da`,
        'de':`${process.env.NEXT_PUBLIC_SITE_URL}/de`,
        'en':`${process.env.NEXT_PUBLIC_SITE_URL}/en`,
        'es':`${process.env.NEXT_PUBLIC_SITE_URL}/es`,
        'fr':`${process.env.NEXT_PUBLIC_SITE_URL}/fr`,
        'id':`${process.env.NEXT_PUBLIC_SITE_URL}/id`,
        'it':`${process.env.NEXT_PUBLIC_SITE_URL}/it`,
        'ja':`${process.env.NEXT_PUBLIC_SITE_URL}/ja`,
        'pt':`${process.env.NEXT_PUBLIC_SITE_URL}/pt`,
        'ru':`${process.env.NEXT_PUBLIC_SITE_URL}/ru`,
        'tr':`${process.env.NEXT_PUBLIC_SITE_URL}/tr`,
        'x-default':`${process.env.NEXT_PUBLIC_SITE_URL}`
      },
    },
  };
}

export default async function Home({
  params: { lang },
}: {
  params: { lang: "en" | "es" };
}) {
  const dict = await getDictionary(lang ?? 'en');
  const features = [
    {
      title: dict.feature_1,
      image: percentage.src,
      features: [
        dict.feature_1_description_1,
        dict.feature_1_description_2,
        dict.feature_1_description_3,
        dict.feature_1_description_4,
        dict.feature_1_description_5,
        dict.feature_1_description_6,

      ],
    },
    {
      title: dict.feature_2,
      image: uploading.src,
      features: [
        dict.feature_2_description_1,
        dict.feature_2_description_2,
        dict.feature_2_description_3,
        dict.feature_2_description_4,
        dict.feature_2_description_5,
        dict.feature_2_description_6,
      ],
    },
  ];
  return (
    <main className="flex w-full flex-col flex-wrap h-auto gap-2 bg-white">
      {/* Header Section */}
      <section className="flex w-full flex-col items-center px-5 py-5 bg-gradient-to-br from-[#0B80E0] to-[#77b6e9] ">
        <h1 className="text-white text-3xl font-semibold pt-3 text-center">
          {dict.landing_title}
        </h1>
        <p className="text-white text-center text-base font-semibold pb-3">
          {dict.landing_description}
        </p>
        <div className="flex w-full flex-col lg:flex-row gap-2 lg:justify-center">
          <div className="flex basis-[68%]">
            <LanguageAvailability />
          </div>
          {/* <div className="flex basis-[28%] justify-center items-center min-h-[300px]">
            Loading add...
          </div> */}
        </div>
      </section>
      <AdCustom
        dataAdId={info.RESPONSIVE_ADS_2.id}
        width={info.RESPONSIVE_ADS_2.width}
        height={info.RESPONSIVE_ADS_2.height}
      />
      <EditorForm locale={lang}></EditorForm>
      {/* What we offer Section Section */}
      <section className="flex w-full flex-col items-center px-5 py-5">
        <h2 className="flex text-3xl font-semibold">{dict.what_we_offer}</h2>
        <Offer />
      </section>
      {/* <MarketingCard /> */}
      <WhoCanUse />
      <AdCustom
        dataAdId={info.RESPONSIVE_ADS_1.id}
        width={info.RESPONSIVE_ADS_1.width}
        height={info.RESPONSIVE_ADS_1.height}
      />
    </main>
  );
}
