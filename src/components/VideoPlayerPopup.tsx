"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface VideoPlayerPopupProps {
  url: string;
  onClose: () => void;
}

// Converts normal YouTube URL → embed URL
const convertToEmbedUrl = (url: string) => {
  if (url.includes("watch?v=")) {
    return url.replace("watch?v=", "embed/");
  }
  return url;
};

export default function VideoPlayerPopup({
  url,
  onClose,
}: VideoPlayerPopupProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const embedUrl = convertToEmbedUrl(url);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md">
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-[95%] sm:w-[90%] max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10">
        {/* Loading Spinner */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="w-12 h-12 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
          </div>
        )}

        {/* Video Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full h-full"
        >
          <iframe
            className="w-full h-full"
            src={`${embedUrl}?autoplay=1&rel=0&modestbranding=1`}
            allow="autoplay; encrypted-media"
            allowFullScreen
            onLoad={() => setIsLoaded(true)}
          ></iframe>
        </motion.div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-md border border-white/10 transition-all hover:scale-110 active:scale-95"
          title="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
