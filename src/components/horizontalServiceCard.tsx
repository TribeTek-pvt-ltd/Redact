'use client'; 

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
      <h3 className=" py-4 text-white text-3xl font-semibold mt-1 text-left">{title}</h3>
    <div className="    flex flex-col sm:flex-row items-center rounded-3xl bg-white/5 backdrop-blur-lg border border-white/20 mx-13">
  {/* Centered Icon with larger background */}
  <div className=" drop-shadow-lg sm:bg-gradient-to-r  bg-gradient-to-b   from-blue-700/70 rounded-2xl to-black border border-blue-700/70">
    <Icon className="sm:mx-12 text-9xl text-blue-700/80 my-8 mx-16 " />
  </div>
  <p className="m-4 sm:ml-20 text-white text-base leading-relaxed flex-1 flex justify-center items-center">
    {description}
  </p>
</div>

      <motion.div
        whileHover={{
          scale: 1.03,
          boxShadow: "0 25px 40px rgba(0,0,0,0.4)",
          transition: { type: "spring", stiffness: 300, damping: 20 },
        }}
        className="
          group relative flex items-center flex-col sm:flex-row gap-6
          rounded-3xl overflow-hidden cursor-pointer
          bg-black/30 backdrop-blur-xl border border-white/15
          shadow-[0_18px_40px_-16px_rgba(0,0,0,0.55)] p-6
        "
      >
        {/* Convex bevel: top-left rim highlight */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl shadow-[inset_1px_1px_0_0_rgba(255,255,255,0.65)]" />

        {/* Convex bevel: bottom-right inner shadow */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl shadow-[inset_-6px_-8px_20px_rgba(0,0,0,0.35)]" />

       
        {/* Subtle surface texture / vignette */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(120%90%_at_30%-20%,rgba(255,255,255,0.06),transparent_60%)]" />

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

        {/* Shimmer / Loader effect — only on hover */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
