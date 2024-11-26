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
        />
        <Script
           id="gpt-script-banner"
           strategy="beforeInteractive"
           src="/scripts/loadads.js"
           async
           crossOrigin="anonymous"
           type="module"
        ></Script>
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
          <div id="div-gpt-ad-1732541591461-0" style={{minWidth: '300px',minHeight: '250px'}}>
          </div>
          <div className="flex flex-col w-full flex-1">
            {children}
          </div>
          <Footer />
        </div>
        <Script
           id="gpt-script-displaying"
           strategy="afterInteractive"
           src="/scripts/displayads.js"
           async
           crossOrigin="anonymous"
           type="module"
        ></Script>
      </body>
    </html>
  );
}
