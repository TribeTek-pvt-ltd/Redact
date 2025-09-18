"use client";

import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

interface FounderSaysProps {
  quote: string;
  founderName: string;
  founderImage: string; // PNG image URL or import
}

const FounderSays: React.FC<FounderSaysProps> = ({ quote, founderName, founderImage }) => {
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
        className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 sm:p-10 max-w-3xl w-full shadow-lg flex flex-col items-center md:items-start"
      >
        {/* Quote Icon */}
        <FaQuoteLeft className="text-5xl sm:text-6xl text-blue-400 mb-4 select-none" />

        {/* Quote Text */}
        <p className="text-white text-center md:text-left text-lg md:text-xl font-medium mb-6 leading-relaxed">
          {quote}.
        </p>

        {/* Founder Name */}
        <p className="text-white/80 font-semibold  md:text-left w-full md:mr-12 text-md">
          - {founderName}
        </p>

        {/* Overlay Image */}
        <div className="absolute -top-12 -right-12 w-44 h-44 sm:w-44 sm:h-44 md:w-60 md:h-60">
          <img
            src={founderImage}
            alt={founderName}
            className="object-cover w-full h-full rounded-full shadow-lg"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default FounderSays;
