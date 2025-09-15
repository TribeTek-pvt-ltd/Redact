"use client";

import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

interface TestimonialCardProps {
  name: string;
  role?: string;
  feedback: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  feedback,
}) => {
  return (
    <motion.div
      // whileHover={{ scale: 1.02 }}
      className="flex flex-col px-7 justify-start items-start text-left space-y-4">
      {/* Big Quote */}
      {/* <span className="text-8xl text-blue-400 leading-none select-none">“</span> */}
      <FaQuoteLeft className="text-6xl text-blue-400 select-none" />
      {/* Feedback */}
      <p className="text-white text-xl md:text-2xl leading-relaxed">
        {feedback}
      </p>

      {/* Name */}
      <div className="mt-2">
        <p className="text-white font-bold text-lg">{name}</p>
        {role && <p className="text-gray-400 text-sm">{role}</p>}
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
