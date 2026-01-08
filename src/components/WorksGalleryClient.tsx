"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import WorkCard from "./WorkCard";

interface Video {
  _id?: string;
  title: string;
  thumbnail: string;
  url: string;
  category: string;
  industry: string;
}

export default function WorksGalleryClient() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [filterType, setFilterType] = useState<"All" | "industry" | "category">(
    "All"
  );
  const [filterValue, setFilterValue] = useState<string>("All");

  const searchParams = useSearchParams();
  const industryQuery = searchParams.get("industry");
  const categoryQuery = searchParams.get("category");

  // 👉 Fetch videos
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch("/api/videos");
        const data: Video[] = await res.json();
        setVideos(data);
      } catch (err) {
        console.error("Error fetching videos:", err);
      }
    };

    fetchVideos();
  }, []);

  // 👉 Apply query filter
  useEffect(() => {
    if (industryQuery) {
      setFilterType("industry");
      setFilterValue(industryQuery);
    } else if (categoryQuery) {
      setFilterType("category");
      setFilterValue(categoryQuery);
    } else {
      setFilterType("All");
      setFilterValue("All");
    }
  }, [industryQuery, categoryQuery]);

  // Unique lists
  const industries = Array.from(new Set(videos.map((v) => v.industry)));

  // If category mode → show only categories under that industry
  const categories =
    filterType === "category"
      ? Array.from(
        new Set(
          videos
            .filter(
              (v) =>
                v.industry ===
                videos.find((x) => x.category === filterValue)?.industry
            )
            .map((v) => v.category)
        )
      )
      : [];

  // 👉 Filtering logic
  const filteredVideos =
    filterType === "All"
      ? videos
      : filterType === "industry"
        ? videos.filter((v) => v.industry === filterValue)
        : videos.filter((v) => v.category === filterValue);

  return (
    <div className="space-y-4 container mx-auto p-4">
      <div className="flex justify-center mt-2 space-x-2 flex-wrap">
        {/* ALWAYS SHOW ALL BUTTON */}
        <button
          className={`px-4 py-2 border border-white/30 backdrop-blur-md transition-colors duration-300 ${filterValue === "All"
            ? "bg-white/30 text-black"
            : "text-white hover:bg-white/20"
            }`}
          onClick={() => {
            setFilterType("All");
            setFilterValue("All");
          }}>
          All
        </button>

        {/* ALWAYS SHOW INDUSTRIES LIST */}
        {industries.map((ind) => (
          <button
            key={ind}
            className={`px-4 py-2 border border-white/30 backdrop-blur-md transition-colors duration-300 ${filterType === "industry" && filterValue === ind
              ? "bg-white/30 text-black"
              : "text-white hover:bg-white/20"
              }`}
            onClick={() => {
              setFilterType("industry");
              setFilterValue(ind);
            }}>
            {ind}
          </button>
        ))}

        {/* CATEGORY BUTTONS ONLY IN CATEGORY MODE */}
        {filterType === "category" &&
          categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 border border-white/30 backdrop-blur-md transition-colors duration-300 ${filterValue === cat
                ? "bg-white/30 text-black"
                : "text-white hover:bg-white/20"
                }`}
              onClick={() => {
                setFilterType("category");
                setFilterValue(cat);
              }}>
              {cat}
            </button>
          ))}
      </div>

      {/* GALLERY */}
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
