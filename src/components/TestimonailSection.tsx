"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import TestimonialCard from "@/components/TestimonialCard";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const testimonialData = [
  {
    name: "Benyamin Azadian",
    role: "American Distribution General Trading LLC",
    feedback:
      "Redact delivered state-of-the-art editing remotely with incredible passion. Even with minimal filming equipment, he managed, edited, and polished the video to an outstanding final result. Great quality, fair pricing, I’m truly happy with the work.",
    profileLink: "https://www.instagram.com/ben.dxb1313/",
    workLink: "#",
    backgroundImage: "/testimonials/BenyaminAzadian.jpeg",
  },
  {
    name: "Dr. Daniella Marchetti",
    role: "Sleep Psychologist",
    feedback:
      "Working with Redact was easy and enjoyable. They were responsive, professional, and made the process smooth from start to finish.",
    profileLink: "https://www.instagram.com/drdaniellamarchetti/",
    workLink: "#",
    backgroundImage: "/testimonials/DrDaniellaMarchetti.jpeg",
  },
  {
    name: "Kyri Leontiou",
    role: "Kyri Media",
    feedback:
      "I’ve been working with Saran for over two years, and he’s an exceptional editor. He’s highly professional, consistently delivers high-quality work, and always meets deadlines. He’s also quick, reliable, and genuinely easy to work with.",
    profileLink: "https://www.instagram.com/kyrileo/",
    workLink: "#",
    backgroundImage: "/testimonials/KyriLeontiou.jpeg",
  },
  {
    name: "Vaasanthika Parthasarathy ",
    role: "Heartsease counseling services",
    feedback:
      "Worked with Saran Raj 6+ months one of my smoothest collaborations. Skilled, reliable, respectful, and quality-driven. Clear communication, always on time, proactive with great suggestions. Organized, humble, consistent. Hope to work long-term.",
    profileLink: "https://www.instagram.com/vaasanthika/",
    workLink: "#",
    backgroundImage: "/testimonials/VaasanthikaParthasarathy.jpeg",
  },
  {
    name: "Rufus Linton",
    role: "",
    feedback:
      "Working with Saran is a game-changer. He’s insanely talented, easy to work with, and adapts fast. He even makes real-time edits on quick calls. Always on top of trends, brings fresh ideas, responds fast, and makes the process effortless.",
    profileLink: "#",
    workLink: "#",
    backgroundImage: "/testimonials/RufusLinton.jpeg",
  },
  {
    name: "Praveen Krishnaraja",
    role: "Windsor Production",
    feedback:
      "Working with Saran on The Maadhar was incredible. His youthful energy and cinematic knowledge brought real finesse—especially in the edit. The huge positive response to the film’s technical quality speaks for itself. Excited to collaborate again soon.",
    profileLink: "https://www.instagram.com/praveen_krishnaraja/",
    workLink: "#",
    backgroundImage: "/testimonials/PraveenKrishnaraja.jpeg",
  },
];

const AUTO_SWITCH_INTERVAL = 3500;

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = window.setInterval(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonialData.length);
      }, AUTO_SWITCH_INTERVAL);
    }

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonialData.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonialData.length) % testimonialData.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <section className="w-full py-12 px-4 sm:px-6 overflow-x-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch gap-6 md:gap-12">
        {/* Title on left */}
        <div className="w-full md:w-1/3 flex flex-col justify-center text-center md:text-left h-full min-h-[inherit]">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
              Client Testimonials
            </h2>
            <p className="text-gray-300 text-sm sm:text-base">
              Hear from our satisfied clients and their experiences.
            </p>
          </div>

          <div className="flex gap-3 mt-8 justify-center md:justify-start">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-md hover:bg-white/20 transition-all hover:scale-105 active:scale-95"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-md hover:bg-white/20 transition-all hover:scale-105 active:scale-95"
              aria-label="Next testimonial"
            >
              <FiChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Testimonial card on right */}
        <div
          className="w-full md:w-2/3 relative min-h-[300px] sm:min-h-[320px] md:h-80 mt-6 md:mt-0 p-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
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