"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
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
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();
  // Fetch videos
  useEffect(() => {
    fetch("/api/videos")
      .then((res) => res.json())
      .then((data) => setVideos(data))
      .catch((err) => console.error(err));
  }, []);

  // 🔒 Check if logged-in user is admin
  useEffect(() => {
    async function checkAdmin() {
      try {
        const res = localStorage.getItem("isAdmin");

        if (res !== "true") {
          router.push("/login");
          return;
        } else {
          setIsAdmin(true);
        }
        // const data = await res.json();

        // if (!data?.user || data.user.role !== "admin") {
        //   router.push("/unauthorized"); // redirect if not admin
        // } else {
        // }
      } catch (err) {
        router.push("/login");
      } finally {
        setLoading(false);
      }
    }

    checkAdmin();
  }, [router]);

  // Loading screen
  if (loading) {
    return (
      <div className="p-10 text-xl font-semibold text-gray-600">
        Checking admin access…
      </div>
    );
  }

  // If not admin (extra safety)
  if (!isAdmin) return null;

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

    const updated = [...videos];
    updated.splice(index, 1);
    setVideos(updated);
  };

  const handleUpdateVideo = (index: number, updatedVideo: Video) => {
    const updated = [...videos];
    updated[index] = updatedVideo;
    setVideos(updated);
  };

  return (
    <div className="flex p-6 gap-6 overflow-x-hidden">
      {/* Left side: Form + Summary + Video list */}
      <div className="flex-1 flex flex-col gap-6">
        {/* Form + Summary row */}
        <div className="flex gap-6">
          <div className="flex-1">
            <VideoForm onAddVideo={handleAddVideo} />
          </div>
          <div className="w-1/3">
            <VideoSummary videos={videos} />
          </div>
        </div>

        {/* Video listing */}
        <div className="grid container mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-3 p-2">
          {videos.map((video, idx) => (
            <VideoCard
              key={video._id || idx}
              video={video}
              onDelete={() => handleDeleteVideo(idx)}
              onUpdate={(updated) => handleUpdateVideo(idx, updated)}
            />
          ))}
        </div>
      </div>

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
