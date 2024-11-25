"use client";
import { Montserrat } from "next/font/google";
import "@/styles/globals.css";
import Header from "./_header/page";
import Footer from "./_footer/page";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";


const inter = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={"en"} suppressHydrationWarning>
      <head>
        <Script
          async
          src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
          strategy="beforeInteractive"
          onReady={() => {
            // handleBannerLoad();
          }}
        />
        <Script
          id="gpt-script-bottom"
          strategy="afterInteractive"
          async
          crossOrigin="anonymous"
          type="module"
        >
          {`
            var anchorSlot_2;
            window.googletag = window.googletag || {};
            window.googletag.cmd = window.googletag.cmd || [];

            window.googletag.cmd.push(function() {
              anchorSlot_2 = googletag.defineSlot('/23128577529/inshorten.com_Anchor', ['fluid'], 'div-gpt-ad-1732541990608-0');
              anchorSlot_2.addService(googletag.pubads());
              window.googletag.pubads().enableSingleRequest();
              window.googletag.enableServices();
              window.googletag.display(anchorSlot_2);
            });
          `}
        </Script>
        <Script
           id="gpt-script-banner"
           strategy="afterInteractive"
           async
           crossOrigin="anonymous"
           type="module"
        >
          {`
            window.googletag = window.googletag || {cmd: []};
            googletag.cmd.push(function() {
              googletag.defineSlot('/23128577529/inshorten.com_Display', ['fluid', [336, 280], [250, 250], [300, 250]], 'div-gpt-ad-1732541591461-0').addService(googletag.pubads());
              googletag.pubads().enableSingleRequest();
              googletag.enableServices();
            });
          `}
        </Script>
      </head>
      <body
        className={`${inter.className} flex w-full max-w-[1440px] mx-auto min-h-dvh overflow-auto`}
        suppressHydrationWarning={true}
        style={{
          backgroundImage: "url('/images/background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <GoogleAnalytics gaId="G-Y2FCGQGZ8S" />
        <div className="flex flex-col w-full px-3 sm:px-10">
          <Header />
          <div id='div-gpt-ad-1732541591461-0' style={{minWidth: '250px',minHeight: '250px'}}>
            <Script id="checking">
              {`googletag.cmd.push(function() { googletag.display('div-gpt-ad-1732541591461-0'); });`}
            </Script>
          </div>
          <div className="flex flex-col w-full flex-1">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
