"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import TestimonialCard from "@/components/TestimonialCard";

const testimonialData = [
  {
    name: "JBenyamin Azadian",
    role: "American Distribution General Trading LLC",
    feedback:
      "Redact delivered state-of-the-art editing remotely with incredible passion. Even with minimal filming equipment, he managed, edited, and polished the video to an outstanding final result. Great quality, fair pricing, I’m truly happy with the work.",
  },
  {
    name: "Dr. Daniella Marchetti",
    role: "Sleep Psychologist",
    feedback:
      "Working with Redact was easy and enjoyable. They were responsive, professional, and made the process smooth from start to finish.",
  },
  {
    name: "Kyri Leontiou",
    role: "Kyri Media",
    feedback:
      "I’ve been working with Saran for over two years, and he’s an exceptional editor. He’s highly professional, consistently delivers high-quality work, and always meets deadlines. He’s also quick, reliable, and genuinely easy to work with.",
  },
  {
    name: "Vaasanthika Parthasarathy ",
    role: "Heartsease counseling services",
    feedback:
      "Worked with Saran Raj 6+ months one of my smoothest collaborations. Skilled, reliable, respectful, and quality-driven. Clear communication, always on time, proactive with great suggestions. Organized, humble, consistent. Hope to work long-term.",
  },
  {
    name: "Rufus Linton",
    role: "",
    feedback:
      "Working with Saran is a game-changer. He’s insanely talented, easy to work with, and adapts fast. He even makes real-time edits on quick calls. Always on top of trends, brings fresh ideas, responds fast, and makes the process effortless.",
  },
  {
    name: "Praveen Krishnaraja",
    role: "Windsor Production",
    feedback:
      "Working with Saran on The Maadhar was incredible. His youthful energy and cinematic knowledge brought real finesse—especially in the edit. The huge positive response to the film’s technical quality speaks for itself. Excited to collaborate again soon.",
  },
];

const AUTO_SWITCH_INTERVAL = 3500;

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialData.length);
  };

  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = window.setInterval(() => {
        handleNext();
      }, AUTO_SWITCH_INTERVAL);
    }

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered]);

  return (
    <section className="w-full py-12 px-4 sm:px-6 overflow-x-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-6 md:gap-12">
        {/* Title on left */}
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
            Client Testimonials
          </h2>
          <p className="text-gray-300 text-sm sm:text-base">
            Hear from our satisfied clients and their experiences.
          </p>

          <div className="flex items-center justify-center md:justify-start gap-4 mt-6">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/10 text-white"
              aria-label="Previous testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/10 text-white"
              aria-label="Next testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Testimonial card on right */}
        <div
          className="w-full md:w-2/3 relative min-h-[300px] sm:min-h-[320px] md:h-80 mt-6 md:mt-0 p-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-4">
              <TestimonialCard {...testimonialData[currentIndex]} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
