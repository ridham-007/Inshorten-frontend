import React from "react";
import QrCode from "@/components/qr-code";
import Content from "@/components/content";

const QrCodeLayout = () => {
  return (
    <>
      <div className="flex flex-col w-full">
        <QrCode />
        <Content
          title="Create a free QR Code"
          description="QR Code Generator and Shorten to create one Connections
            Platform Nurture seamless audience connections through branded
            links, customizable QR codes, and Landing Pages We make every link
            and scan an accelerant for connections."
        />
      </div>
    </>
  );
};
export default QrCodeLayout;
