"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

type ButtonProps = {
  href?: string; // optional
  onClick?: () => void; // optional
  children: React.ReactNode;
};

export default function Button({ href, onClick, children }: ButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) onClick();
    if (href) router.push(href);
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className="bg-blue text-white px-6 py-2 rounded-md text-lg font-medium hover:bg-black hover:border-blue border-black border-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue">
      {children}
    </motion.button>
  );
}
