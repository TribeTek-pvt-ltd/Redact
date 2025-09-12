"use client";

import { useState } from "react";
import WorkCard from "./WorkCard";

interface Work {
  id: number;
  thumbnail: string;
  title: string;
  workType: string;
  extraText?: string;
}

// Sample data
const worksData: Work[] = [
  {
    id: 1,
    thumbnail: "https://picsum.photos/300/200?random=1",
    title: "Mountain Adventure",
    workType: "Travel",
    extraText: "Lifestyle",
  },
  {
    id: 2,
    thumbnail: "https://picsum.photos/300/200?random=2",
    title: "City Vibes",
    workType: "Photography",
    extraText: "Urban",
  },
  {
    id: 3,
    thumbnail: "https://picsum.photos/300/200?random=3",
    title: "Beach Life",
    workType: "Travel",
    extraText: "Lifestyle",
  },
  {
    id: 6,
    thumbnail: "https://picsum.photos/300/200?random=3",
    title: "Beach Life",
    workType: "Travel",
    extraText: "Lifestyle",
  },
  {
    id: 5,
    thumbnail: "https://picsum.photos/300/200?random=3",
    title: "Beach Life",
    workType: "Travel",
    extraText: "Lifestyle",
  },
  {
    id: 4,
    thumbnail: "https://picsum.photos/300/200?random=4",
    title: "Food Art",
    workType: "Culinary",
    extraText: "Gourmet",
  },
];

export default function WorksGallery() {
  const [filter, setFilter] = useState<string>("All");

  const workTypes = Array.from(new Set(worksData.map((work) => work.workType)));

  const filteredWorks =
    filter === "All"
      ? worksData
      : worksData.filter((work) => work.workType === filter);

  return (
    <div className="space-y-4 container mx-auto p-4">
      {/* Filter Options */}
      <div className="flex justify-center space-x-2">
        <button
          className={`px-2 py-2 rounded-md border border-white/30 backdrop-blur-md transition-colors duration-300 ${
            filter === "All"
              ? "bg-white/30 text-black"
              : "bg-white/10 text-white hover:bg-white/20"
          }`}
          onClick={() => setFilter("All")}>
          All
        </button>

        {workTypes.map((type) => (
          <button
            key={type}
            className={`px-6 py-2 rounded-md border border-white/30 backdrop-blur-md transition-colors duration-300 ${
              filter === type
                ? "bg-white/30 text-black"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
            onClick={() => setFilter(type)}>
            {type}
          </button>
        ))}
      </div>

      {/* Works Grid */}
      <div className="grid grid-cols-1 pt-12 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center ">
        {filteredWorks.map((work) => (
          <WorkCard
            key={work.id}
            thumbnail={work.thumbnail}
            title={work.title}
            workType={work.workType}
            extraText={work.extraText}
          />
        ))}
      </div>
    </div>
  );
}
