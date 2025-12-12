"use client";

import IndustryCard from "./IndustryCard";
import { useRouter } from "next/navigation";

const IndustriesSection = () => {
  const router = useRouter();

  const industriesList = [
    { name: "Event & lifestyle", img: "/industries/events.png" },
    { name: "Commercials", img: "/industries/commercials.png" },
    { name: "Automobile", img: "/industries/automobile.png" },
    { name: "Shortform videos", img: "/industries/shortform.png" },
    { name: "Beauty & Healthcare", img: "/industries/beautyandhealthcare.png" },
  ];

  const handleClick = (industryName: string) => {
    // Navigate to works gallery with query param
    router.push(`/works?industry=${encodeURIComponent(industryName)}`);
  };

  return (
    <section className="container mx-auto py-12">
      <h2 className="text-4xl font-bold mb-6 mx-3">Industries We Worked</h2>

      <div className="flex flex-col gap-6 mx-1">
        {industriesList.map((industry, idx) => (
          <IndustryCard
            key={idx}
            industry={industry.name}
            bgImage={industry.img}
            onClick={() => handleClick(industry.name)} // pass click handler
          />
        ))}
      </div>
    </section>
  );
};

export default IndustriesSection;
