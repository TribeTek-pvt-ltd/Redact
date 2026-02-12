"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { PostData } from "@/lib/post";
import { FaArrowRight } from "react-icons/fa";

interface BlogCardProps {
    post: PostData;
}

export default function BlogCard({ post }: BlogCardProps) {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springX = useSpring(x, { stiffness: 120, damping: 20 });
    const springY = useSpring(y, { stiffness: 120, damping: 20 });

    const rotateX = useTransform(springY, [-0.5, 0.5], [10, -10]);
    const rotateY = useTransform(springX, [-0.5, 0.5], [-10, 10]);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / rect.width - 0.5;
        const yPct = mouseY / rect.height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <Link href={`/blog/${post.slug}`} className="block w-full h-full">
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ rotateX, rotateY }}
                className="
          relative flex flex-col justify-end 
          w-full aspect-video p-6 sm:p-8
          rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden 
          bg-white/5 backdrop-blur-2xl border border-white/10 
          cursor-pointer transition-all duration-300
        "
            >
                {/* Background Image with Parallax */}
                {post.image && (
                    <motion.div
                        className="absolute inset-0 z-0"
                        style={{
                            x: useTransform(springX, [-0.5, 0.5], [-20, 20]),
                            y: useTransform(springY, [-0.5, 0.5], [-20, 20]),
                            scale: 1.1, // Scale up slightly to avoid edges showing during movement
                        }}
                    >
                        <div
                            className="w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: `url('${post.image}')` }}
                        />
                    </motion.div>
                )}

                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-black/40 rounded-3xl z-[1]" />

                {/* Bevel & Emboss / Glass Layers */}
                <div className="absolute inset-0 z-[1] rounded-3xl shadow-[inset_1px_1px_0_0_rgba(255,255,255,0.45)] pointer-events-none" />
                <div className="absolute inset-0 z-[1] rounded-3xl shadow-[inset_-6px_-8px_20px_rgba(0,0,0,0.35)] pointer-events-none" />
                <div className="absolute inset-0 z-[1] rounded-3xl bg-[radial-gradient(120%_90%_at_30%_-20%,rgba(255,255,255,0.08),transparent_60%)] pointer-events-none" />
                <div className="absolute inset-0 z-[1] rounded-3xl ring-1 ring-white/10 pointer-events-none" />

                {/* Gradient Overlay for text readability at bottom */}
                <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />


                {/* Content */}
                <div className="relative z-10 w-full">
                    <div className="flex items-end justify-between gap-4">
                        <div className="flex-1">
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 line-clamp-2 whitespace-pre-line">
                                {post.title}
                            </h3>
                            <span className="text-gray-300 text-sm">
                                {new Date(post.date).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </span>
                        </div>

                        <div className="text-white bg-white/10 p-3 rounded-full backdrop-blur-sm border border-white/10 shrink-0 group-hover:bg-white/20 transition-colors">
                            <FaArrowRight size={20} />
                        </div>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}
