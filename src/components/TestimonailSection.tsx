"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import TestimonialCard from "@/components/TestimonialCard";

const testimonialData = [
  {
    name: "John Doe",
    role: "CEO, StartupX",
    feedback:
      "TribeTek transformed our brand presence with high-quality content. The team’s creativity is unmatched!",
  },
  {
    name: "Sarah Smith",
    role: "Marketing Manager, DesignCo",
    feedback:
      "Their video production and editing were spot on. It gave our campaign the edge we needed.",
  },
  {
    name: "David Johnson",
    role: "Content Creator",
    feedback:
      "The shortform editing services saved me hours. My content now looks polished and professional.",
  },
];

const AUTO_SWITCH_INTERVAL = 3500;

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = window.setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonialData.length);
      }, AUTO_SWITCH_INTERVAL);
    }

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered]);

  return (
    <section className="w-full py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-6 md:gap-12">
        {/* Title on left */}
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
            Client Testimonials
          </h2>
          <p className="text-gray-300 text-sm sm:text-base">
            Hear from our satisfied clients and their experiences.
          </p>
        </div>

        {/* Testimonial card on right */}
        <div
          className="w-full md:w-2/3 relative overflow-hidden min-h-[220px] sm:min-h-[250px] md:h-64 mt-6 md:mt-12"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0">
              <TestimonialCard {...testimonialData[currentIndex]} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
