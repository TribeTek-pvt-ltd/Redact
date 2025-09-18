"use client";

import BgEffect from "@/components/BgEffect";
import ServiceSection from "@/components/ServiceSection";
import StatsSection from "@/components/Stats";
import Testimonials from "@/components/TestimonailSection";
import Hero from "@/components/hero";
import ScrollingRow from "@/components/images";
import Footer from "@/components/footer";
import WhoAreWe from "@/components/whoAreWe";
import IndustriesSection from "@/components/IndustriesSection";
import RecentWorksSection from "@/components/RecentworksSection";
import PartnersLoop from "@/components/LogoSection";
import VideoAnimation from "@/components/VideoAnimation";
import VideoEditorCTA from "@/components/cta";

export default function Home() {
  return (
    <div className="relative bg-black from-black via-blue-950 to-black">
      {/* Background Animated Cards */}
      <BgEffect />

      {/* Content Layer */}
      <div className="relative z-10">
        <Hero />
        <ScrollingRow />
        <VideoAnimation />
        <PartnersLoop />
        <ServiceSection />
        <Testimonials />
        <VideoEditorCTA />
        <WhoAreWe />
        <StatsSection />
        <IndustriesSection />
        <RecentWorksSection />
        <Footer />
      </div>
    </div>
  );
}
