"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import Button from "@/components/Button"; // Import the new Button component
import Image from "next/image";
import { useCalendly } from "@/app/hooks/useCalendly";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { openCalendly } = useCalendly();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-black sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" aria-label="Home">
              <Image
                src="/images/logo.png"
                alt="Redact Media Logo"
                width={200}
                height={80}
                className="h-20 w-auto max-h-full"
              />
            </Link>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">
              Home
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">
              About Us
            </Link>
            <Link
              href="/works"
              className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">
              Work
            </Link>
            <Link
              href="/services"
              className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">
              Services
            </Link>

            {/* <Link
              href="/Pricing"
              className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">
              Pricing
            </Link> */}
          </div>

          {/* Desktop Let's Talk Button */}
          <div className="hidden md:block">
            <Button onClick={openCalendly}>Let&apos;s Talk</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white text-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 p-1 rounded"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}>
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={menuVariants}
          className="md:hidden w-full px-4 py-4 space-y-4 border-t border-gray-700">
          <Link
            href="/"
            className="block text-white hover:text-blue-400 text-lg py-2 transition-colors"
            onClick={toggleMenu}>
            Home
          </Link>
          <Link
            href="/about"
            className="block text-white hover:text-blue-400 text-lg py-2 transition-colors"
            onClick={toggleMenu}>
            About Us
          </Link>
          <Link
            href="/works"
            className="block text-white hover:text-blue-400 text-lg py-2 transition-colors"
            onClick={toggleMenu}>
            Work
          </Link>
          <Link
            href="/services"
            className="block text-white hover:text-blue-400 text-lg py-2 transition-colors"
            onClick={toggleMenu}>
            Services
          </Link>

          {/* <Link
            href="/services"
            className="block text-white hover:text-blue-400 text-lg py-2 transition-colors"
            onClick={toggleMenu}>
            Pricing
          </Link> */}
          <Button href="/contact">Let&apos;s Talk</Button>
        </motion.div>
      )}
    </motion.nav>
  );
}
