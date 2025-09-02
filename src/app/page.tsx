"use client";
//import HeroSection from "@/components/underconstructions";
import StatsSection from "@/components/Stats";
import Hero from "@/components/hero";

//import HeroSection from "@/component/underconstructions";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-black to-blue-900">
      {/* Gradient Circle Overlay */}
      {/* <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-30 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-gradient-to-tr from-cyan-400 to-indigo-600 rounded-full opacity-30 blur-3xl pointer-events-none"></div> */}

      {/* Hero Component */}
      {/* <HeroSection /> */}
      <Hero/>
      <StatsSection />
      {/* Footer */}
      {/* <p className="relative z-10 mt-8 text-gray-400 text-sm">
        © {new Date().getFullYear()} Redact Editing Shop. All rights reserved.
      </p> */}
    </div>
  );
}
