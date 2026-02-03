"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const BASE_IMAGES = [
  "/1.png",
  "https://picsum.photos/id/1016/800/450",
  "https://picsum.photos/id/1018/800/450",
];

// Repeat images 5 times (Total 15 images)
const IMAGES = Array.from({ length: 5 })
  .flatMap(() => BASE_IMAGES);

const CARD_DELAY = 0.24; // Delay between each card in seconds

export default function OverlayStackedSequence() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isAtVideoStage, setIsAtVideoStage] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true, // Only trigger animation once
  });

  // Calculate when the video should start
  // Total time = (IMAGES.length - 1) * CARD_DELAY + transitionDuration?
  // Actually, we can just delay the video animation by IMAGES.length * CARD_DELAY

  useEffect(() => {
    if (inView) {
      const totalSequenceTime = IMAGES.length * CARD_DELAY * 1000 + 500; // slightly padded
      const timer = setTimeout(() => {
        setIsAtVideoStage(true);
      }, totalSequenceTime);
      return () => clearTimeout(timer);
    }
  }, [inView]);

  useEffect(() => {
    if (!videoRef.current) return;

    if (inView && isAtVideoStage) {
      videoRef.current.muted = false;
      videoRef.current.play().catch((e) => console.log("Autoplay blocked/interrupted", e));
    } else {
      videoRef.current.pause();
      if (!inView) {
        videoRef.current.muted = true;
      }
    }
  }, [inView, isAtVideoStage]);

  const glassStyle = {
    backdropFilter: "blur(12px) saturate(180%)",
    WebkitBackdropFilter: "blur(12px) saturate(180%)",
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    border: "1px solid rgba(255, 255, 255, 0.12)",
    boxShadow: `
      0 30px 60px rgba(0,0,0,0.35),
      0 10px 20px rgba(0,0,0,0.25),
      inset 0 1px 1px rgba(255,255,255,0.2)
    `,
  };

  const smoothTransition = {
    duration: 1,
    ease: [0.22, 1, 0.36, 1],
  };

  const cardVariants = {
    hidden: {
      y: "100%",
      opacity: 0,
      rotateX: 12,
      z: 100,
    },
    visible: (index: number) => ({
      y: "0%",
      opacity: 1,
      rotateX: 0,
      z: -100,
      transition: {
        ...smoothTransition,
        delay: index * CARD_DELAY,
      },
    }),
  };

  const videoVariants = {
    hidden: {
      y: "100%",
      opacity: 0,
      rotateX: 14,
      z: 100,
    },
    visible: {
      y: "0%",
      opacity: 1,
      rotateX: 0,
      z: -100,
      transition: {
        duration: 1.1,
        ease: [0.16, 1, 0.3, 1],
        delay: IMAGES.length * CARD_DELAY,
      },
    },
  };

  return (
    <div
      ref={ref}
      className="w-full flex items-center justify-center py-8 rounded-lg sm:py-12 px-2 sm:px-6"
    >
      {/* 3D perspective container */}
      <div
        className="relative w-full max-w-7xl aspect-video rounded-xl sm:rounded-[32px] overflow-hidden"
        style={{
          perspective: "1400px",
          transformStyle: "preserve-3d",
        }}
      >
        {IMAGES.map((src, index) => (
          <motion.div
            key={`${src}-${index}`}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="absolute inset-0 m-auto group relative flex flex-col justify-between items-center
              min-w-[220px] sm:min-w-[250px] md:min-w-[300px]
              h-[300px] sm:h-[350px] md:h-[400px]
              rounded-3xl p-4 sm:p-5 md:p-6 cursor-pointer overflow-hidden
              bg-black/30 backdrop-blur-xl
              border border-white/15
              shadow-[0_18px_40px_-16px_rgba(0,0,0,0.55)]"
            style={{
              zIndex: index + 1,
              willChange: "transform, opacity",
            }}
          >
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover -z-10"
            />
          </motion.div>
        ))}

        {/* Video */}
        <motion.video
          ref={videoRef}
          src="/video/vsl.mp4"
          className="absolute inset-0 w-full h-full object-cover rounded-xl sm:rounded-[32px]"
          variants={videoVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          playsInline
          loop
          style={{
            zIndex: IMAGES.length + 1,
            willChange: "transform, opacity",
            ...glassStyle,
          }}
        />
      </div>
    </div>
  );
}
