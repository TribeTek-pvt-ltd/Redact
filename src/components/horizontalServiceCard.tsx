'use client';

import ServiceCard from './ServiceCard';
import { IconType } from 'react-icons';

interface HorizontalServiceCardProps {
  title: string;
  Icon: IconType;
  description?: string;
}

const HorizontalServiceCard: React.FC<HorizontalServiceCardProps> = ({ title, Icon, description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }) => {
  return (
    <div className=" flex flex-col items-start">
     <h3 className="py-4 text-white text-2xl font-semibold mt-6">{title}</h3>
        <div className="container mx-auto w-full max-w-[1000px] bg-gray-800/50 rounded-3xl p-1 shadow-lg flex flex-row items-center h-[400px] ">
        <ServiceCard Icon={Icon} />
        <p className="ml-6 text-white text-base leading-relaxed flex-1 justify-center flex">{description}</p>
      </div>
    </div>
  );
};

export default HorizontalServiceCard;