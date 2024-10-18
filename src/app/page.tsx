import Feature from "@/components/feature";
import Information from "@/components/information";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Qr maker free | Url shortening service - InShorten";
  const description = "Generate custom short URLs for your website with our free QR maker. Increase your online presence and easily track your QR codes. Try it now!";
  const keywords = "qr maker free,Generate QR Codes,url link shortener,url shortening service,create a short url,best free url shortener";
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
    },
  };
}

export default async function Home() {
  return (
    <main className="flex w-full flex-col flex-wrap gap-24 my-14">
      <Information />
      <Feature />
    </main>
  );
}
