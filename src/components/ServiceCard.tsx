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
      transition={{ type: "spring", stiffness: 120, damping: 10 }}
    >
      {/* Swinging Diagonal Glow Line 1 */}
      <motion.div
        className="absolute w-[200%] h-[300%] rotate-12 bg-gradient-to-br from-transparent via-white/20 to-transparent pointer-events-none"
        initial={{ x: "-50%", y: "-50%", opacity: 0 }}
        whileHover={{
          x: ["-50%", "50%", "-50%"],
          y: ["-50%", "50%", "-50%"],
          opacity: [0, 1, 0.8],
          transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />

      {/* Swinging Diagonal Glow Line 2 */}
      <motion.div
        className="absolute w-[200%] h-[300%] rotate-12 bg-gradient-to-br from-transparent via-white/10 to-transparent pointer-events-none"
        initial={{ x: "-60%", y: "-60%", opacity: 0 }}
        whileHover={{
          x: ["-60%", "60%", "-60%"],
          y: ["-60%", "60%", "-60%"],
          opacity: [0, 0.8, 0.5],
          transition: {
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2,
          },
        }}
      />

      {/* Top-left Glass Glow */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-400/30 rounded-full blur-3xl pointer-events-none"></div>

      {/* Centered Icon */}
      <div className="flex-1 flex items-center justify-center z-10">
        <Icon className="text-blue-600/80 text-9xl drop-shadow-lg" />
      </div>

      {/* Title */}
      <div className="z-10 w-full text-left pb-4">
        <h3 className="text-white font-semibold text-3xl drop-shadow-md">{title}</h3>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
