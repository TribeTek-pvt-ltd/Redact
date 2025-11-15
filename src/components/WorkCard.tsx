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
        className="cursor-pointer w-full max-w-xs sm:max-w-sm md:max-w-md h-56 sm:h-60 md:h-64 mx-auto rounded-xl overflow-hidden shadow-lg bg-white/10 backdrop-blur-md border border-white/20 transition hover:scale-[1.02]">
        <div className="relative w-full h-3/4 rounded-xl overflow-hidden">
          {type === "video" ? (
            <Image
              src={thumbnail}
              alt={title}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <Image
              src={thumbnail}
              alt={title}
              fill
              className="object-cover"
              priority
            />
          )}
        </div>

        <div className="p-3 text-white">
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
              className="absolute top-3 right-3 text-white text-xl hover:text-gray-300">
              <FaTimes />
            </button>

            {/* YouTube Embedded Player */}
            <iframe
              className="w-full h-[250px] sm:h-[350px] md:h-[450px]"
              src={`https://www.youtube.com/embed/${extractYouTubeID(
                url || ""
              )}`}
              allow="autoplay; encrypted-media"
              allowFullScreen></iframe>
          </div>
        </div>
      )}
    </>
  );
}
