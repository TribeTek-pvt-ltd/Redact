"use client";

import React, { useEffect, useState } from "react";

const FloatingGradient = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll speed factor (controls how fast the zigzag loops)
  const speed = 0.002; // smaller = slower

  // Normalize scroll into a repeating cycle [0..1]
  const cycle = (scrollY * speed) % 1;

  // Zigzag path logic
  let x = 0;
  let y = 0;

  if (cycle < 0.25) {
    // Top center → bottom left
    x = -300 * (cycle / 0.25); // move left
    y = 800 * (cycle / 0.25);  // move down
  } else if (cycle < 0.5) {
    // Bottom left → bottom center
    x = -300 + 300 * ((cycle - 0.25) / 0.25);
    y = 800;
  } else if (cycle < 0.75) {
    // Bottom center → bottom right
    x = 0 + 300 * ((cycle - 0.5) / 0.25);
    y = 800;
  } else {
    // Bottom right → back to top center
    x = 300 - 300 * ((cycle - 0.75) / 0.25);
    y = 800 - 800 * ((cycle - 0.75) / 0.25);
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute w-[700px] h-[700px] rounded-full"
        style={{
          left: `calc(50% + ${x}px)`,
          top: `${y}px`,
          background:
            "radial-gradient(circle at center, rgba(0,114,255,0.6), rgba(0,114,255,0.2), transparent 90%)",
          filter: "blur(140px)",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
};

export default FloatingGradient;
