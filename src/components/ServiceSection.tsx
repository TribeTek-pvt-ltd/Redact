"use client";

import ServiceCard from "@/components/ServiceCard";
// import { FaVideo } from "react-icons/fa";
// import { SiAdobe } from "react-icons/si";

import { FaVideo, FaMusic, FaFilm, FaPalette } from "react-icons/fa";

const cardData = [
  { title: "Shortform Editing", Icon: FaVideo },
  { title: "Commercials", Icon: FaFilm },
  { title: "Sound Designing", Icon: FaMusic },
  { title: "Color Grading", Icon: FaPalette },
];

const ServiceSection: React.FC = () => {
  return (
    <div className="container mx-auto py-6">
      <h2 className="text-white font-bold text-4xl text-left mb-6">
        We Specialize in
      </h2>

      {/* Horizontal scroll wrapper */}
      <div className="flex gap-12 px-4 py-6 sm:ml-72 overflow-x-auto hide-scrollbar">
        {cardData.map((card, index) => (
          <ServiceCard key={index} title={card.title} Icon={card.Icon} />
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
