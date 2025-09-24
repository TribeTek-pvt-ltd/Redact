"use client";
//import HeroSection from "@/components/underconstructions";
import Footer from "@/components/footer";
import StatsSection from "@/components/Stats";
import WhoAreWe from "@/components/whoAreWe";
import RecentWorksSection from "@/components/RecentworksSection";
import FounderSays from "@/components/FounderSays";
import FooterNav from '@/components/footerNav';
// import BgEffect from "@/components/BgEffect";


// import WorksGallery from "@/components/WorksGallery";
// import SpecializeIn from "@/components/specializeIn";

//import HeroSection from "@/component/underconstructions";

export default function Home() {
  return (
    <div className="">
          {/* <BgEffect /> */}

      <WhoAreWe />
      <StatsSection />
      {/* <WorksGallery /> */}
      <RecentWorksSection />
      <FounderSays quote={"vujuhsdiswueyd"} founderName={"Ram"} founderImage={"./images/founder.webp"} />
      <Footer />
      <FooterNav />
    </div>
  );
}
