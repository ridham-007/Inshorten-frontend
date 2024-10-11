import { Montserrat } from "next/font/google";
import "@/styles/globals.css";
import { Locale } from "@/i18n-config";

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
  return (
    <>
      <div
        className={`${inter.className} flex flex-col w-full items-center`}
        style={{
          marginRight: "auto !important",
          marginLeft: "auto !important",
          padding: "0px !important",
        }}
      >
        <div className="flex flex-col w-full ">{children}</div>
      </div>
    </>
  );
}
