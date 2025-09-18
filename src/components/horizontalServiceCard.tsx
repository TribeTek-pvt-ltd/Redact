"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";

interface HorizontalServiceCardProps {
  title: string;
  Icon: IconType;
  description?: string;
}

const HorizontalServiceCard: React.FC<HorizontalServiceCardProps> = ({
  title,
  Icon,
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
}) => {
  return (
    <div className="container mx-auto flex flex-col p-2 sm:p-4">
      <h3 className="py-4 text-white text-3xl font-semibold mt-1 text-left">
        {title}
      </h3>

      {/* Blue glass effect card with hover popup */}
      <motion.div
        whileHover={{
          scale: 1.03,
          boxShadow: "0 25px 40px rgba(0,0,0,0.4)",
          transition: { type: "spring", stiffness: 300, damping: 20 },
        }}
        className="relative flex items-center flex-col sm:flex-row gap-6 rounded-3xl bg-blue-700/20 backdrop-blur-lg border border-blue-500/30 shadow-lg p-6 overflow-hidden cursor-pointer"
      >
        {/* Top-left Glass Glow */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue/60 rounded-full blur-3xl pointer-events-none"></div>

        {/* Bottom-right Glass Glow */}
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue/30 rounded-full blur-3xl pointer-events-none"></div>

        {/* Animated Diagonal Glass Sweep */}
        <motion.div
          initial={{ x: "-120%", y: "-120%", opacity: 0 }}
          whileHover={{
            x: "120%",
            y: "120%",
            opacity: 1,
            transition: { duration: 2, repeat: Infinity, ease: "linear" },
          }}
          className="absolute w-[100%] h-[200%] bg-gradient-to-br from-transparent via-white/20 to-transparent opacity-0 pointer-events-none rotate-12"
        />

        {/* Shimmer / Loader effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
        </div>

        {/* Icon */}
        <Icon className="text-9xl text-blue-400 sm:mx-11 drop-shadow-lg z-10" />

        {/* Description */}
        <p className="text-white text-center sm:text-left sm:w-1/2 text-base leading-relaxed flex-1 z-10">
          {description}
        </p>

      </motion.div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .animate-shimmer {
          animation: shimmer 1.2s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default HorizontalServiceCard;
