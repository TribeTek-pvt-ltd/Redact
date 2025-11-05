"use client";

import { useState, DragEvent, useEffect } from "react";

interface VideoFormProps {
  onAddVideo: (video: {
    title: string;
    thumbnail: string;
    url: string;
    category: string;
    industry: string;
  }) => void;
}

const industries = ["Tech", "Construction", "Education", "Health"];
const categories = ["Tutorial", "Promo", "Interview", "Other"];

export default function VideoForm({ onAddVideo }: VideoFormProps) {
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [url, setUrl] = useState("");
  const [industry, setIndustry] = useState(industries[0]);
  const [category, setCategory] = useState(categories[0]);

  const extractVideoId = (ytUrl: string): string | null => {
    try {
      const urlObj = new URL(ytUrl);
      if (urlObj.hostname.includes("youtube.com")) {
        return urlObj.searchParams.get("v");
      }
      if (urlObj.hostname === "youtu.be") {
        return urlObj.pathname.substring(1);
      }
    } catch {
      return null;
    }
    return null;
  };

  useEffect(() => {
    const videoId = extractVideoId(url);
    if (videoId) {
      setThumbnail(`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`);
    }
  }, [url]);

  const handleAdd = () => {
    if (!title || !url) {
      alert("Please fill all fields");
      return;
    }

    onAddVideo({ title, thumbnail, url, industry, category });
    setTitle("");
    setThumbnail("");
    setUrl("");
    setIndustry(industries[0]);
    setCategory(categories[0]);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => setThumbnail(reader.result as string);
      reader.readAsDataURL(file);
    } else {
      alert("Please drop a valid image file");
    }
  };

  return (
    <div className="relative flex flex-col md:flex-row w-full max-w-[850px] mx-auto p-6 md:p-10 mb-24 md:mt-45 gap-6 md:gap-10 rounded-3xl bg-black/30 backdrop-blur-xl border border-white/20 shadow-2xl">
      {/* Glow blobs */}
      <div className="absolute -top-10 -left-10 w-32 h-32 md:w-40 md:h-40 bg-blue-500/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-10 -right-10 w-32 h-32 md:w-40 md:h-40 bg-blue-400/30 rounded-full blur-3xl pointer-events-none"></div>

      {/* Thumbnail drop area */}
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className={`relative w-full md:w-1/3 border-2 border-dashed rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 ${
          thumbnail ? "border-blue-500/50" : "border-white/20"
        } h-40 md:h-48`}
      >
        {thumbnail ? (
          <img
            src={thumbnail}
            alt="Thumbnail"
            className="h-full w-full object-cover rounded-lg"
          />
        ) : (
          <p className="text-white/60 text-center px-2 text-sm md:text-base">
            Drag & drop thumbnail here
          </p>
        )}
      </div>

      {/* Input fields */}
      <div className="flex-1 flex flex-col gap-3">
        <input
          type="text"
          placeholder="Video Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 md:p-3 rounded-lg bg-black/20 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-sm md:text-base"
        />
        <input
          type="text"
          placeholder="YouTube Video URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full p-2 md:p-3 rounded-lg bg-black/20 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-sm md:text-base"
        />
        <select
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
          className="w-full p-2 md:p-3 rounded-lg bg-black/20 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-sm md:text-base"
        >
          {industries.map((ind) => (
            <option key={ind} value={ind} className="bg-black/80 text-white">
              {ind}
            </option>
          ))}
        </select>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 md:p-3 rounded-lg bg-black/20 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-sm md:text-base"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat} className="bg-black/80 text-white">
              {cat}
            </option>
          ))}
        </select>

        <button
          onClick={handleAdd}
          className="mt-2 w-full py-2 md:py-3 rounded-lg bg-blue-600/80 backdrop-blur-md text-white font-semibold hover:bg-blue-500/90 transition text-sm md:text-base"
        >
          Add Video
        </button>
      </div>
    </div>
  );
}
