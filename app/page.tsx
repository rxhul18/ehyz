import HeroSection from "@/components/custom/hero-section";
import CollectionMarquee from "@/components/custom/collection-marquee";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Image src={"/HeroBottom.png"} alt="Hero Bottom" className="w-full h-full pb-16 bg-[#000D18]" width={1000} height={1000} />
      <CollectionMarquee />
    </>
  );
}
