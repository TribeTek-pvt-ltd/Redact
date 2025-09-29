"use client";

import { motion } from "framer-motion";

interface SecondaryHeroProps {
  heading: string;
  body: string;
}

export default function SecondaryHero({ heading, body }: SecondaryHeroProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="py-20 flex items-start justify-start text-white px-6 sm:px-10 md:px-16">
      <div className="container mx-auto">
        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-6xl md:text-8xl font-extrabold mb-6 sm:mb-8 text-left leading-tight">
          {heading}
        </motion.h1>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row sm:justify-between items-start gap-8 sm:gap-12 mb-6 sm:mb-12">
          <div></div>
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            className="text-lg sm:text-xl md:text-2xl font-light leading-relaxed text-gray-200 max-w-2xl text-right">
            {body}
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
}
