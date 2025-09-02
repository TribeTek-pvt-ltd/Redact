"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";

interface StatsNumber {
  number: number;
  title: string;
}

//Commit changes

const StatCard: React.FC<StatsNumber> = ({ number, title }) => {
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(count, number, { duration: 0.2, ease: "easeOut" });

    // subscribe to value changes
    const unsubscribe = count.on("change", (latest) => {
      setDisplay(Math.floor(latest));
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [number, count]);

  return (
    <div className="flex  flex-col items-center p-4 rounded-2xl ">
      <motion.h2 className="text-8xl md:text-9xl text-center font-bold text-blue-500">
        {display}+
      </motion.h2>
      <p className="text-3xl text-gray-100 font-light">{title}</p>
    </div>
  );
};

export default StatCard;
