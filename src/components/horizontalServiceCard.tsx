'use client'; 

import { IconType } from 'react-icons';

interface HorizontalServiceCardProps {
  title: string;
  Icon: IconType;
  description?: string;
}

const HorizontalServiceCard: React.FC<HorizontalServiceCardProps> = ({ title, Icon, description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }) => {
  return (
    <div className="container mx-auto flex flex-col p-2 sm:p-4">
      <h3 className=" py-4 text-white text-3xl font-semibold mt-1 text-left">{title}</h3>
    <div className="    flex flex-col sm:flex-row items-center rounded-3xl bg-white/5 backdrop-blur-lg border border-white/20 mx-13">
  {/* Centered Icon with larger background */}
  <div className=" drop-shadow-lg sm:bg-gradient-to-r  bg-gradient-to-b   from-blue-700/70 rounded-2xl to-black border border-blue-700/70">
    <Icon className="sm:mx-12 text-9xl text-blue-700/80 my-8 mx-16 " />
  </div>
  <p className="m-4 sm:ml-20 text-white text-base leading-relaxed flex-1 flex justify-center items-center">
    {description}
  </p>
</div>

    </div>
  );
};

export default HorizontalServiceCard;