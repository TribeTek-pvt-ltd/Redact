"use client";

import { useState, useEffect } from "react";
import VideoForm from "@/components/VideoForm";
import VideoCard from "@/components/VideoCard";
import VideoSummary from "@/components/VideoSummary";
import { FaGoogle, FaSignOutAlt } from "react-icons/fa";

interface Video {
  _id?: string;
  title: string;
  thumbnail: string;
  url: string;
  category: string;
  industry: string;
}

export default function AdminPage() {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    fetch("/api/videos")
      .then((res) => res.json())
      .then((data) => setVideos(data))
      .catch((err) => console.error(err));
  }, []);

  const handleAddVideo = async (video: Video) => {
    try {
      const res = await fetch("/api/videos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(video),
      });
      const result = await res.json();
      setVideos([...videos, { ...video, _id: result.insertedId }]);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteVideo = async (index: number) => {
    const video = videos[index];
    if (!video._id) return;
    await fetch(`/api/videos?id=${video._id}`, { method: "DELETE" });
    const newVideos = [...videos];
    newVideos.splice(index, 1);
    setVideos(newVideos);
  };

  const handleUpdateVideo = (index: number, updatedVideo: Video) => {
    const newVideos = [...videos];
    newVideos[index] = updatedVideo;
    setVideos(newVideos);
  };

  return (
    <div className="flex p-6 gap-6">
      <div className="flex-1 flex flex-col gap-4">
        <VideoForm onAddVideo={handleAddVideo} />
        {videos.map((video, idx) => (
          <VideoCard
            key={video._id || idx}
            video={video}
            onDelete={() => handleDeleteVideo(idx)}
            onUpdate={(updated) => handleUpdateVideo(idx, updated)}
          />
        ))}
      </div>
      <VideoSummary videos={videos} />

      {/* Floating buttons */}
      <div className="fixed bottom-4 right-4 flex flex-col gap-4">
        <button className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700">
          <FaGoogle size={20} />
        </button>
        <button className="bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700">
          <FaSignOutAlt size={20} />
        </button>
      </div>
    </div>
  );
}
