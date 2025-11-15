"use client";

import IndustryCard from "./IndustryCard";

const IndustriesSection = () => {
  const industriesList = [
    { name: "Event & lifestyle ", img: "/2.png" },
    { name: "Commercials ", img: "/3.png" },
    { name: "Automobile", img: "/4.png" },
    {
      name: "Shortform videos",
      img: "https://picsum.photos/seed/finance/600/400",
    },
    {
      name: "Beauty & Healthcare",
      img: "https://picsum.photos/seed/finance/600/400",
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
