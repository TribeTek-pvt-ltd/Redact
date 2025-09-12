"use client";

import IndustryCard from "./IndustryCard";

const IndustriesSection = () => {
  const industriesList = [
    { name: "Technology", img: "https://picsum.photos/seed/tech/800/400" },
    { name: "Healthcare", img: "https://picsum.photos/seed/health/800/400" },
    { name: "Education", img: "https://picsum.photos/seed/edu/800/400" },
    { name: "Finance", img: "https://picsum.photos/seed/finance/800/400" },
    { name: "Retail", img: "https://picsum.photos/seed/retail/800/400" },
    {
      name: "Construction",
      img: "https://picsum.photos/seed/construction/800/400",
    },
  ];

  return (
    <section className="container mx-auto py-12">
      <h2 className="text-4xl font-bold mb-6 mx-3">Industries</h2>

      <div className="flex flex-col gap-6 mx-1">
        {industriesList.map((industry, idx) => (
          <IndustryCard
            key={idx}
            industry={industry.name}
            bgImage={industry.img}
          />
        ))}
      </div>
    </section>
  );
};

export default IndustriesSection;
