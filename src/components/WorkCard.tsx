"use client";

import Image from "next/image";
interface WorkCardProps {
  thumbnail: string;
  title: string;
  workType: string;
  extraText?: string;
}

export default function WorkCard({
  thumbnail,
  title,
  workType,
  extraText,
}: WorkCardProps) {
  return (
    <div className="bg-black rounded-xl shadow-lg overflow-hidden container max-w-sm hover:shadow-2xl transition-shadow duration-300">
      {/* Image in 1.91:1 ratio */}
      <div className="relative w-full" style={{ paddingTop: `${100 / 1.91}%` }}>
        <Image
          src={thumbnail}
          alt={title}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
      {/* Text Section */}
      <div className="p-4">
        <p className="text-blue-600 text-2xl">{title} </p>
        <p>
          {workType && (
            <span className="text-gray-100 font-medium">{workType}</span>
          )}{" "}
          {extraText && <span className="text-gray-500">| {extraText}</span>}
        </p>
      </div>
    </div>
  );
}
