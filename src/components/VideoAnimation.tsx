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

  // animation logic
  useEffect(() => {
    if (!inView) {
      setIsAtVideoStage(false);
      return;
    }

    async function runSequence() {
      // Luxury smooth ease-out-expo for cohesive flow
      // This creates a very slick, non-bouncy slide effect
      const smoothTransition = {
        duration: 0.8,
        ease: "easeIn",
      };

      // Stagger (300ms) to make it feel like one continuous stream
      controls1.start({
        y: "0%",
        opacity: 1,
        transition: smoothTransition,
      });
      await new Promise((res) => setTimeout(res, 300));

      controls2.start({
        y: "0%",
        opacity: 1,
        transition: smoothTransition,
      });
      await new Promise((res) => setTimeout(res, 300));

      // Mark that we are entering the video reveal stage
      await controlsVideo.start({
        y: "0%",
        opacity: 1,
        transition: smoothTransition,
      });
      await new Promise((res) => setTimeout(res, 300));

      controlsVideo.start({
        y: "0%",
        opacity: 1,
        transition: smoothTransition,
      });
      setIsAtVideoStage(true);
    }

    runSequence();
  }, [inView]);

  // audio + play/pause logic
  useEffect(() => {
    if (!videoRef.current) return;

    if (inView && isAtVideoStage) {
      videoRef.current.muted = false;
      videoRef.current.play();
    } else {
      videoRef.current.muted = true;
      videoRef.current.pause();
    }
  }, [inView, isAtVideoStage]);

  return (
    <div
      ref={ref}
      className="w-full flex items-center justify-center py-8 sm:py-12 px-2 sm:px-6">
      <div className="relative w-full max-w-7xl aspect-video sm:rounded-2xl rounded-lg overflow-hidden">
        {/* Image 1 */}
        <motion.img
          src="/1.png"
          alt="Image 1"
          className="absolute w-full h-full object-cover rounded-lg sm:rounded-2xl shadow-lg sm:shadow-xl"
          initial={{ y: "100%", opacity: 0 }}
          animate={controls1}
          style={{ zIndex: 1 }}
        />

        {/* Image 2 */}
        <motion.img
          src="https://picsum.photos/id/1016/800/450"
          alt="Image 2"
          className="absolute w-full h-full object-cover rounded-lg sm:rounded-2xl shadow-lg sm:shadow-xl"
          initial={{ y: "100%", opacity: 0 }}
          animate={controls2}
          style={{ zIndex: 2 }}
        />

        {/* Image 3 */}
        <motion.img
          src="https://picsum.photos/id/1018/800/450"
          alt="Image 3"
          className="absolute w-full h-full object-cover rounded-lg sm:rounded-2xl shadow-lg sm:shadow-xl"
          initial={{ y: "100%", opacity: 0 }}
          animate={controls3}
          style={{ zIndex: 3 }}
        />

        {/* Video */}
        <motion.video
          ref={videoRef}
          src="/video/vsl.mp4"
          className="absolute w-full h-full object-cover rounded-lg sm:rounded-2xl shadow-lg sm:shadow-xl"
          initial={{ y: "100%", opacity: 0 }}
          animate={controlsVideo}
          playsInline
          loop
          style={{ zIndex: 4 }}
        />
      </div>
    </div>
  );
}
