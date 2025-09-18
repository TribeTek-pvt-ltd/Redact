"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const ROWS = 3;
const IMAGES_PER_ROW = 10; // total images for seamless loop
const SPEEDS = [0.6, 0.5, 0.4]; // scroll speed per row
const GAP = 20; // gap between images

// Generate placeholder images dynamically
const generateImages = (width: number, height: number) =>
  Array.from({ length: IMAGES_PER_ROW }).map(
    (_, i) =>
      `https://picsum.photos/${Math.round(width)}/${Math.round(height)}?random=${i + 1}`
  );

export default function MultiRowInfiniteCarousel() {
  const containerRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [positions, setPositions] = useState<number[][]>([]);
  const [imageWidth, setImageWidth] = useState(250);
  const [imageHeight, setImageHeight] = useState(200);

  // Calculate image width based on container so 5 images are visible
  useEffect(() => {
    const updateDimensions = () => {
      const containerWidth =
        containerRefs.current[0]?.offsetWidth || window.innerWidth;

      const width = (containerWidth - GAP * 4) / 5; // 5 images per screen, 4 gaps
      const height = width * 0.8; // maintain aspect ratio
      setImageWidth(width);
      setImageHeight(height);

      // Initialize positions
      setPositions(
        Array.from({ length: ROWS }, () =>
          Array.from({ length: IMAGES_PER_ROW }, (_, i) => i * (width + GAP))
        )
      );
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Animate the carousel
  useEffect(() => {
    let animationFrame: number;

    const animate = () => {
      setPositions((prevPositions) =>
        prevPositions.map((rowPositions, rowIndex) => {
          const speed = SPEEDS[rowIndex];
          const direction = rowIndex % 2 === 0 ? -1 : 1;
          const containerWidth =
            containerRefs.current[rowIndex]?.offsetWidth || 0;
          const totalWidth = imageWidth + GAP;

          return rowPositions.map((pos) => {
            let newPos = pos + direction * speed;

            // seamless recycling
            if (direction === -1 && newPos < -totalWidth) {
              const maxPos = Math.max(...rowPositions);
              newPos = maxPos + totalWidth;
            }
            if (direction === 1 && newPos > containerWidth) {
              const minPos = Math.min(...rowPositions);
              newPos = minPos - totalWidth;
            }

            return newPos;
          });
        })
      );

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [imageWidth]);

  return (
    <div className="space-y-2 md:space-y-8 md:py-12 py-1">
      {Array.from({ length: ROWS }).map((_, rowIndex) => (
        <div
          key={rowIndex}
          ref={(el) => {
            containerRefs.current[rowIndex] = el!;
          }}
          className="relative w-full overflow-hidden flex items-center"
          style={{ height: `${imageHeight}px` }} // dynamic row height
        >
          {generateImages(imageWidth, imageHeight).map((src, idx) => (
            <div
              key={idx}
              className="absolute"
              style={{
                width: `${imageWidth}px`,
                height: `${imageHeight}px`,
                left: positions[rowIndex]?.[idx] || 0,
                willChange: "transform",
              }}
            >
              <Image
                src={src}
                alt={`Carousel image ${rowIndex}-${idx}`}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1500 ease-in-out rounded-lg"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

