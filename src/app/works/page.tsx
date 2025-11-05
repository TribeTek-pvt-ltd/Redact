"use client";
//import HeroSection from "@/components/underconstructions";
import Footer from "@/components/footer";
import WorksGallery from "@/components/WorksGallery";
import Work from "@/components/works";
import FooterNav from '@/components/footerNav';
// import BgEffect from '@/components/BgEffect';


// import SpecializeIn from "@/components/specializeIn";

//import HeroSection from "@/component/underconstructions";

export default function Home() {
  return (
    <div className="">
          {/* <BgEffect /> */}

      <Work />
      <WorksGallery />
      <Footer />
      <FooterNav />
    </div>
  );
}
