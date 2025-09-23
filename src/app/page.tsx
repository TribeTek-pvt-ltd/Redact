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
// import SpecializeIn from "@/components/specializeIn";
import Icons from "@/components/icons";
import { FaEdit, FaCut, FaMagic } from "react-icons/fa"; // Editing tools icons
import FooterNav from "@/components/footerNav";

const editingToolsIcons = [
  { Icon: FaEdit, key: "edit" },
  { Icon: FaCut, key: "cut" },
  { Icon: FaMagic, key: "magic" },
  
];

export default function Home() {
  return (
    <div className="relative ">
      {/* Background Animated Cards */}

      {/* Hero Component */}
      {/* <HeroSection /> */}
      <Hero />
      <ScrollingRow />
      <Icons icons={editingToolsIcons} /> 
      <ServiceSection />
      <Testimonials />
      {/* Footer */}
      {/* <SpecializeIn/> */}
      <WhoAreWe />
      <StatsSection />
      <IndustriesSection />
      <RecentWorksSection />
      <Footer />
      <FooterNav />
      {/* <p className="relative z-10 mt-8 text-gray-400 text-sm">
        © {new Date().getFullYear()} Redact Editing Shop. All rights reserved..
      </p> */}
    </div>
  );
}
