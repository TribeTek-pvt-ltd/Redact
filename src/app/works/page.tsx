"use client";
//import HeroSection from "@/components/underconstructions";
import Footer from "@/components/footer";
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
