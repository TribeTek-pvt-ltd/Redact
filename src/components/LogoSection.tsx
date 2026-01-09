"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const LOGOS_ROW_1 = [
  "/patners/1.png", "/patners/2.png", "/patners/3.png",
  "/patners/4.png", "/patners/5.png", "/patners/6.png",
  "/patners/7.png", "/patners/8.png", "/patners/9.png"
];

const LOGOS_ROW_2 = [
  "/patners/10.png", "/patners/11.png", "/patners/12.png",
  "/patners/13.png", "/patners/14.png", "/patners/15.png",
  "/patners/16.png", "/patners/17.png", "/patners/18.png",
  "/patners/19.png"
];

const IMAGE_HEIGHT = 60;
const SPEED = 0.5;

function useMarquee(visibleCount: number) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [positions, setPositions] = useState<number[]>([]);
  const [spacing, setSpacing] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const calculatedSpacing = containerWidth / visibleCount;
      setSpacing(calculatedSpacing);

      setPositions(
        Array.from({ length: visibleCount + 1 }).map((_, i) => i * calculatedSpacing)
      );
    }
  }, [visibleCount]);

  useEffect(() => {
    if (!spacing) return;

    let frame: number;
    const animate = () => {
      setPositions(prev =>
        prev.map(x => {
          let next = x - SPEED;
          if (next < -spacing) {
            next = Math.max(...prev) + spacing;
          }
          return next;
        })
      );
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [spacing]);

  return { containerRef, positions, spacing };
}

export default function PartnersLoop() {
  const row1 = useMarquee(5);
  const row2 = useMarquee(7);

  return (
    <div className="container mx-auto my-12 flex flex-col gap-10">

      {/* ------------ ROW 1 (REDUCED WIDTH) ------------ */}
      <div className="max-w-6xl mx-auto w-full">
        <div
          ref={row1.containerRef}
          className="relative h-[100px] overflow-hidden flex items-center shadow-inner"
        >
          {row1.positions.map((pos, i) => (
            <div
              key={i}
              className="absolute flex justify-center items-center"
              style={{
                width: `${row1.spacing}px`,
                height: IMAGE_HEIGHT,
                transform: `translateX(${pos}px)`,
              }}
            >
              <div className="relative w-full h-full max-w-[120px] px-4">
                <Image
                  src={LOGOS_ROW_1[i % LOGOS_ROW_1.length]}
                  fill
                  alt="logo"
                  className="object-contain grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110 opacity-70 hover:opacity-100"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ------------ ROW 2 (FULL WIDTH) ------------ */}
      <div
        ref={row2.containerRef}
        className="relative h-[100px] overflow-hidden flex items-center shadow-inner"
      >
        {row2.positions.map((pos, i) => (
          <div
            key={i}
            className="absolute flex justify-center items-center"
            style={{
              width: `${row2.spacing}px`,
              height: IMAGE_HEIGHT,
              transform: `translateX(${pos}px)`,
            }}
          >
            <div className="relative w-full h-full max-w-[100px] px-2">
              <Image
                src={LOGOS_ROW_2[i % LOGOS_ROW_2.length]}
                fill
                alt="logo"
                className="object-contain grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110 opacity-70 hover:opacity-100"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
