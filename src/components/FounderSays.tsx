"use client";

import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

interface FounderSaysProps {
  quote: string;
  founderName: string;
  founderImage: string; // PNG image URL or import
}

const FounderSays: React.FC<FounderSaysProps> = ({
  quote,
  founderName,
  founderImage,
}) => {
  return (
    <div className="flex flex-col items-center w-full py-16 px-4 md:px-16">
      {/* Heading */}
      <div className="w-full max-w-4xl text-center md:text-left mb-10">
        <h1 className="text-4xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
          What Our Founder Says
        </h1>
      </div>

      {/* Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
          relative flex flex-col items-center md:items-start rounded-2xl p-8 sm:p-10 max-w-3xl w-full
          bg-white/10 backdrop-blur-2xl border border-white/15 shadow-[0_18px_40px_-16px_rgba(0,0,0,0.55)]
        "
      >
        {/* Clipped Background Wrapper */}
        <div className="absolute inset-0 z-0 rounded-2xl overflow-hidden pointer-events-none">
          {/* Background Image Layer - Focused on the right */}
          <div
            className="absolute inset-y-0 right-0 w-full h-full opacity-40 lg:opacity-50"
            style={{
              backgroundImage: "url('/images/founder final2.jpeg')",
              backgroundSize: 'cover',
              backgroundPosition: 'right center',
            }}
          />
          {/* Transition Overlay: Fades the image out towards the left */}
          {/* <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a] to-transparent" /> */}

          {/* Blue Glows contained within the card */}
          <div className="absolute -top-10 -left-10 w-48 h-48 bg-blue-500/40 rounded-full blur-3xl z-10" />
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-400/30 rounded-full blur-3xl z-10" />
        </div>

        {/* Convex bevels and glow (glass effect) */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_1px_1px_0_0_rgba(255,255,255,0.65)] z-[1]" />
        <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_-6px_-8px_20px_rgba(0,0,0,0.35)] z-[1]" />
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(120%90%_at_30%-20%,rgba(255,255,255,0.06),transparent_60%)] z-[1]" />
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10 z-[1]" />

        {/* Quote Icon */}
        <FaQuoteLeft className="text-5xl sm:text-6xl text-blue-400 mb-8 select-none relative z-10" />

        {/* Quote Text */}
        <p className="text-white text-center md:text-left text-lg md:text-xl font-medium mb-6 leading-relaxed max-w-md relative z-10">
          {quote}.
        </p>

        {/* Founder Name */}
        <p className="text-white/80 font-semibold md:text-left w-full md:mr-12 text-md relative z-10">
          - {founderName}
        </p>

        {/* Overlay / Pop-out Image */}
        {/* <div className="absolute -top-20 -right-8 md:-top-24 md:-right-12 w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden shadow-2xl z-20">
          <img
            src={founderImage}
            alt={founderName}
            className="object-cover w-full h-full"
          />
        </div> */}
      </motion.div>
    </div>
  );
};

export default FounderSays;
