"use client";

import { useState } from "react";
import { FaPen, FaTrash } from "react-icons/fa";

interface Video {
  _id?: string;
  title: string;
  thumbnail: string;
  url: string;
  category: string;
  industry: string;
}

interface VideoCardProps {
  video: Video;
  onDelete: () => void;
  onUpdate: (updatedVideo: Video) => void;
}

const industries = ["Tech", "Construction", "Education", "Health"];
const categories = ["Tutorial", "Promo", "Interview", "Other"];

export default function VideoCard({
  video,
  onDelete,
  onUpdate,
}: VideoCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(video.title);
  const [url, setUrl] = useState(video.url);
  const [category, setCategory] = useState(video.category);
  const [industry, setIndustry] = useState(video.industry);

  const handleSave = async () => {
    if (!title || !url) return alert("Fill all fields");
    const updatedVideo = { ...video, title, url, category, industry };

    if (video._id) {
      await fetch("/api/videos", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedVideo),
      });
    }

    onUpdate(updatedVideo);
    setIsEditing(false);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="relative flex flex-col md:flex-row w-full max-w-3xl min-h-[300px] rounded-3xl overflow-hidden shadow-lg bg-black/30 backdrop-blur-xl border border-white/20 group hover:scale-[1.01] transition-transform duration-200">
        {/* Glow blobs */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-500/40 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-400/30 rounded-full blur-3xl pointer-events-none"></div>

        {/* Thumbnail */}
        <img
          src={video.thumbnail}
          alt="Thumbnail"
          className="w-full md:w-1/3 object-cover rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none"
        />

        {/* Content */}
        <div className="flex-1 p-3 flex flex-col justify-between gap-3 z-10">
          {isEditing ? (
            <>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 rounded-lg bg-black/20 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              />
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full p-2 rounded-lg bg-black/20 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              />
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full p-2 rounded-lg bg-black/20 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              >
                {industries.map((ind) => (
                  <option
                    key={ind}
                    value={ind}
                    className="bg-black/80 text-white"
                  >
                    {ind}
                  </option>
                ))}
              </select>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-2 rounded-lg bg-black/20 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              >
                {categories.map((cat) => (
                  <option
                    key={cat}
                    value={cat}
                    className="bg-black/80 text-white"
                  >
                    {cat}
                  </option>
                ))}
              </select>
              <div className="flex justify-end gap-2 mt-4">
                <button
                  onClick={handleSave}
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition"
                >
                  <FaPen /> Save
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition"
                >
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <>
              <h3 className="text-white text-center font-semibold text-2xl">
                {video.title}
              </h3>
              <p className="text-white/70 text-sm">URL: {video.url}</p>
              <p className="text-white/70 text-sm">Industry: {video.industry}</p>
              <p className="text-white/70 text-sm">Category: {video.category}</p>
              <div className="flex justify-end gap-2 mt-4">
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition"
                >
                  <FaPen />
                </button>
                <button
                  onClick={onDelete}
                  className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition"
                >
                  <FaTrash />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
