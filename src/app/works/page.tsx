"use client";
//import HeroSection from "@/components/underconstructions";
import Footer from "@/components/footer";
import WorksGallery from "@/components/WorksGallery";
import Work from "@/components/works";
// import SpecializeIn from "@/components/specializeIn";

//import HeroSection from "@/component/underconstructions";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-black  to-black">
      <Work />
      <WorksGallery />
      <Footer />
    </div>
  );
}
