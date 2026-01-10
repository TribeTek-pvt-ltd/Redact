"use client";

import { useState } from "react";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";

interface WorkCardProps {
  type: "image" | "video";
  thumbnail: string;
  title: string;
  workType: string;
  extraText?: string;
  url?: string; // YouTube link
}

export default function WorkCard({
  type,
  thumbnail,
  title,
  workType,
  extraText,
  url,
}: WorkCardProps) {
  const [open, setOpen] = useState(false);

  // Convert YouTube URL to embeddable URL
  const extractYouTubeID = (url: string) => {
    try {
      const regex =
        /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([^&?/]+)/;
      const match = url.match(regex);
      return match ? match[1] : "";
    } catch {
      return "";
    }
  };

  return (
    <>
      {/* Card */}
      <div
        onClick={() => url && setOpen(true)}
        className="
          relative cursor-pointer w-full max-w-xs sm:max-w-sm md:max-w-md h-56 sm:h-60 md:h-64 
          mx-auto rounded-xl overflow-hidden transition hover:scale-[1.03]
          bg-white/5 backdrop-blur-2xl border border-white/1015
          shadow-[0_18px_40px_-16px_rgba(0,0,0,0.55)]
        "
      >
        {/* Glass Effect Layers */}
        {/* Top-left highlight */}
        <div className="pointer-events-none absolute inset-0 rounded-xl shadow-[inset_1px_1px_0_0_rgba(255,255,255,0.45)]" />

        {/* Bottom-right inner shadow */}
        <div className="pointer-events-none absolute inset-0 rounded-xl shadow-[inset_-6px_-8px_20px_rgba(0,0,0,0.35)]" />

        {/* Light texture */}
        <div className="pointer-events-none absolute inset-0 rounded-xl 
            bg-[radial-gradient(120%90%_at_30%-20%,rgba(255,255,255,0.06),transparent_60%)] 
        " />

        {/* Soft glow blobs */}
        <div className="absolute -top-10 -left-10 w-36 h-36 bg-blue-500/40 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-blue-300/30 rounded-full blur-3xl pointer-events-none"></div>

        {/* Thumbnail */}
        <div className="relative w-full h-3/4 rounded-xl overflow-hidden z-10">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Bottom Text */}
        <div className="p-3 text-white relative z-10">
          <p className="text-base sm:text-lg font-bold">{title}</p>
          <p className="text-xs sm:text-sm">
            {workType} {extraText && ` | ${extraText}`}
          </p>
        </div>
      </div>

      {/* Popup Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="relative w-[90%] max-w-2xl bg-black rounded-xl overflow-hidden shadow-xl">
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-white text-xl hover:text-gray-300"
            >
              <FaTimes />
            </button>

            {/* YouTube Embedded Player */}
            <iframe
              className="w-full h-[250px] sm:h-[350px] md:h-[450px]"
              src={`https://www.youtube.com/embed/${extractYouTubeID(
                url || ""
              )}`}
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
