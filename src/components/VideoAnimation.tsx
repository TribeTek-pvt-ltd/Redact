"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function OverlayStackedSequence() {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controlsVideo = useAnimation();

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isAtVideoStage, setIsAtVideoStage] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0.4,
  });

  useEffect(() => {
    if (!inView || isAtVideoStage) return;

    async function runSequence() {
      // Ultra-premium cinematic easing
      const smoothTransition = {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      };

      const slide3D = {
        y: "0%",
        opacity: 1,
        rotateX: 0,
        z: -100,
        transition: smoothTransition,
      };

      // Image 1
      controls1.start(slide3D);
      await new Promise((res) => setTimeout(res, 240));

      // Image 2
      controls2.start(slide3D);
      await new Promise((res) => setTimeout(res, 240));

      // Image 3
      controls3.start(slide3D);
      await new Promise((res) => setTimeout(res, 240));

      // Video (final hero reveal)
      await controlsVideo.start({
        ...slide3D,
        transition: {
          duration: 1.1,
          ease: [0.16, 1, 0.3, 1],
        },
      });

      setIsAtVideoStage(true);
    }

    runSequence();
  }, [inView, isAtVideoStage]);

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
        {/* Image 1 */}
        <motion.img
          src="/1.png"
          alt="Image 1"
          className="absolute inset-0 w-full h-full object-cover rounded-xl sm:rounded-[32px]"
          initial={{
            y: "100%",
            opacity: 0,
            rotateX: 12,
            z: 100,
          }}
          animate={controls1}
          style={{
            zIndex: 1,
            willChange: "transform, opacity",
            opacity: 0.9,
            ...glassStyle,
          }}
        />

        {/* Image 2 */}
        <motion.img
          src="https://picsum.photos/id/1016/800/450"
          alt="Image 2"
          className="absolute inset-0 w-full h-full object-cover rounded-xl sm:rounded-[32px]"
          initial={{
            y: "100%",
            opacity: 0,
            rotateX: 12,
            z: 100,
          }}
          animate={controls2}
          style={{
            zIndex: 2,
            willChange: "transform, opacity",
            opacity: 0.9,
            ...glassStyle,
          }}
        />

        {/* Image 3 */}
        <motion.img
          src="https://picsum.photos/id/1018/800/450"
          alt="Image 3"
          className="absolute inset-0 w-full h-full object-cover rounded-xl sm:rounded-[32px]"
          initial={{
            y: "100%",
            opacity: 0,
            rotateX: 12,
            z: 100,
          }}
          animate={controls3}
          style={{
            zIndex: 3,
            willChange: "transform, opacity",
            opacity: 0.9,
            ...glassStyle,
          }}
        />

        {/* Video */}
        <motion.video
          ref={videoRef}
          src="/video/vsl.mp4"
          className="absolute inset-0 w-full h-full object-cover rounded-xl sm:rounded-[32px]"
          initial={{
            y: "100%",
            opacity: 0,
            rotateX: 14,
            z: 100,
          }}
          animate={controlsVideo}
          playsInline
          loop
          style={{
            zIndex: 4,
            willChange: "transform, opacity",
            ...glassStyle,
          }}
        />
      </div>
    </div>
  );
}
