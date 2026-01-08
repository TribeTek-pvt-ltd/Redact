"use client";

import { motion, useAnimation } from "framer-motion";
import { IconType } from "react-icons";

interface ServiceCardProps {
  title: string;
  Icon?: IconType;
  imageSrc?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, Icon, imageSrc }) => {
  const controls = useAnimation();

  return (
    <motion.div
      className="
        group relative flex flex-col justify-between items-center
        min-w-[220px] sm:min-w-[250px] md:min-w-[300px]
        h-[300px] sm:h-[350px] md:h-[400px]
        rounded-3xl p-4 sm:p-5 md:p-6 cursor-pointer overflow-hidden
        bg-black/30 backdrop-blur-xl
        border border-white/15
        shadow-[0_18px_40px_-16px_rgba(0,0,0,0.55)]
      "
      onHoverStart={() => {
        controls.start({ x: "120%", opacity: 1 });
      }}
      onHoverEnd={() => {
        controls.set({ x: "-120%", opacity: 0 });
      }}>
      {/* Convex bevels and textures */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl shadow-[inset_1px_1px_0_0_rgba(255,255,255,0.65)]" />
      <div className="pointer-events-none absolute inset-0 rounded-3xl shadow-[inset_-6px_-8px_20px_rgba(0,0,0,0.35)]" />
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(120%90%_at_30%-20%,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />

      {/* Background glow blobs */}
      <div className="absolute -top-10 -left-10 w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 bg-blue-500/40 rounded-full blur-3xl pointer-events-none"></div>
      {/* <div className="absolute -bottom-10 -right-10 w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 bg-blue-400/30 rounded-full blur-3xl pointer-events-none"></div> */}

      {/* Icon or Image */}
      <div className="flex-1 flex items-center justify-center z-10">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={title}
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 object-contain [filter:brightness(0)_saturate(100%)_invert(43%)_sepia(85%)_saturate(1354%)_hue-rotate(200deg)_brightness(97%)_contrast(92%)] drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"
          />
        ) : Icon ? (
          <Icon className="text-blue-500 text-6xl sm:text-7xl md:text-9xl drop-shadow-lg" />
        ) : null}
      </div>

      {/* Title */}
      <div className="z-10 w-full text-left pb-2 sm:pb-3 md:pb-4">
        <h3 className="text-white font-semibold text-xl sm:text-2xl md:text-3xl drop-shadow-md">
          {title}
        </h3>
      </div>

      {/* Shimmer / 1-time full card diagonal shine */}
      <motion.div
        className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none rotate-12"
        style={{ transformOrigin: "center" }}
        initial={{ x: "-120%", opacity: 0 }}
        animate={controls}
        transition={{ duration: 1.2, ease: "easeInOut", repeat: 0 }}
      />
    </motion.div>
  );
};

export default ServiceCard;
