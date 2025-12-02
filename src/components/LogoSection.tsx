"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const LOGOS = [
  "/images/SheratonMallEmirates.png",
  "/images/SheratonMallEmirates.png",
  "/images/SheratonMallEmirates.png",
  "/images/SheratonMallEmirates.png",
  "/images/SheratonMallEmirates.png",
];

const IMAGE_WIDTH = 150;
const IMAGE_HEIGHT = 80;
const GAP = 40;
const SPEED = 0.7; // smoother speed (px per frame)

export default function PartnersLoop() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [positions, setPositions] = useState<number[]>([]);

  // initialize positions based on container width
  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const totalWidth = IMAGE_WIDTH + GAP;
      const numVisible = Math.ceil(containerWidth / totalWidth) + 2; // cover + buffer

      setPositions(
        Array.from({ length: numVisible }).map((_, i) => i * totalWidth)
      );
    }
  }, []);

  useEffect(() => {
    let animationFrame: number;

    const animate = () => {
      setPositions((prevPositions) => {
        if (!containerRef.current) return prevPositions;

        // const containerWidth = containerRef.current.offsetWidth;
        const totalWidth = IMAGE_WIDTH + GAP;

        return prevPositions.map((pos) => {
          let newPos = pos - SPEED;

          // recycle logos seamlessly when they go fully out
          if (newPos < -totalWidth) {
            const maxPos = Math.max(...prevPositions);
            newPos = maxPos + totalWidth;
          }

          return newPos;
        });
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative container mx-auto h-[100px] overflow-hidden flex items-center ">
      {positions.map((pos, idx) => {
        const logo = LOGOS[idx % LOGOS.length]; // cycle through logos
        return (
          <div
            key={idx}
            className="absolute"
            style={{
              width: `${IMAGE_WIDTH}px`,
              height: `${IMAGE_HEIGHT}px`,
              transform: `translateX(${pos}px)`,
              opacity:
                pos < IMAGE_WIDTH * 0.5 ||
                pos >
                  (containerRef.current?.offsetWidth || 0) - IMAGE_WIDTH * 1.2
                  ? 0.5
                  : 1,
              transition: "opacity 0.3s linear",
            }}>
            <Image
              src={logo}
              alt={`Partner ${idx}`}
              fill
              className="object-contain grayscale hover:grayscale-0"
            />
          </div>
        );
      })}
    </div>
  );
}
