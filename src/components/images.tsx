"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const ROWS = 3;
const IMAGES_PER_ROW = 8;
const TOTAL_IMAGES = ROWS * IMAGES_PER_ROW;

const SPEEDS = [0.6, 0.5, 0.4];
const GAP = 20;

// Generate 3 rows of shuffled images
const generateImages = (rows: number, imagesPerRow: number) => {
  const allImages = Array.from({ length: TOTAL_IMAGES }).map(
    (_, i) => `/scroll/${i + 1}.jpg`
  );

  const shuffle = (arr: string[]) =>
    arr
      .map((v) => ({ v, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ v }) => v);

  return Array.from({ length: rows }).map((_, rowIndex) => {
    const start = rowIndex * imagesPerRow;
    const end = start + imagesPerRow;
    return shuffle(allImages.slice(start, end));
  });
};

export default function MultiRowInfiniteCarousel() {
  const containerRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [positions, setPositions] = useState<number[][]>([]);
  const [imageWidth, setImageWidth] = useState(250);
  const [imageHeight, setImageHeight] = useState(200);
  const [images, setImages] = useState<string[][]>([]);

  // Load and shuffle image rows once
  useEffect(() => {
    setImages(generateImages(ROWS, IMAGES_PER_ROW));
  }, []);

  // Dynamic width/height calculation
  useEffect(() => {
    const updateDimensions = () => {
      const containerWidth =
        containerRefs.current[0]?.offsetWidth || window.innerWidth;

      const width = (containerWidth - GAP * 4) / 5; // Show 5 images on screen
      const height = width * 0.8;
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

  // Scroll animation
  useEffect(() => {
    let animationFrame: number;

    const animate = () => {
      setPositions((prev) =>
        prev.map((rowPos, rowIdx) => {
          const speed = SPEEDS[rowIdx];
          const direction = rowIdx % 2 === 0 ? -1 : 1;
          const containerWidth =
            containerRefs.current[rowIdx]?.offsetWidth || 0;
          const totalWidth = imageWidth + GAP;

          return rowPos.map((pos) => {
            let newPos = pos + direction * speed;

            // Move image back to right (for left scroll)
            if (direction === -1 && newPos < -totalWidth) {
              const maxPos = Math.max(...rowPos);
              newPos = maxPos + totalWidth;
            }

            // Move image back to left (for right scroll)
            if (direction === 1 && newPos > containerWidth) {
              const minPos = Math.min(...rowPos);
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
            containerRefs.current[rowIndex] = el;
          }}
          className="relative w-full overflow-hidden flex items-center"
          style={{ height: `${imageHeight}px` }}>
          {images[rowIndex]?.map((src, idx) => (
            <div
              key={idx}
              className="absolute"
              style={{
                width: `${imageWidth}px`,
                height: `${imageHeight}px`,
                left: positions[rowIndex]?.[idx] || 0,
                willChange: "transform",
              }}>
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
