import HeroSection from "@/components/custom/hero-section";
import CollectionMarquee from "@/components/custom/collection-marquee";
import Image from "next/image";
import MintCardGrid from "@/components/custom/mint-cards";
import LeagueCard from "@/components/custom/league";
import { Footer } from "@/components/custom/footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Image src={"/HeroBottom.png"} alt="Hero Bottom" className="w-full h-full pb-16 bg-[#000D18]" width={1000} height={1000} />
      <CollectionMarquee />
      <MintCardGrid />
      <LeagueCard />
      <Footer />
    </>
  );
}
