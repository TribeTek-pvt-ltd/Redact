"use client";

// import BgEffect from "@/components/BgEffect";
import ServiceSection from "@/components/ServiceSection";
import StatsSection from "@/components/Stats";
import Testimonials from "@/components/TestimonailSection";
import Hero from "@/components/hero";
import ScrollingRow from "@/components/images";
import WhoAreWe from "@/components/whoAreWe";
import IndustriesSection from "@/components/IndustriesSection";
import RecentWorksSection from "@/components/RecentworksSection";
import PartnersLoop from "@/components/LogoSection";
import VideoAnimation from "@/components/VideoAnimation";
import VideoEditorCTA from "@/components/cta";

export default function Home() {
  return (
    <div className="relative ">
      {/* Background Animated Cards */}
      {/* <BgEffect /> */}

      {/* Content Layer */}
      <div className="relative z-10">
        <Hero />
        <VideoAnimation />
        <ScrollingRow />

        <PartnersLoop />
        <ServiceSection />
        <WhoAreWe />
        <StatsSection />
        <VideoEditorCTA />

        <Testimonials />

        <IndustriesSection />
        <RecentWorksSection />
      </div>
    </div>
  );
}
