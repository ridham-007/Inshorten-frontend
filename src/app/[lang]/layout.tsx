import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/styles/globals.css";
import { Locale } from "@/i18n-config";
import DictionaryProvider from "@/context/dictionary-provider";
import { getDictionary } from "@/dictionaries";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import AdCustom from "@/components/AdCustom";
import { info } from "@/utils/ads";

const inter = Montserrat({ subsets: ["latin"] });

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  const dictionary = await getDictionary(params.lang);
  return (
    <>
      <div
        className={`${inter.className} flex flex-col w-full text-black bg-white items-center`}
        style={{
          marginRight: "auto !important",
          marginLeft: "auto !important",
          padding: "0px !important",
        }}
      >
        <DictionaryProvider dictionary={dictionary}>
          <div className="flex flex-col w-full bg-white max-w-[1440px]">
            {children}
          </div>
          <AdCustom
        dataAdId={info.RESPONSIVE_ADS_7.id}
        width={info.RESPONSIVE_ADS_7.width}
        height={info.RESPONSIVE_ADS_7.height}
      />
        </DictionaryProvider>
      </div>
    </>
  );
}
