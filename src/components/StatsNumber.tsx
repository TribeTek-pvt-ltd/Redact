"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

interface StatsNumberProps {
  number: number;
  title: string;
}

const StatsNumber: React.FC<StatsNumberProps> = ({ number, title }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 500; // 👈 2 seconds
    const frameRate = 60;
    const totalFrames = Math.round((duration / 500) * frameRate);
    const increment = number / totalFrames;

    let current = 0;
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      current += increment;

      if (frame >= totalFrames) {
        clearInterval(counter);
        setCount(number); // exact final value
      } else {
        setCount(Math.floor(current));
      }
    }, 1000 / frameRate);

    return () => clearInterval(counter);
  }, [number]);

  return (
    <div className="flex  flex-col items-center p-4 rounded-2xl ">
      <motion.h2 className="text-8xl md:text-9xl text-center font-bold text-blue-500 font-uber">
        {count}+
      </motion.h2>
      <p className="text-3xl text-gray-100 font-light">{title}</p>
    </div>
  );
};

export default StatsNumber;
