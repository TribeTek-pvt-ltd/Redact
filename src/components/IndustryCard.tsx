"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

interface IndustryCardProps {
  industry: string;
  bgImage: string;
}

const IndustryCard = ({ industry, bgImage }: IndustryCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 120, damping: 20 });
  const springY = useSpring(y, { stiffness: 120, damping: 20 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY }}
      className="relative flex items-center justify-between container p-16 rounded-3xl shadow-lg overflow-hidden 
        bg-black/20 backdrop-blur-md border border-white/20 cursor-pointer"
    >
      {/* Background Image */}
      <motion.img
        src={bgImage}
        alt={industry}
        className="absolute inset-0 w-full h-full object-cover rounded-3xl"
        style={{
          x: useTransform(springX, [-0.5, 0.5], [-20, 20]),
          y: useTransform(springY, [-0.5, 0.5], [-20, 20]),
        }}
      />

      {/* Overlay for glass effect */}
      <div className="absolute inset-0 bg-black/40 rounded-3xl"></div>

      {/* Industry Text */}
      <div className="relative z-10 flex items-center justify-between w-full">
        <div className="text-white text-2xl font-semibold">{industry}</div>
        <div className="text-white">
          <FaArrowRight size={32} />
        </div>
      </div>
    </motion.div>
  );
};

export default IndustryCard;
