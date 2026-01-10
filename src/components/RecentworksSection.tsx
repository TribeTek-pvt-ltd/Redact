"use client";

import Link from "next/link";
import WorkCard from "./WorkCard";
import { useEffect, useState } from "react";

interface Video {
  _id?: string;
  title: string;
  thumbnail: string;
  url: string;
  category: string;
  industry: string;
}

const RecentWorksSection = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch("/api/videos"); // ✅ adjust API path
        const data: Video[] = await res.json();
        setVideos(data);
      } catch (err) {
        console.error("Error fetching videos", err);
      }
    };

    fetchVideos();
  }, []);

  // ✅ take only last 3 videos (latest)
  const latestVideos = videos.slice(-3).reverse();

  return (
    <section className="container mx-auto py-12">
      {/* Header with title + See More */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-4xl font-bold mx-4">Recent Works</h2>
        <Link
          href="/works"
          className="text-blue-600 font-medium hover:underline mx-2"
        >
          See More →
        </Link>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-3">
        {latestVideos.map((video) => (
          <WorkCard
            key={video._id}
            type="video"
            thumbnail={video.thumbnail}
            title={video.title}
            workType={video.industry}
            extraText={video.category}
            url={video.url}
          />
        ))}
      </div>
    </section>
  );
};

export default RecentWorksSection;
