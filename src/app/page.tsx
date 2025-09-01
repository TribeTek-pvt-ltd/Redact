"use client";

import HeroSection from "@/component/underconstructions";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      {/* Gradient Circle Overlay */}
      <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-30 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-gradient-to-tr from-cyan-400 to-indigo-600 rounded-full opacity-30 blur-3xl pointer-events-none"></div>

      {/* Hero Component */}
      <HeroSection />

      {/* Footer */}
      {/* <p className="relative z-10 mt-8 text-gray-400 text-sm">
        © {new Date().getFullYear()} Redact Editing Shop. All rights reserved.
      </p> */}
    </div>
  );
}
