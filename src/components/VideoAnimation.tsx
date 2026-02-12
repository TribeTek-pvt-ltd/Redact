"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const IMAGES = [
  "video/1.png",
  "video/2.png",
  "video/3.png",
  "video/4.png",
  "video/5.png",
  "video/6.png",


];

export default function OverlayStackedSequence() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isAtVideoStage, setIsAtVideoStage] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0.4,
  });

  useEffect(() => {
    if (inView && !hasStarted) {
      setHasStarted(true);
    }
  }, [inView, hasStarted]);

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

  // Enhanced glassmorphism with bevel/emboss for images only
  const imageGlassStyle = {
    backdropFilter: "blur(24px) saturate(250%)",
    WebkitBackdropFilter: "blur(24px) saturate(250%)",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    border: "2px solid rgba(255, 255, 255, 0.25)",
    boxShadow: `
      0 30px 60px rgba(0,0,0,0.4),
      0 10px 20px rgba(0,0,0,0.3),
      inset 0 2px 4px rgba(255,255,255,0.4),
      inset 0 -2px 4px rgba(0,0,0,0.25),
      inset -2px 0 6px rgba(0,0,0,0.2),
      inset 2px 2px 8px rgba(255,255,255,0.35)
    `,
  };

  // Standard glass style for video
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

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.24,
      },
    },
  };

  const itemVariants = {
    hidden: {
      y: "100%",
      opacity: 0,
      rotateX: 12,
      z: 100,
    },
    visible: {
      y: "0%",
      opacity: 1,
      rotateX: 0,
      z: -100,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
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
      },
    },
  };

  return (
    <div
      ref={ref}
      className="w-full flex items-center justify-center py-8 rounded-lg sm:py-12 px-2 sm:px-6"
    >
      {/* 3D perspective container */}
      <motion.div
        className="relative w-full max-w-7xl aspect-video rounded-xl sm:rounded-[32px] overflow-hidden"
        style={{
          perspective: "1400px",
          transformStyle: "preserve-3d",
        }}
        variants={containerVariants}
        initial="hidden"
        animate={hasStarted ? "visible" : "hidden"}
      >
        {IMAGES.map((src, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 w-full h-full rounded-xl sm:rounded-[32px] overflow-hidden"
            variants={itemVariants}
            style={{
              zIndex: index + 1,
              willChange: "transform, opacity",
              ...imageGlassStyle,
            }}
          >
            {/* Shining corner shade from left side */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(circle at 0% 0%, 
                  rgba(255,255,255,0.4) 0%, 
                  rgba(255,255,255,0.2) 15%, 
                  rgba(255,255,255,0.05) 30%, 
                  transparent 50%)`,
                mixBlendMode: "overlay",
              }}
            />
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover"
              style={{
                opacity: 0.9,
              }}
            />
          </motion.div>
        ))}

        {/* Video */}
        <motion.video
          ref={videoRef}
          src="/video/vsl.mp4"
          className="absolute inset-0 w-full h-full object-cover rounded-xl sm:rounded-[32px]"
          variants={videoVariants}
          onAnimationComplete={() => setIsAtVideoStage(true)}
          playsInline
          loop
          style={{
            zIndex: IMAGES.length + 1,
            willChange: "transform, opacity",
            ...glassStyle,
          }}
        />
      </motion.div>
    </div>
  );
}