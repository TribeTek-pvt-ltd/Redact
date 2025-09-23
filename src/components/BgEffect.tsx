"use client";

import React, { useEffect, useState } from "react";

const CursorGlow = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 }); // actual mouse
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 }); // smoothed glow

  // Capture mouse movement
  useEffect(() => {
    const moveHandler = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveHandler);
    return () => {
      window.removeEventListener("mousemove", moveHandler);
    };
  }, []);

  // Smooth animation for glow (lerp)
  useEffect(() => {
    let frame: number;
    const animate = () => {
      setGlowPos((prev) => ({
        x: prev.x + (cursorPos.x - prev.x) * 0.1, // easing factor
        y: prev.y + (cursorPos.y - prev.y) * 0.1,
      }));
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [cursorPos]);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Hide system cursor */}
      {/* <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style> */}

      {/* Small white cursor dot */}
      {/* <div
        className="absolute w-3 h-3 z-50 rounded-full bg-white"
        style={{
          left: cursorPos.x - 6,
          top: cursorPos.y - 6,
          pointerEvents: "none",
        }}></div> */}

      {/* Blue blurred glow following smoothly */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          left: glowPos.x - 200,
          top: glowPos.y - 200,
          background:
            "radial-gradient(circle, rgba(0,114,255,0.5), transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}></div>
    </div>
  );
};

export default CursorGlow;
