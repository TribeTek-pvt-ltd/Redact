"use client";

import React from "react";
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

  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 p-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="flex justify-center" // centers each card in its grid cell
        >
          <StatsNumber number={stat.number} title={stat.title} />
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
