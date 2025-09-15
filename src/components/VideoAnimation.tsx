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
    triggerOnce: true, // ✅ only trigger once
    threshold: 0.3, // component enters viewport by 30%
  });

  useEffect(() => {
    if (!inView) return;

    async function runSequence() {
      // Image 1
      await controls1.start({
        y: "0%",
        opacity: 1,
        transition: { duration: 0.2 },
      });
      await new Promise((res) => setTimeout(res, 100));

      // Image 2
      await controls2.start({
        y: "0%",
        opacity: 1,
        transition: { duration: 0.2 },
      });
      await new Promise((res) => setTimeout(res, 100));

      // Image 3
      await controls3.start({
        y: "0%",
        opacity: 1,
        transition: { duration: 0.2 },
      });
      await new Promise((res) => setTimeout(res, 100));

      // Video
      await controlsVideo.start({
        y: "0%",
        opacity: 1,
        transition: { duration: 0.1 },
      });
    }

    runSequence();
  }, [inView, controls1, controls2, controls3, controlsVideo]);

  return (
    <div
      ref={ref}
      className="w-full flex items-center justify-center min-h-screen">
      <div className="relative max-w-7xl w-full aspect-video">
        {/* Image 1 */}
        <motion.img
          src="https://picsum.photos/id/1015/800/450"
          alt="Image 1"
          className="absolute w-full h-full object-cover rounded-2xl shadow-xl"
          initial={{ y: "100%", opacity: 0 }}
          animate={controls1}
          style={{ zIndex: 1 }}
        />

        {/* Image 2 */}
        <motion.img
          src="https://picsum.photos/id/1016/800/450"
          alt="Image 2"
          className="absolute w-full h-full object-cover rounded-2xl shadow-xl"
          initial={{ y: "100%", opacity: 0 }}
          animate={controls2}
          style={{ zIndex: 2 }}
        />

        {/* Image 3 */}
        <motion.img
          src="https://picsum.photos/id/1018/800/450"
          alt="Image 3"
          className="absolute w-full h-full object-cover rounded-2xl shadow-xl"
          initial={{ y: "100%", opacity: 0 }}
          animate={controls3}
          style={{ zIndex: 3 }}
        />

        {/* Video */}
        <motion.video
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          className="absolute w-full h-full object-cover rounded-2xl shadow-xl"
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
