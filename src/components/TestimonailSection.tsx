"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import TestimonialCard from "@/components/TestimonialCard";

const testimonialData = [
  {
    name: "JBenyamin Azadian",
    role: "American Distribution General Trading LLC",
    feedback:
      "edact from overseas did a job that many people wouldn’t do with the same passion in the country I am. Let me mention that the quality of work was off the roof and saran did a state of the art editing for us. The video was shot with the minimum equipment and managed and edited and fined remotely by saran. The end result was state of the art, their pricing also was great. I’m super happy and pleased with their work.",
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
      "I’ve been working with Saran Raj for over six months, and it’s been one of the most seamless collaborations I’ve had. He’s not only technically skilled but also reliable, respectful, and genuinely invested in quality. Saran is professional, communicates clearly, and always delivers on time even when challenges come up. What really stands out is his proactive mindset and willingness to offer helpful suggestions. His organized workflow, humility, and consistency make him a standout. I truly hope to continue working with him long term.",
  },
  {
    name: "Rufus Linton",
    role: "",
    feedback:
      "Working with Saran has been an absolute game-changer. He’s insanely talented, super easy to work with. He’s open to feedback, quick to adapt, and somehow manages to make real-time edits during our short calls shows his technical capabilities. Saran always up to date with the latest trends, bringing fresh ideas that take reels to the next level. On top of that, he’s approachable, fast to respond, and makes the whole process feel effortless.",
  },
  {
    name: "Praveen Krishnaraja",
    role: "Windsor Production",
    feedback:
      "Working with Saran on The Maadhar was an incredible experience. His youthful enthusiasm and deep cinematic knowledge brought exceptional technical finesse to the film, especially in editing. The massive positive response to the film’s technical quality is a testament to his talent. I’m excited to collaborate with him again on bigger projects soon. Truly outstanding work.",
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
