"use client";
//import HeroSection from "@/components/underconstructions";
import StatsSection from "@/components/Stats";
import WhoAreWe from "@/components/whoAreWe";
import RecentWorksSection from "@/components/RecentworksSection";
import FounderSays from "@/components/FounderSays";
// import BgEffect from "@/components/BgEffect";

// import WorksGallery from "@/components/WorksGallery";
// import SpecializeIn from "@/components/specializeIn";

//import HeroSection from "@/component/underconstructions";

export default function Home() {
  return (
    <div className="">
      {/* <BgEffect /> */}

      <WhoAreWe />
      <FounderSays
        quote={
          "We don’t chase trends—we set them. At Redact, every frame, every beat, every word is designed to spark attention and scale influence. If your brand’s ready to lead, not follow—we’re the team behind the impact"
        }
        founderName={"Saran"}
        founderImage={"./images/founder.webp"}
      />
      <StatsSection />
      {/* <WorksGallery /> */}
      <RecentWorksSection />
    </div>
  );
}
