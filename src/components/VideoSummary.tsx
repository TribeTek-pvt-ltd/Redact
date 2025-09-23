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

  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-80">
      <h2 className="text-xl font-semibold mb-4 text-[#020202]">
        Video Summary
      </h2>
      <p className="mb-2">
        <strong>Total Videos:</strong> {videos.length}
      </p>
      {Object.entries(categoryCounts).map(([cat, count]) => (
        <p key={cat} className="text-sm text-gray-600">
          {cat}: {count}
        </p>
      ))}
    </div>
  );
}
