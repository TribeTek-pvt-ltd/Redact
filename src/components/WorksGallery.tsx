"use client";

import { useState, useEffect } from "react";
import WorkCard from "./WorkCard";

interface Video {
  _id?: string;
  title: string;
  thumbnail: string;
  url: string;
  category: string;
  industry: string;
}

export default function WorksGallery() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [filter, setFilter] = useState<string>("All");

  // Fetch videos from backend
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch("/api/videos"); // Make sure this API returns all videos
        const data: Video[] = await res.json();
        setVideos(data);
      } catch (err) {
        console.error("Error fetching videos:", err);
      }
    };

    fetchVideos();
  }, []);

  // Get unique categories for filtering
  const categories = Array.from(new Set(videos.map((v) => v.category)));

  // Filtered videos
  const filteredVideos =
    filter === "All"
      ? videos
      : videos.filter((v) => v.category === filter);

  return (
    <div className="space-y-4 container mx-auto p-4">
      {/* Filter Options */}
      <div className="flex justify-center space-x-2 flex-wrap">
        <button
          className={`px-4 py-2 border border-white/30 backdrop-blur-md transition-colors duration-300 ${
            filter === "All" ? "bg-white/30 text-black" : "text-white hover:bg-white/20"
          }`}
          onClick={() => setFilter("All")}
        >
          All
        </button>

        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 border border-white/30 backdrop-blur-md transition-colors duration-300 ${
              filter === cat ? "bg-white/30 text-black" : "text-white hover:bg-white/20"
            }`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Works Grid */}
      <div className="grid grid-cols-1 pt-12 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
        {filteredVideos.map((video) => (
          <WorkCard
            key={video._id}
            type="video"
            thumbnail={video.thumbnail}
            title={video.title}
            workType={video.category}
            extraText={video.industry}
            url={video.url}
          />
        ))}
      </div>
    </div>
  );
}
