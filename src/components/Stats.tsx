"use client";

import React, { useRef, useState, useEffect } from "react";
import StatsNumber from "@/components/StatsNumber";

interface Stat {
  number: number;
  title: string;
}

const StatsSection: React.FC = () => {
  const stats: Stat[] = [
    { number: 5, title: "Years" },
    { number: 100, title: "Projects" },
    { number: 15, title: "Recurring Clients" },
  ];

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // 👇 Unique key every refresh (forces StatsNumber to re-run animation)
  const [refreshKey] = useState(Date.now());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(false);
            setTimeout(() => setIsVisible(true), 50);
          }
        });
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-6 lg:px-12 py-8 sm:py-12"
    >
      {isVisible &&
        stats.map((stat, index) => (
          <div
            key={`${refreshKey}-${index}`} // 👈 this line forces re-animation
            className="flex justify-center w-full max-w-[200px] sm:max-w-none mx-auto"
          >
            <StatsNumber number={stat.number} title={stat.title} />
          </div>
        ))}
    </div>
  );
};

export default StatsSection;
