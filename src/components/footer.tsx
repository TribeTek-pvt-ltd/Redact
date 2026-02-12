"use client";

import { motion } from "framer-motion";
import Button from "@/components/Button";

export default function Hero() {
  return (
    <section className="w-full mt-30 bg-gradient-to-r from-blue-950/30 via-black/20 to-blue-950/30">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="py-6 flex items-start justify-start text-white px-4 sm:px-6 md:px-8" // ⬅️ reduced from py-10
      >
        <div className="container mx-auto">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="text-2xl sm:text-3xl md:text-6xl font-inter font-bold mb-3 sm:mb-4 text-left"
          >
            <p className="footerHeading">Great Ideas Spark</p>
            <p className="footerHeading">With Simple Conversation,</p>
            <div className="footerText text-xl sm:text-2xl md:text-5xl font-bold mb-3 sm:mb-4 text-left mt-4">
              <p>Let&apos;s Start Talking About</p>
              <p>Your Next Big Idea!</p>
            </div>
          </motion.div>

          <div className="mt-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
            >
              <Button href="/contact" className="text-white">Schedule Call</Button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
