'use client';

import { IconType } from 'react-icons';

interface HorizontalServiceCardProps {
  title: string;
  Icon: IconType;
  description?: string;
}

const HorizontalServiceCard: React.FC<HorizontalServiceCardProps> = ({ title, Icon, description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }) => {
  return (
    <div className="container mx-auto flex flex-col items-center">
      <h3 className="py-4 text-white text-2xl font-semibold mt-6 ">{title}</h3>
      <div className="w-full max-w-[1000px] bg-black rounded-3xl flex flex-row items-center min-h-[100px] relative">
       
        {/* Centered Icon with larger background */}
        <div className="flex-1 flex items-center justify-center z-10">
          <div className='mr-5 h-52  drop-shadow-lg bg-gradient-to-r from-blue-700/70 rounded-2xl to-black'>
          <Icon className="ml-3 text-[180px] text-blue-700/80 " />
        </div>
        </div>
        <p className=" text-white text-base leading-relaxed flex-1 justify-center flex">{description}</p>
      </div>
    </div>
  );
};

export default HorizontalServiceCard;