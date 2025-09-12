'use client';

import { IconType } from 'react-icons';
import { motion } from 'framer-motion';

interface IconsProps {
  icons: { Icon: IconType; key: string }[];
}

const Icons: React.FC<IconsProps> = ({ icons }) => {
  if (!icons || icons.length === 0) {
    return <div className="text-white text-center py-7">No icons provided</div>;
  }

  return (
    <div className="relative w-full overflow-hidden py-7 bg-gray-900/20 rounded-3xl">
      <motion.div
        className="flex space-x-10"
        style={{ whiteSpace: 'nowrap' }}
        animate={{ x: ['100%', '-100%'] }} // move entire row right → left
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 10,
            ease: 'linear',
          },
        }}
      >
        {/* Original logos */}
        {icons.map((icon, index) => (
          <motion.div
            key={icon.key}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }} // fade in/out
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'loop',
              delay: index * 0.5, // staggered appearance
            }}
            className="inline-block"
          >
            <icon.Icon className="text-white text-4xl drop-shadow-md" />
          </motion.div>
        ))}

        {/* Duplicate for seamless loop */}
        {icons.map((icon, index) => (
          <motion.div
            key={`${icon.key}-duplicate`}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'loop',
              delay: (icons.length + index) * 0.5,
            }}
            className="inline-block"
          >
            <icon.Icon className="text-white text-4xl drop-shadow-md" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Icons;
