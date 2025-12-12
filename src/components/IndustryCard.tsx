"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

interface IndustryCardProps {
  industry: string;
  bgImage: string;
  onClick?: () => void; // 👈 add optional onClick prop
}

const IndustryCard = ({ industry, bgImage, onClick }: IndustryCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      onClick={onClick} // 👈 attach click handler
      className="
        relative flex items-center justify-between container 
        p-16 rounded-3xl overflow-hidden cursor-pointer
        bg-white/10 backdrop-blur-xl border border-white/20
        shadow-[0_18px_40px_-16px_rgba(0,0,0,0.55)]
      "
    >
      {/* Background Image */}
      <motion.img
        src={bgImage}
        alt={industry}
        className="absolute inset-0 w-full h-full object-cover rounded-3xl"
      />

      {/* Glass layers */}
      <div className="absolute inset-0 rounded-3xl shadow-[inset_1px_1px_0_0_rgba(255,255,255,0.65)]" />
      <div className="absolute inset-0 rounded-3xl shadow-[inset_-6px_-8px_20px_rgba(0,0,0,0.35)]" />
      <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(120%_90%_at_30%_-20%,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10" />

      {/* Glow blobs */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/40 rounded-full blur-3xl" />
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-400/30 rounded-full blur-3xl" />

      <div className="absolute inset-0 bg-black/40 rounded-3xl"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between w-full">
        <div className="text-white text-2xl font-semibold">{industry}</div>
        <FaArrowRight size={32} className="text-white" />
      </div>
    </motion.div>
  );
};

export default IndustryCard;
