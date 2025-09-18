"use client";
//import HeroSection from "@/components/underconstructions";
import Footer from "@/components/footer";
import StatsSection from "@/components/Stats";
import WhoAreWe from "@/components/whoAreWe";
import RecentWorksSection from "@/components/RecentworksSection";
import FounderSays from "@/components/FounderSays";
// import WorksGallery from "@/components/WorksGallery";
// import SpecializeIn from "@/components/specializeIn";

//import HeroSection from "@/component/underconstructions";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-black  to-black">
      <WhoAreWe />
      <StatsSection />
      {/* <WorksGallery /> */}
      <RecentWorksSection />
      <FounderSays quote={"vujuhsdiswueyd"} founderName={"Ram"} founderImage={"./images/founder.webp"} />
      <Footer />
    </div>
  );
}
