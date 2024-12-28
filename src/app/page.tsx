import Feature from "@/components/feature";
import Information from "@/components/information";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const keywordsArray = [
    'qr maker free',
    'generate qr codes',
    'url link shortener',
    'url shortening service',
    'create a short url',
    'best free url shortener',
    'link shortener for instagram',
    'url shortener for instagram',
    'link shortener instagram',
    'shorten url for free',
    'shorten url for twitter',
    'short url for youtube',
    'youtube shortcut link',
    'url shortener for facebook',
    'whatsapp url shortener',
    'google drive link shortener',
    'shorten website link',
    'google site shortener',
    'qr code for youtube',
    'qr code for instagram account',
    'create instagram qr code',
    'generate facebook qr code',
    'create facebook page qr code',
    'instagram qrcode generator',
    'qr code for instagram',
    'qr code for twitter',
    'create whatsapp qr code',
    'qr code google drive',
    'website qr code generator',
    'web page qr code generator',
    'qr generator website',
    'barcode maker online',
    'free barcode creator'
  ]
  const title = "Qr maker free | Url shortening service - InShorten";
  const description = "Generate custom short URLs for your website with our free QR maker. Increase your online presence and easily track your QR codes. Try it now!";
  const keywords = keywordsArray.toString();
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
      {/* <div
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
      </div> */}
      <Information />
      {/* <div
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
      </div> */}
      <Feature />
      {/* <div
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
        <div id="div-gpt-ad-1732541591461-4"></div>
        <div id="div-gpt-ad-1732541591461-5"></div>
      </div> */}
    </main>
  );
}
