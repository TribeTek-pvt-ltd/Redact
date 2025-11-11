// "use client";

// import { useRef, useEffect } from "react";
// import ServiceCard from "@/components/ServiceCard";
// import { FaVideo, FaMusic, FaFilm, FaPalette } from "react-icons/fa";

// const cardData = [
//   { title: "Shortform Editing", Icon: FaVideo },
//   { title: "Commercials", Icon: FaFilm },
//   { title: "Sound Designing", Icon: FaMusic },
//   { title: "Color Grading", Icon: FaPalette },
// ];

// const ServiceSection: React.FC = () => {
//   const scrollRef = useRef<HTMLDivElement>(null);

//   // convert vertical scroll to horizontal scroll
//   // useEffect(() => {
//   //   const el = scrollRef.current;
//   //   if (!el) return;

//   //   const onWheel = (e: WheelEvent) => {
//   //     if (e.deltaY === 0) return;
//   //     e.preventDefault();
//   //     el.scrollTo({
//   //       left: el.scrollLeft + e.deltaY,
//   //       behavior: "smooth",
//   //     });
//   //   };

//   //   el.addEventListener("wheel", onWheel, { passive: false });
//   //   return () => el.removeEventListener("wheel", onWheel);
//   // }, []);

//   return (
//     <div className="container mx-auto py-6 ">
//       <h2 className="text-white font-bold text-4xl text-left mb-6">
//         We Specialize in
//       </h2>

//       {/* Horizontal scroll wrapper */}
//       <div
//         ref={scrollRef}
//         className="flex sm:justify-around px-4 py-6  scroll-smooth">
//         {cardData.map((card, index) => (
//           <ServiceCard key={index} title={card.title} Icon={card.Icon} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ServiceSection;

"use client";

import { useRef } from "react";
import ServiceCard from "@/components/ServiceCard";
import { FaVideo, FaMusic, FaFilm, FaPalette } from "react-icons/fa";

const cardData = [
  { title: "Shortform Editing", Icon: FaVideo },
  { title: "Commercials", Icon: FaFilm },
  { title: "Sound Designing", Icon: FaMusic },
  { title: "Color Grading", Icon: FaPalette },
];

const ServiceSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="container mx-auto py-6">
      <h2 className="text-white font-bold text-4xl text-left mb-6 mx-4">
        We Specialize in
      </h2>

      {/* Horizontal scroll wrapper */}
      <div
        ref={scrollRef}
        className="
          flex px-4 py-6 gap-4 scroll-smooth
          sm:justify-around 
          sm:overflow-visible
          overflow-x-auto
          scrollbar-hide
        ">
        {cardData.map((card, index) => (
          <ServiceCard key={index} title={card.title} Icon={card.Icon} />
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
