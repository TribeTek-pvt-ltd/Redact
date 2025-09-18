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
  <div className="relative shadow-lg overflow-hidden container max-w-sm hover:shadow-2xl transition-shadow duration-300">
    {/* Background Blur Overlay */}
    <div className="absolute inset-0 bg-white/10 backdrop-blur-md border border-white/20 z-0"></div>

    {/* Image in 1.91:1 ratio */}
    <div className="relative w-full z-10" style={{ paddingTop: `${100 / 1.91}%` }}>
      <Image
        src={thumbnail}
        alt={title}
        fill
        className="absolute top-0 left-0 w-full h-full object-cover "
        priority
      />
    </div>

    {/* Text Section */}
    <div className="p-4 relative z-10">
      <p className="text-blue-400 text-2xl font-bold drop-shadow-lg">{title}</p>
      <p>
        {workType && (
          <span className="text-gray-100 font-medium">{workType}</span>
        )}{" "}
        {extraText && <span className="text-gray-300">| {extraText}</span>}
      </p>
    </div>
  </div>
);

}
