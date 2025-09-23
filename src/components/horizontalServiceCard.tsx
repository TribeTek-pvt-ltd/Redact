"use client";

import { IconType } from "react-icons";

interface HorizontalServiceCardProps {
  title: string;
  Icon: IconType;
  description?: string;
}

const HorizontalServiceCard: React.FC<HorizontalServiceCardProps> = ({
  title,
  Icon,
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
}) => {
  return (
    <div className="container mx-auto flex flex-col p-2 sm:p-4">
      <h3 className="py-4 text-white text-3xl font-semibold mt-1 text-left">
        {title}
      </h3>

      {/* Glass Card */}
      <div className="relative w-full flex flex-col sm:flex-row items-center gap-6 rounded-3xl overflow-hidden cursor-pointer bg-[radial-gradient(circle_280px_at_0%_0%,#444444,#0c0d0d)] border border-[#202222] p-6 shadow-lg">
        {/* Floating dot */}
        {/* <div className="dot absolute w-2.5 aspect-square bg-white rounded-full shadow-[0_0_10px_#fff] z-20 animate-moveDot" /> */}

        {/* Ray highlight */}
        <div className="ray absolute w-[220px] h-[45px] rounded-full bg-[#c7c7c7] opacity-40 shadow-[0_0_50px_#fff] blur-[10px] top-0 left-0 rotate-[40deg] origin-[10%]" />

        {/* Icon */}
        <Icon className="text-8xl text-blue-300 drop-shadow-2xl z-10" />

        {/* Description */}
        <p className="text-white/90 text-center sm:text-left sm:w-1/2 text-base leading-relaxed flex-1 z-10">
          {description}
        </p>

        {/* Optional inner border lines */}
        {/* <div className="line topl absolute top-[10%] w-full h-[1px] bg-gradient-to-r from-gray-400/50 to-[#1d1f1f]" />
        <div className="line leftl absolute left-[10%] w-[1px] h-full bg-gradient-to-b from-gray-400/50 to-[#222424]" /> */}
      </div>

      {/* CSS for animation */}
      {/* <style jsx>{`
        @keyframes moveDot {
          0%,
          100% {
            top: 10%;
            right: 10%;
          }
          25% {
            top: 10%;
            right: calc(100% - 35px);
          }
          50% {
            top: calc(100% - 30px);
            right: calc(100% - 35px);
          }
          75% {
            top: calc(100% - 30px);
            right: 10%;
          }
        }
        .animate-moveDot {
          animation: moveDot 6s linear infinite;
        }
      `}</style> */}
    </div>
  );
};

export default HorizontalServiceCard;
