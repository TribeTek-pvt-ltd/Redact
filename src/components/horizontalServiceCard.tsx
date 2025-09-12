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

      {/* Blue glass effect card */}
      <div className="flex items-center flex-col sm:flex-row gap-6 rounded-3xl bg-blue-700/20 backdrop-blur-lg border border-blue-500/30 shadow-lg p-6">
        {/* Icon */}
        <Icon className="text-9xl text-blue-400 sm:mx-11 drop-shadow-lg" />

        {/* Description */}
        <p className="text-white text-center sm:text-left sm:w-1/4 text-base leading-relaxed flex-1">
          {description}
        </p>
      </div>
    </div>
  );
};

export default HorizontalServiceCard;
