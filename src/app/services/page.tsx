"use client";

import SecondaryHero from "@/components/secondaryHero";
import ServiceCard from "@/components/ServiceCard";
import { FaVideo, FaPaintBrush, FaFilm, FaCamera } from "react-icons/fa"; // Import icons

export default function Services() {
  const services = [
    { title: "Video Editing", Icon: FaVideo },
    { title: "Graphic Design", Icon: FaPaintBrush },
    { title: "Animation", Icon: FaFilm },
    { title: "Photography", Icon: FaCamera },
  ];

  return (
    <div>
      <SecondaryHero
        heading={"Our Services"} // Updated heading
        body="We offer a wide range of creative services designed to bring your vision to life. Explore our expertise and see how we can help you succeed." // Updated body
      />

      <div className="flex gap-12 px-4 py-6 sm:ml-72 overflow-x-auto hide-scrollbar">
        <div className="flex flex-col gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              Icon={service.Icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
