"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function HeroSection() {
  return (
    <div className="relative w-full max-w-4xl px-8 py-20 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white overflow-hidden">
      {/* Corner shine */}
      <motion.div
        className="absolute top-0 right-0 w-24 h-24 bg-white/40 blur-3xl rounded-full pointer-events-none"
        initial={{ opacity: 0.2, scale: 0.8 }}
        animate={{ opacity: [0.2, 0.6, 0.2], scale: [0.8, 1, 0.8] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 2,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold mb-6">
          🎬 Elevate Your Short-Form Content!
        </h1>
        <p className="text-lg mb-8">
          Redact Media is here to bring your videos to life. For the next month,
          connect with us on social media for pro editing tips, reels, and
          content support.
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 text-3xl mb-6">
          {/* <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors duration-300">
            <FaFacebook />
          </a> */}
          <a
            href="https://www.instagram.com/redact05/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors duration-300">
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/company/redact44/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition-colors duration-300">
            <FaLinkedin />
          </a>
          <a
            href="mailto:contact@redact.com"
            className="hover:text-red-500 transition-colors duration-300">
            <FaEnvelope />
          </a>
        </div>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            const email = "contact@redact.com";
            const subject = encodeURIComponent("Request to Schedule a Meeting");
            const body = encodeURIComponent(
              "Hello Redact Media Team,\n\nI would like to schedule a meeting to discuss video editing projects.\n\nThanks!"
            );
            window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-colors duration-300">
          Schedule a call
        </motion.button>
      </div>
    </div>
  );
}
