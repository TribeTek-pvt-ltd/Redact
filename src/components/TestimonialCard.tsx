"use client";

import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

interface TestimonialCardProps {
  name: string;
  role?: string;
  feedback: string;
  profileLink?: string;
  workLink?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  feedback,
  profileLink,
  workLink,
}) => {
  return (
    <motion.div
      className="
        relative flex flex-col justify-center items-start
        w-full h-full
        rounded-3xl p-8 sm:p-10 cursor-pointer overflow-hidden
        bg-black/30 backdrop-blur-xl
        border border-white/15
        shadow-[0_18px_40px_-16px_rgba(0,0,0,0.55)] group
      "
    >
      {/* Convex bevels and textures */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl shadow-[inset_1px_1px_0_0_rgba(255,255,255,0.15)]" />
      <div className="pointer-events-none absolute inset-0 rounded-3xl shadow-[inset_-6px_-8px_20px_rgba(0,0,0,0.35)]" />
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(120%90%_at_30%-20%,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />

      {/* Background glow blobs */}
      <div className="absolute -top-10 -left-10 w-28 h-28 sm:w-36 sm:h-36 bg-blue-500/20 rounded-full blur-3xl pointer-events-none z-0"></div>

      {workLink && (
        <a
          href={workLink}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-10"
          aria-label={`View work for ${name}`}
        />
      )}

      <div className="relative z-20 space-y-4 pointer-events-none">
        {/* Big Quote */}
        <div className="flex  w-full">
          <FaQuoteLeft className="text-4xl text-blue-400 select-none" />
        </div>

        {/* Feedback */}
        <p className="text-white text-lg md:text-xl leading-relaxed">
          {feedback}
        </p>

        {/* Name */}
        <div className="mt-2 pointer-events-auto">
          {profileLink ? (
            <a
              href={profileLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-bold text-lg hover:text-blue-400 transition-colors inline-block relative z-30"
            >
              {name}
            </a>
          ) : (
            <p className="text-white font-bold text-lg">{name}</p>
          )}
          {role && <p className="text-gray-400 text-sm">{role}</p>}
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
