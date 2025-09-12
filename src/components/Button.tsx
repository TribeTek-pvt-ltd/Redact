"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type ButtonProps = {
  href?: string; // optional
  onClick?: () => void; // optional
  children: React.ReactNode;
};

export default function Button({ href, onClick, children }: ButtonProps) {
  const btn = (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="bg-blue-500 text-white px-6 py-2 rounded-md text-lg font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
      {children}
    </motion.button>
  );

  // If href is provided, wrap in Link
  return href ? <Link href={href}>{btn}</Link> : btn;
}
