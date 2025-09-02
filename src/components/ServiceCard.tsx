"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";

interface ServiceCard {
  title: string;
  Icon: IconType;
}

const ServiceCard: React.FC<ServiceCard> = ({ title, Icon }) => {
  return (
    <motion.div
      className="relative flex flex-col justify-between items-center min-w-[350px] h-[500px] 
        rounded-2xl p-6 shadow-lg cursor-pointer overflow-hidden
        bg-gradient-to-b from-blue-600/10 via-blue-600/5 to-blue-600/10 
        backdrop-blur-xl border border-blue-600/50">
      {/* Corner shine */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-white/20 rounded-full blur-3xl pointer-events-none"></div>

      {/* Diagonal sweeping shine */}
      <motion.div
        initial={{ x: "-150%", y: "-150%", rotate: 25, opacity: 0 }}
        whileHover={{
          x: "150%",
          y: "150%",
          opacity: 1,
          transition: {
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        className="absolute w-[200%] h-[200%] 
          bg-gradient-to-r from-transparent via-blue-700/70 to-transparent 
          opacity-0 pointer-events-none"
      />

      {/* Centered Icon */}
      <div className="flex-1 flex items-center justify-center z-10">
        <Icon className="text-blue-700/80 text-9xl drop-shadow-lg" />
      </div>

      {/* Title at bottom */}
      <div className="z-10 w-full text-left pb-4">
        <h3 className="text-white font-semibold text-3xl drop-shadow-md">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
