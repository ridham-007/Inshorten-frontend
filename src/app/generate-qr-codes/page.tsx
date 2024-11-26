import React from "react";
import QrCode from "@/components/qr-code";
import Content from "@/components/content";
import { Metadata } from "next";

const keywordsArray = [
  "qr maker free",
  "qr code for youtube",
  "qr code for instagram account",
  "create instagram qr code",
  "generate facebook qr code",
  "create facebook page qr code",
  "instagram qrcode generator",
  "qr code for instagram",
  "qr code for twitter",
  "create whatsapp qr code",
  "qr code google drive",
  "website qr code generator",
  "web page qr code generator",
  "qr generator website",
  "barcode maker online",
  "free barcode creator",
  "generate qr codes",
  "qr barcode generator",
  "create qr code free",
];

export const metadata: Metadata = {
  title: "Generate QR Codes |create qr code free-InShorten",
  description:
    "Easily create qr code free. Boost your marketing strategy and reach your target audience with custom-generate qr codes for promotions, products, and more.",
  keywords: keywordsArray.toString(),
  openGraph: {
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/generate-qr-codes`,
    type: "website",
    title: "Generate QR Codes |create qr code free-InShorten",
    description:
      "Easily create qr code free. Boost your marketing strategy and reach your target audience with custom-generate qr codes for promotions, products, and more.",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/generate-qr-codes`,
  },
};

const QrCodeLayout = () => {
  return (
    <div className="flex flex-col w-full gap-12 my-14">
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
      <QrCode />
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
      <Content
        title="Create a free QR Code"
        description="QR Code Generator and Shorten to create one Connections
          Platform Nurture seamless audience connections through branded
          links, customizable QR codes, and Landing Pages We make every link
          and scan an accelerant for connections."
      />
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
        <div id="div-gpt-ad-1732541591461-4"></div>
        <div id="div-gpt-ad-1732541591461-5"></div>
      </div>
    </div>
  );
};
export default QrCodeLayout;
