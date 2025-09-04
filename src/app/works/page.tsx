"use client";
import ServiceSection from "@/components/ServiceSection";
//import HeroSection from "@/components/underconstructions";
import StatsSection from "@/components/Stats";
import Testimonials from "@/components/TestimonailSection";
import Hero from "@/components/hero";
import ScrollingRow from "@/components/images";
import Footer from "@/components/footer";
import FooterNav from "@/components/footerNav";
import WhoAreWe from "@/components/whoAreWe";
import WorksGallery from "@/components/WorksGallery";
// import SpecializeIn from "@/components/specializeIn";

//import HeroSection from "@/component/underconstructions";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-black  to-black">
      <WhoAreWe />
      <WorksGallery />
      <Footer />
    </div>
  );
}
