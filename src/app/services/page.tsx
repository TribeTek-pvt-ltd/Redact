"use client";

import SecondaryHero from "@/components/secondaryHero";
import HorizontalServiceCard from "@/components/horizontalServiceCard";
import { HiOutlineFilm, HiOutlineColorSwatch } from "react-icons/hi";
import { RiVideoLine, RiSoundModuleLine } from "react-icons/ri";

import Footer from "@/components/footer";
import FooterNav from "@/components/footerNav";
import RecentWorksSection from "@/components/RecentworksSection";
// import { desc } from "framer-motion/client";

export default function Services() {
  const services = [
    {
      title: "Short-Form Editing",
      Icon: RiVideoLine,
      description:
        "Bold strategy meets killer content. We craft scroll-stopping videos with razor-sharp storytelling and pacing that hooks fast. From snappy cuts to viral-ready reels, our edits are built to connect, convert, and leave a mark.",
    },
    {
      title: "Commercials",
      Icon: HiOutlineFilm,
      description:
        "Commercials that don’t just sell, they stick. We fuse cinematic visuals with punchy narratives to create ads that grab attention and drive action. Whether it’s a 15-second teaser or a full-scale campaign, every frame is designed to deliver impact.",
    },
    {
      title: "Sound Design",
      Icon: RiSoundModuleLine,
      description:
        "Sound that speaks louder than words. From sonic branding to immersive audio layers, we build soundscapes that elevate your message and sharpen your identity. Clean, punchy, unforgettable, every beat hits where it matters.",
    },
    {
      title: "Colour Grading",
      Icon: HiOutlineColorSwatch,
      description:
        "Colour that commands attention. We transform raw footage into visual gold, dialing in mood, tone, and cinematic flair. Whether it’s bold, moody, or sunlit and sleek, our grading makes your content pop with precision and style.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SecondaryHero
        heading={"Our Services"}
        body="We offer a wide range of creative services designed to bring your vision to life. Explore our expertise and see how we can help you succeed."
        aria-label="Our Services Section"
      />
      <div className="py-1 from-gray-900 to-gray-800 flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8">
            {services.map((service, index) => (
              <HorizontalServiceCard
                key={index}
                title={service.title}
                Icon={service.Icon}
                description={service.description}
                aria-label={`${service.title} Service Details`}
              />
            ))}
          </div>
        </div>
      </div>
      <RecentWorksSection />
      <Footer />
      <FooterNav />
    </div>
  );
}
