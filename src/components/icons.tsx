'use client';

import { IconType } from 'react-icons';
import { motion } from 'framer-motion';

interface IconsProps {
  icons: { Icon: IconType; key: string }[];
}

const Icons: React.FC<IconsProps> = ({ icons }) => {
  return (
    <div className="relative w-full bg-gray-900/50 shadow-lg overflow-hidden py-7">
      <motion.div
        className="flex space-x-12"
        animate={{ x: ['100%', '-100%'] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 20,
            ease: 'linear',
          },
        }}
        style={{ whiteSpace: 'nowrap' }}
      >
        {icons.map((icon) => (
          <icon.Icon
            key={icon.key}
            className="text-white text-4xl drop-shadow-md"
            style={{ display: 'inline-block', margin: '0 20px' }}
          />
        ))}
        {/* Duplicate icons for seamless looping */}
        {icons.map((icon) => (
          <icon.Icon
            key={`${icon.key}-duplicate`}
            className="text-white text-4xl drop-shadow-md"
            style={{ display: 'inline-block', margin: '0 20px' }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Icons;