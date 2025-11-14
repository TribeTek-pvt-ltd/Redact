"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";

interface ServiceCardProps {
  title: string;
  Icon: IconType;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, Icon }) => {
  return (
    <motion.div
      className="
        group relative flex flex-col justify-between items-center min-w-[300px] h-[400px]
        rounded-3xl p-6 cursor-pointer overflow-hidden
        bg-black/30 backdrop-blur-xl
        border border-white/15        
         /* glassy border */
        shadow-[0_18px_40px_-16px_rgba(0,0,0,0.55)] /* soft lift from bg */
      "
      whileHover={{ rotateZ: 1, rotateY: 10, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 120, damping: 10 }}>
      {/* Convex bevel: top-left rim highlight */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl shadow-[inset_1px_1px_0_0_rgba(255,255,255,0.65)]" />

      {/* Convex bevel: bottom-right inner shadow */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl shadow-[inset_-6px_-8px_20px_rgba(0,0,0,0.35)]" />

      {/* Subtle surface texture / vignette */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(120%90%_at_30%-20%,rgba(255,255,255,0.06),transparent_60%)]" />

      {/* Optional faint inner rim */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />

      {/* Background glow blobs */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-400/30 rounded-full blur-3xl pointer-events-none"></div>

      {/* Animated diagonal glass sweep */}
      <motion.div
        className="absolute w-[100%] h-[200%] bg-gradient-to-br from-transparent via-white/20 to-transparent opacity-0 pointer-events-none rotate-12"
        initial={{ x: "-120%", y: "-120%", opacity: 0 }}
        whileHover={{
          x: "120%",
          y: "120%",
          opacity: 1,
          transition: { duration: 2, repeat: Infinity, ease: "linear" },
        }}
      />

      {/* Icon */}
      <div className="flex-1 flex items-center justify-center z-10">
        <Icon className="text-blue-500 text-9xl drop-shadow-lg" />
      </div>

      {/* Title */}
      <div className="z-10 w-full text-left pb-4">
        <h3 className="text-white font-semibold text-3xl drop-shadow-md">
          {title}
        </h3>
      </div>

      {/* Shimmer / Loader effect — visible only on hover */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
      </div>

      {/* Shimmer animation */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 1.2s linear infinite;
        }
      `}</style>
    </motion.div>
  );
};

export default ServiceCard;
