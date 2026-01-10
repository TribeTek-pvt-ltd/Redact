"use client";

import React, { useEffect, useState } from "react";

const FloatingGradient = () => {
  const [scrollY, setScrollY] = useState(0);
  const [docHeight, setDocHeight] = useState(1);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    const handleResize = () => {
      setDocHeight(document.documentElement.scrollHeight - window.innerHeight);
    };

    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Progress from 0 → 1
  const progress = docHeight > 0 ? scrollY / docHeight : 0;

  // Define waypoints
  const points = [
    [50, 0], // top center
    [90, 40], // right mid
    [10, 60], // left mid
    [50, 100], // bottom center
  ];

  // Number of stops = points.length
  // Each stop has: [hold 25%, move 25%] = 50% per segment
  const segmentCount = points.length - 1;
  const segmentProgress = progress * segmentCount; // e.g. 0..3
  const segmentIndex = Math.floor(segmentProgress);
  const t = segmentProgress - segmentIndex; // local progress [0..1]

  // Split into hold (0–0.3) and move (0.3–1.0)
  let eased = 0;
  if (t < 0.3) {
    eased = 0; // hold
  } else {
    const moveT = (t - 0.3) / 0.6; // rescale 0.3–1 → 0–1
    // ease-in-out cubic
    eased =
      moveT < 0.5
        ? 4 * moveT * moveT * moveT
        : 1 - Math.pow(-2 * moveT + 2, 3) / 2;
  }

  const [x1, y1] = points[segmentIndex] || points[0];
  const [x2, y2] = points[segmentIndex + 1] || points[points.length - 1];

  const x = x1 + (x2 - x1) * eased;
  const y = y1 + (y2 - y1) * eased;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute w-[700px] h-[700px] rounded-full"
        style={{
          left: `${x}%`,
          top: `${y}%`,
          background:
            "radial-gradient(circle at center, rgba(0,114,255,0.6), rgba(0,114,255,0.2), transparent 90%)",
          filter: "blur(150px)",
          transform: "translate(-50%, -50%)",
          transition: "left 0.4s ease-in-out, top 0.4s ease-in-out",
        }}
      />
    </div>
  );
};

export default FloatingGradient;
