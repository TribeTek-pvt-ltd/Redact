"use client";

import { motion } from "framer-motion";
import Button from "@/components/Button";
import { useCalendly } from "@/app/hooks/useCalendly";

export default function Hero() {
  const { openCalendly } = useCalendly();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="py-10 sm:min-h-[80vh] min-h-[60vh] flex items-center justify-start text-white p-4 sm:p-6 md:p-8">
      <div className="container mx-auto">
        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-4xl md:text-7xl font-bold mb-2 sm:mb-6 text-left py-10">
          <p>Creating bold visuals </p>
          <p>for brands that lead.</p>
        </motion.h1>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row sm:justify-between items-start gap-6 sm:gap-8 mb-4 sm:mb-8">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}>
            <Button onClick={openCalendly}>Let&apos;s Talk</Button>
          </motion.div>
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            className=" text-s sm:text-shadow-sm md:text-lg font-light leading-relaxed text-gray-200 max-w-prose text-right">
            Redact Media helps brands and creators grow online through bold
            strategy, sharp storytelling, and standout content. From social
            media to commercials, we craft work that connects, converts, and
            scales with style
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
}
