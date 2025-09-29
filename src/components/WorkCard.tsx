"use client";

import Image from "next/image";

interface WorkCardProps {
  type: "image" | "video";
  thumbnail: string;
  title: string;
  workType: string;
  extraText?: string;
  url?: string;
}

export default function WorkCard({
  type,
  thumbnail,
  title,
  workType,
  extraText,
  url,
}: WorkCardProps) {
  return (
    <div className="card perspective-1000 w-full max-w-xs sm:max-w-sm md:max-w-md h-56 sm:h-60 md:h-64 mx-auto">
      <div className="card-inner relative w-full h-full transform-style-preserve-3d transition-transform duration-[1000ms] hover:rotate-y-180">
        {/* Front Side */}
        <div className="card-front absolute w-full h-full backface-hidden rounded-xl flex flex-col justify-between p-3 backdrop-blur-md bg-white/10 border border-white/20 shadow-lg">
          <div className="relative w-full h-3/4 rounded-xl overflow-hidden">
            {type === "video" ? (
              <video
                src={url}
                poster={thumbnail}
                controls
                className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
              />
            ) : (
              <Image
                src={thumbnail}
                alt={title}
                fill
                className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
                priority
              />
            )}
          </div>
          <div className="mt-2 text-white">
            <p className="text-base sm:text-lg md:text-xl font-bold">{title}</p>
            <p className="text-xs sm:text-sm md:text-base">
              {workType && <span className="font-medium">{workType}</span>}{" "}
              {extraText && <span>| {extraText}</span>}
            </p>
          </div>
        </div>

        {/* Back Side */}
        <div className="card-back absolute w-full h-full backface-hidden rounded-xl flex flex-col justify-center items-center p-4 backdrop-blur-md bg-white/10 border border-white/20 shadow-lg rotate-y-180">
          <p className="text-white text-base sm:text-lg md:text-xl font-bold text-center">{title}</p>
          <p className="text-white text-xs sm:text-sm md:text-base text-center mt-1">
            {workType && <span>{workType}</span>}{" "}
            {extraText && <span>| {extraText}</span>}
          </p>
          {url && (
            <p className="text-white text-[10px] sm:text-xs md:text-sm text-center break-words mt-2">{url}</p>
          )}
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}
