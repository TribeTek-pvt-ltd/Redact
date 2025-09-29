"use client";

interface Video {
  _id?: string;
  title: string;
  thumbnail: string;
  url: string;
  category: string;
  industry: string;
}

interface VideoSummaryProps {
  videos: Video[];
}

export default function VideoSummary({ videos }: VideoSummaryProps) {
  const categoryCounts = videos.reduce<Record<string, number>>((acc, video) => {
    acc[video.category] = (acc[video.category] || 0) + 1;
    return acc;
  }, {});

  const categories = Object.entries(categoryCounts);

  return (
    <div className="relative m-4 sm:m-6 md:m-12 md:mt-45 w-full sm:w-72 md:w-80 p-4 sm:p-6 rounded-3xl bg-black/30 backdrop-blur-xl border border-white/20 shadow-xl flex flex-col gap-2 max-h-[400px]">
      {/* Glow blobs */}
      <div className="absolute -top-6 -left-6 w-20 h-20 sm:w-28 sm:h-28 bg-blue-500/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-6 -right-6 w-20 h-20 sm:w-28 sm:h-28 bg-blue-400/30 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header */}
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-900 drop-shadow-lg text-center">
        Video Summary
      </h2>

      {/* Total videos */}
      <div className="flex justify-center items-center mb-2 sm:mb-4">
        <span className="px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-black/30 to-black/50 text-white font-bold rounded-3xl border border-white/20 backdrop-blur-sm flex flex-col items-center">
          <p className="text-xs sm:text-sm">Total Videos:</p>
          <p className="text-2xl sm:text-3xl font-extrabold">{videos.length}</p>
        </span>
      </div>

      {/* Category cards */}
      <div className="flex flex-col gap-1 sm:gap-2">
        {categories.map(([cat, count]) => (
          <div
            key={cat}
            className="flex justify-between items-center px-2 sm:px-3 py-1 sm:py-2 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-200 shadow-md backdrop-blur-md"
          >
            <span className="text-white font-semibold text-xs sm:text-sm">{cat}</span>
            <span className="text-blue-400 font-bold text-sm sm:text-base">{count}</span>
          </div>
        ))}
      </div>

      {/* Optional subtle shimmer */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer rounded-3xl"
          style={{ animation: "shimmer 1.5s linear infinite" }}
        ></div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 1.5s linear infinite;
        }
      `}</style>
    </div>
  );
}
