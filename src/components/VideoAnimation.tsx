"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const IMAGES = [
  "/1.png",
  "https://picsum.photos/id/1016/800/450",
  "https://picsum.photos/id/1018/800/450",
  "/images/vdoImage1.avif",
  "/images/vdoImage2.webp",
  "/images/vdoImage3.jpg",
  "/images/vdoImage4.webp",
  "/images/vdoImage5.jpg",
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
          <motion.img
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            className="absolute inset-0 w-full h-full object-cover rounded-xl sm:rounded-[32px]"
            variants={itemVariants}
            style={{
              zIndex: index + 1,
              willChange: "transform, opacity",
              opacity: 0.9,
              ...glassStyle,
            }}
          />
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