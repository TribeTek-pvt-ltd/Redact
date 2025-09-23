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
      className="relative flex flex-col justify-between items-center min-w-[300px] h-[400px] 
        rounded-2xl p-6 shadow-xl cursor-pointer overflow-hidden
        bg-black/30 backdrop-blur-xl border border-white/20"
      whileHover={{ rotateZ: 1, rotateY: 10, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 120, damping: 10 }}>
      {/* 🔥 Shiny diagonal sweep */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ x: "-200%", y: "-200%" }}
        whileHover={{
          x: ["-200%", "200%"],
          y: ["-200%", "200%"], // move across diagonally
        }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
        }}
        style={{
          background:
            "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.7) 50%, transparent 70%)",
          mixBlendMode: "overlay",
        }}
      />

      {/* Background glow blobs */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-400/30 rounded-full blur-3xl pointer-events-none"></div>

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
    </motion.div>
  );
};

export default ServiceCard;
