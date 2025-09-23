"use client";

import { useState } from "react";

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
    <div className="flex bg-white rounded-xl shadow-md overflow-hidden max-w-4xl">
      <img
        src={video.thumbnail}
        alt="Thumbnail"
        className="w-1/3 object-cover"
      />
      <div className="flex-1 p-4 flex flex-col justify-between gap-2">
        {isEditing ? (
          <>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border p-1 rounded"
            />
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="border p-1 rounded"
            />
            <select
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="border p-1 rounded">
              {industries.map((ind) => (
                <option key={ind} value={ind}>
                  {ind}
                </option>
              ))}
            </select>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border p-1 rounded">
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <div className="flex gap-2 mt-2">
              <button
                onClick={handleSave}
                className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500">
                Cancel
              </button>
            </div>
          </>
        ) : (
          <>
            <h3 className="font-semibold text-lg">{video.title}</h3>
            <p className="text-sm text-gray-600">URL: {video.url}</p>
            <p className="text-sm text-gray-600">Industry: {video.industry}</p>
            <p className="text-sm text-gray-600">Category: {video.category}</p>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => setIsEditing(true)}
                className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                Edit
              </button>
              <button
                onClick={onDelete}
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">
                Delete
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
