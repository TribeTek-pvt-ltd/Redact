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
          className="text-2xl sm:text-3xl md:text-6xl font-bold mb-4 sm:mb-6 text-left py-15">
          <p>Great Ideas Spark</p>
          <p>With Simple Conversation,</p>
          <div className="text-xl sm:text-2xl md:text-5xl font-bold mb-4 sm:mb-6 text-left py-6 text-blue-600">
            <p>Let&apos;s Start Talking About</p>
            <p>Your Next Big Idea!</p>
          </div>

          <div className=" py-1 ">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}>
              <Button href="/contact">Schedule Call</Button>
            </motion.div>
          </div>
        </motion.h1>
      </div>
    </motion.div>
  );
}
