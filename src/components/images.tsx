"use client";

import { useEffect, useRef, useState } from "react";

const ROWS = 3;
const IMAGES_PER_ROW = 10;
const SPEEDS = [0.6, 0.5, 0.4]; // slower speeds for smoother scroll
const IMAGE_WIDTH = 250; // increased width
const IMAGE_HEIGHT = 200; // increased height
const GAP = 20; // slightly bigger gap

// Generate placeholder images
const generateImages = () =>
  Array.from({ length: IMAGES_PER_ROW }).map(
    (_, i) =>
      `https://picsum.photos/${IMAGE_WIDTH}/${IMAGE_HEIGHT}?random=${i + 1}`
  );

export default function MultiRowInfiniteCarousel() {
  const containerRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [positions, setPositions] = useState<number[][]>(
    Array.from({ length: ROWS }, () =>
      Array.from({ length: IMAGES_PER_ROW }, (_, i) => i * (IMAGE_WIDTH + GAP))
    )
  );

  useEffect(() => {
    let animationFrame: number;

    const animate = () => {
      setPositions((prevPositions) =>
        prevPositions.map((rowPositions, rowIndex) => {
          const speed = SPEEDS[rowIndex];
          const direction = rowIndex % 2 === 0 ? -1 : 1; // alternate directions
          const containerWidth =
            containerRefs.current[rowIndex]?.offsetWidth || 0;
          const totalWidth = IMAGE_WIDTH + GAP;

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
  }, []);

  return (
    <div className="space-y-0">
      {Array.from({ length: ROWS }).map((_, rowIndex) => (
        <div
          key={rowIndex}
          ref={(el) => {
            containerRefs.current[rowIndex] = el!;
          }}
          className="relative w-full h-[220px] overflow-hidden flex items-center">
          {generateImages().map((src, idx) => (
            <img
              key={idx}
              src={src}
              className="absolute object-cover grayscale hover:grayscale-0 rounded-xl"
              style={{
                width: `${IMAGE_WIDTH}px`,
                height: `${IMAGE_HEIGHT}px`,
                left: positions[rowIndex][idx] || 0,
                willChange: "transform", // GPU optimization
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
