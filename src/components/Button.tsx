"use client"; // must be here

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
};

export default function Button({ href, onClick, children, className = "" }: ButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) onClick();
    if (href) router.push(href); // client-side navigation
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className={`bg-blue text-white px-6 py-2 rounded-md text-lg font-medium hover:bg-black hover:border-blue border-black border-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue ${className}`}>
      {children}
    </motion.button>
  );
}
