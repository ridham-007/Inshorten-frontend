import React from "react";
import QrCode from "@/components/qr-code";
import Content from "@/components/content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Generate QR Codes |create qr code free-InShorten",
  description: "Easily create qr code free. Boost your marketing strategy and reach your target audience with custom-generate qr codes for promotions, products, and more.",
  keywords: "generate qr codes, qr barcode generator, create qr code free",
  openGraph: {
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/qr-code`,
    type: "website",
    title: "Generate QR Codes |create qr code free-InShorten",
    description: "Easily create qr code free. Boost your marketing strategy and reach your target audience with custom-generate qr codes for promotions, products, and more.",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/qr-code`
  }
};


const QrCodeLayout = () => {
  return (
    <div className="flex flex-col w-full gap-12 my-14">
      <QrCode />
      <Content
        title="Create a free QR Code"
        description="QR Code Generator and Shorten to create one Connections
          Platform Nurture seamless audience connections through branded
          links, customizable QR codes, and Landing Pages We make every link
          and scan an accelerant for connections."
      />
    </div>
  );
};
export default QrCodeLayout;
