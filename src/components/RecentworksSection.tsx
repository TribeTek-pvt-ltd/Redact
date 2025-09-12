"use client";

import Link from "next/link";
import WorkCard from "./WorkCard";

const RecentWorksSection = () => {
  const works = [
    {
      thumbnail: "https://picsum.photos/seed/work1/800/420",
      title: "Modern Website",
      workType: "Web Development",
      extraText: "React + Next.js",
    },
    {
      thumbnail: "https://picsum.photos/seed/work2/800/420",
      title: "Mobile App",
      workType: "App Development",
      extraText: "React Native",
    },
    {
      thumbnail: "https://picsum.photos/seed/work3/800/420",
      title: "Brand Identity",
      workType: "UI/UX Design",
      extraText: "Figma + Tailwind",
    },
  ];

  return (
    <section className="container mx-auto py-12">
      {/* Header with title + See More */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-4xl font-bold mx-4">Recent Works</h2>
        <Link
          href="/works"
          className="text-blue-600 font-medium hover:underline mx-2">
          See More →
        </Link>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-3">
        {works.map((work, idx) => (
          <WorkCard
            key={idx}
            thumbnail={work.thumbnail}
            title={work.title}
            workType={work.workType}
            extraText={work.extraText}
          />
        ))}
      </div>
    </section>
  );
};

export default RecentWorksSection;
