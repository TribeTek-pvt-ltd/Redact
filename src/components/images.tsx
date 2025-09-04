'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const images = [
  '/images/image1.jpeg',
  '/images/image1.jpeg',
  '/images/image1.jpeg',
  '/images/image1.jpeg',
  '/images/image1.jpeg',
  '/images/image1.jpeg',
  '/images/image1.jpeg',
  '/images/image1.jpeg',
  '/images/image1.jpeg',
  '/images/image1.jpeg',
  '/images/image1.jpeg',
  '/images/image1.jpeg',
  
];

const Row = ({ images, direction }: { images: string[]; direction: 'left' | 'right' }) => {
  const duplicatedImages = [...images, ...images]; // Duplicate for infinite loop
  const animate = direction === 'left' ? { x: ['2%', '-2%'] } : { x: ['-2%', '2%'] };

  return (
    <motion.div
      className="flex overflow-hidden border-t border-black border-t-6"
      animate={{ x: animate.x }}
      transition={{ x: { repeat: Infinity, repeatType: 'reverse', duration: 1, ease: 'linear' } }}
    >
      {duplicatedImages.map((src, index) => (
        <div key={index} className="w-1/4 flex-shrink-0 border-l border-black border-l-6">
          <Image src={src} alt={`Image ${index + 1}`} width={300} height={200} className="w-full h-auto object-cover" />
        </div>
      ))}
    </motion.div>
  );
};

export default function Images() {
  return (
    <div className=" bg-gradient-to-b from-black to-blue-900  bg-gray-100 py-12">
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="space-y-0.3">
          {/* Row 1: Left to Right then Right to Left */}
          <Row images={images.slice(0, 4)} direction="left" />
          {/* Row 2: Right to Left then Left to Right */}
          <Row images={images.slice(4, 8)} direction="right" />
          {/* Row 3: Left to Right then Right to Left */}
          <Row images={images.slice(8, 12)} direction="left" />
        </div>
      </div>
    </div>
  );
}