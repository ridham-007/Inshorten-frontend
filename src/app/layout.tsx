'use client'
import { Montserrat } from "next/font/google";
import "@/styles/globals.css";
import Head from "next/head";
import Script from "next/script";
import { info } from "@/utils/ads";
import { infoTest } from "@/utils/ads-test";
import Header from "./_header/page";
import Footer from "./_footer/page";
import { usePathname } from "next/navigation";
import { GoogleAnalytics } from "@next/third-parties/google";


const inter = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={"en"} suppressHydrationWarning>
      <head>
        
        {/* <Script
          async
          src="https://phicmune.net/act/files/tag.min.js?z=8054643"
          data-cfasync="false"
        /> */}
        {/* <Script
          id="script"
          strategy="beforeInteractive"
          async
          type="module"
        >
          {`(function(s,u,z,p){s.src=u,s.setAttribute('data-zone',z),p.appendChild(s);})(document.createElement('script'),'https://zovidree.com/tag.min.js',8054646,document.body||document.documentElement)`}
        </Script> */}
        {/* <Script
          id="script"
          strategy="beforeInteractive"
          async
          type="module"
        >
          {`(function(d,z,s){s.src='https://'+d+'/401/'+z;try{(document.body||document.documentElement).appendChild(s)}catch(e){}})('psulrushe.net',8070101,document.createElement('script'))`}
        </Script> */}
        
        {/* <Script
          id="script"
          strategy="beforeInteractive"
          async
          type="module"
        >
          {`(function(d,z,s){s.src='https://'+d+'/400/'+z;try{(document.body||document.documentElement).appendChild(s)}catch(e){}})('punoocke.com',8054683,document.createElement('script'))`}
        </Script> */}
        {/* <Script
          id="script"
          strategy="beforeInteractive"
          async
          type="module"
          src="https://propu.sh/act/files/tag.min.js?z=8054643"
        >
        </Script> */}
        <GoogleAnalytics gaId="G-9NK8NNZXK4" />
        <Script id="" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "WebSite",
            name: "BrainAITools",
            url: "https://brainaitools.com",
            potentialAction: {
              "@type": "SearchAction",
              target:
                "https://brainaitools.com/about-us{search_term_string}",
              "query-input": "required name=search_term_string",
            },
          })}
        </Script>
        {/* Exo - CLick */}
        <meta name="6a97888e-site-verification" content="0332eb38f74e28210859c2307617b8fa"></meta>
        {/* <Script
            id="script"
            strategy="afterInteractive"
            async
            type="module"
          >
            {`(AdProvider = window.AdProvider || []).push({"serve": {}});`}
        </Script> */}
        {/* <script async type="application/javascript" src="https://a.magsrv.com/ad-provider.js"></script>  */}
      </head>
      <body
        className={`${inter.className} flex w-full h-dvh justify-center`}
        suppressHydrationWarning={true}
      >
        <div className="flex flex-col w-full bg-white max-w-[1440px]">
          <Header/>
          {/* Exo click */}
          {/* <div className="w-full flex justify-center h-auto my-4">
            <ins className="eas6a97888e2" data-zoneid="5419314" data-keywords="keywords" data-sub="123450000"></ins> 
          </div> */}
          {children}
          {/* Exo click */}
          {/* <ins className="eas6a97888e20 my-4" data-zoneid="5419442" data-keywords="keywords" data-sub="123450000"></ins>  */}
          <Footer/>
          {/* Exo click */}
          {/* <ins className="eas6a97888e17" data-zoneid="5419460"></ins>  */}
        </div>
       </body>
    </html>
  );
}
