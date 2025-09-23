"use client";

import { useState, DragEvent } from "react";

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

  const handleAdd = () => {
    if (!title || !thumbnail || !url) {
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
    <div className="bg-white p-4 rounded-xl shadow-md flex max-w-4xl mb-6">
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className={`w-1/3 border-2 border-dashed border-gray-300 rounded mr-4 flex items-center justify-center cursor-pointer ${
          thumbnail ? "border-[#0072ff]" : ""
        }`}>
        {thumbnail ? (
          <img
            src={thumbnail}
            alt="Thumbnail"
            className="h-40 w-full object-cover rounded"
          />
        ) : (
          <p className="text-gray-500 text-center">
            Drag & drop thumbnail here
          </p>
        )}
      </div>

      <div className="flex-1 flex flex-col justify-between gap-3">
        <input
          type="text"
          placeholder="Video Title"
          value={title}
          onChange={(e) => setTitle(e.target?.value)}
          className="w-full border p-2 rounded focus:ring-2 focus:ring-[#0072ff]"
        />
        <input
          type="text"
          placeholder="Video URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full border p-2 rounded focus:ring-2 focus:ring-[#0072ff]"
        />
        <select
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
          className="w-full border p-2 rounded focus:ring-2 focus:ring-[#0072ff]">
          {industries.map((ind) => (
            <option key={ind} value={ind}>
              {ind}
            </option>
          ))}
        </select>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border p-2 rounded focus:ring-2 focus:ring-[#0072ff]">
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <button
          onClick={handleAdd}
          className="bg-[#0072ff] text-white px-4 py-2 rounded hover:bg-[#005fcc] w-full">
          Add Video
        </button>
      </div>
    </div>
  );
}
