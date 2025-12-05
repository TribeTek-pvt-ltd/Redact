"use client";

import { useRef } from "react";
import ServiceCard from "@/components/ServiceCard";
import { HiOutlineFilm, HiOutlineColorSwatch } from "react-icons/hi";
import { RiVideoLine, RiSoundModuleLine } from "react-icons/ri";

const cardData = [
  { title: "Shortform Editing", Icon: RiVideoLine }, // trendy video icon
  { title: "Commercials", Icon: HiOutlineFilm }, // sleek film icon
  { title: "Sound Designing", Icon: RiSoundModuleLine }, // modern sound/music icon
  { title: "Color Grading", Icon: HiOutlineColorSwatch }, // trendy color/design icon
];

const ServiceSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="container mx-auto my-4 sm:my-12 md:my-6 ">
      <h2 className="text-white font-bold text-4xl text-left sm:mb-6 mx-4">
        We Specialize in
      </h2>

      {/* Horizontal scroll wrapper */}
      <div
        ref={scrollRef}
        className="
          flex px-4 py-6 mt-6 gap-4 scroll-smooth
          sm:justify-around 
          sm:overflow-visible
          overflow-x-auto
          scrollbar-hide
        ">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="
              w-60 sm:w-72  
              flex-shrink-0
            ">
            <ServiceCard title={card.title} Icon={card.Icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
