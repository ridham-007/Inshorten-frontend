import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About BrainAITools | We Help You Scale Content Production",
  description:
    "BrainAITools is an AI writing tool that combines the ability of AI and man creativeness to help you commission up your capacity base ferment.",
  openGraph: {
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/about-us`,
    type: "website",
    title: "About BrainAITools | We Help You Scale Content Production",
    description:
      "BrainAITools is an AI writing tool that combines the ability of AI and man creativeness to help you commission up your capacity base ferment.",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/about-us`,
  },
};

export default async function AboutUs({
  params: { lang },
}: {
  params: { lang: "en" | "es" };
}) {
  return (
    <main className="flex w-full flex-col flex-wrap h-auto gap-2 bg-white px-5 md:px-10">
      <h1 className="flex w-full flex-col text-xl lg:text-3xl text-white font-semibold items-center px-8 py-4 md:py-6 lg:py-12 bg-gradient-to-br from-[#0B80E0] to-[#77b6e9]  my-5">
        About us
      </h1>
      <p>
        Welcome to BrainAITools.com – Where Artificial Intelligence Meets the
        Humanity{" "}
      </p>
      <p>{`At BrainAITools.com, we aim to bridgework the gap betwixt fashionable Artificial Intelligence and the art of human building and solve normal real life problems. We are an aflame inaugural that believes in the power of base and the magic of words. Our inaugural trip began with an idea; to humanize AI generated text and make it approachable to everyone,' everywhere as well as and that is too for free. `}</p>
      <h2 className="text-[18px] lg:text-xl font-semibold py-3">Our Vision</h2>
      <p className="ml-5">{`In a world flooded with AI generated content,' we envisioned a rising where engineering seamlessly blends with human creativity. We see a world where capacity creators, copywriters,' and marketers could effortlessly transmute AI generated text into high quality capacity that engages and resonates with their audiences, and is not robotic.`}</p>
      <h2 className="text-[18px] lg:text-xl font-semibold py-3">
        Our Innovative Solution
      </h2>
      <p className="ml-5">
        An important tool to prevent plagiarism is to detect instances of
        plagiarism by comparing the data present in a text. This is extremely
        important to prevent intellectual property theft. Without this, there
        remains doubt in the presence of credibility and originality. It can be
        used for personal or professional purposes.
      </p>
    </main>
  );
}
