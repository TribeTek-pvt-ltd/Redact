"use client";

import { motion } from "framer-motion";
import Button from "@/components/Button";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="py-10 flex items-start justify-start text-white p-4 sm:p-6 md:p-8">
      <div className="container mx-auto">
        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-7xl font-bold mb-4 sm:mb-6 text-left py-10">
          <p>Creating Cutting Edge</p>
          <p>Videos For Epic Brands</p>
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
            <Button href="/contact">Let&apos;s Talk</Button>
          </motion.div>
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            className="text-base sm:text-lg md:text-xl font-light leading-relaxed text-gray-200 max-w-prose text-right">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
}
