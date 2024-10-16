import Feature from "@/components/feature";
import Information from "@/components/information";

export default async function Home() {
  return (
    <main className="flex w-full flex-col flex-wrap gap-24 my-14">
      <Information />
      <Feature />
    </main>
  );
}
