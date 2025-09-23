"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function OverlayStackedSequence() {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controlsVideo = useAnimation();

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (!inView) return;

    async function runSequence() {
      await controls1.start({
        y: "0%",
        opacity: 1,
        transition: { duration: 0.75 },
      });
      await new Promise((res) => setTimeout(res, 100));

      await controls2?.start({
        y: "0%",
        opacity: 1,
        transition: { duration: 0.75 },
      });
      await new Promise((res) => setTimeout(res, 100));

      await controls3?.start({
        y: "0%",
        opacity: 1,
        transition: { duration: 0.75 },
      });
      await new Promise((res) => setTimeout(res, 100));

      await controlsVideo?.start({
        y: "0%",
        opacity: 1,
        transition: { duration: 0.75 },
      });
    }

    runSequence();
  }, [inView, controls1, controls2, controls3, controlsVideo]);

  return (
    <div
      ref={ref}
      className="w-full flex items-center justify-center  py-8 sm:py-12 px-2 sm:px-6">
      <div
        className="
          relative 
          w-full 
          max-w-7xl 
          aspect-video 
          sm:rounded-2xl 
          rounded-lg 
          overflow-hidden
        ">
        {/* Image 1 */}
        <motion.img
          src="https://picsum.photos/id/1015/800/450"
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
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          className="absolute w-full h-full object-cover rounded-lg sm:rounded-2xl shadow-lg sm:shadow-xl"
          initial={{ y: "100%", opacity: 0 }}
          animate={controlsVideo}
          autoPlay
          muted
          playsInline
          loop
          style={{ zIndex: 4 }}
        />
      </div>
    </div>
  );
}
