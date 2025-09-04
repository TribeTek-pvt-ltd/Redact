"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import Button from "@/components/Button"; // Import the new Button component

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
              <img
                src="/images/logo.png"
                alt="Redact Media Logo"
                className="h-20 w-auto max-h-full"
              />
            </Link>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/works"
              className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">
              Work
            </Link>
            <Link
              href="/Services"
              className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">
              Services
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">
              About Us
            </Link>
            {/* <Link
              href="/Pricing"
              className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">
              Pricing
            </Link> */}
          </div>

          {/* Desktop Let's Talk Button */}
          <div className="hidden md:block">
            <Button href="/contact">Let's Talk</Button>
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
          className="md:hidden bg-black px-4 py-4 space-y-4">
          <Link
            href="/works"
            className="block text-white hover:text-blue-400 text-lg py-2 transition-colors"
            onClick={toggleMenu}>
            Work
          </Link>
          <Link
            href="/projects"
            className="block text-white hover:text-blue-400 text-lg py-2 transition-colors"
            onClick={toggleMenu}>
            Services
          </Link>
          <Link
            href="/about"
            className="block text-white hover:text-blue-400 text-lg py-2 transition-colors"
            onClick={toggleMenu}>
            About Us
          </Link>
          {/* <Link
            href="/services"
            className="block text-white hover:text-blue-400 text-lg py-2 transition-colors"
            onClick={toggleMenu}>
            Pricing
          </Link> */}
          <Button href="/contact">Let's Talk</Button>
        </motion.div>
      )}
    </motion.nav>
  );
}
