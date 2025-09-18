"use client";

import { FC } from "react";
import { FaArrowRight } from "react-icons/fa"; // ✅ using react-icons

interface IndustryCardProps {
  industry: string;
  bgImage: string; // ✅ new prop for background
}

const IndustryCard: FC<IndustryCardProps> = ({ industry, bgImage }) => {
  return (
    <div
      className="relative flex items-center justify-between container p-20 rounded-3xl shadow-lg overflow-hidden 
      bg-white/10 backdrop-blur-md border border-white/20"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      {/* Overlay for glass effect */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-xs rounded-3xl"></div>

      {/* Industry Text */}
      <div className="z-10 text-white text-2xl font-semibold">{industry}</div>

      {/* Foreground Arrow Icon */}
      <div className="z-10 ml-4 text-white opacity-90">
        <FaArrowRight size={32} />
      </div>
    </div>
  );
};

export default IndustryCard;
