'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import Button from './Button'; // Import the new Button component

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-black sticky top-0 z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="text-3xl font-bold font-mono tracking-tight text-white">REDACT</span>
            </Link>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium">
              Work
            </Link>
            <Link href="/projects" className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium">
              Services
            </Link>
            <Link href="/about" className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium">
              About Us
            </Link>
            <Link href="/services" className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium">
              Pricing
            </Link>
          </div>

          {/* Desktop Let's Talk Button */}
          <div className="hidden md:block">
            <Button href="/contact">Let's Talk</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl">
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-black px-4 pb-4 space-y-3"
        >
          <Link href="/" className="block text-white hover:text-blue-400 text-lg">
            Work
          </Link>
          <Link href="/projects" className="block text-white hover:text-blue-400 text-lg">
            Services
          </Link>
          <Link href="/about" className="block text-white hover:text-blue-400 text-lg">
            About Us
          </Link>
          <Link href="/services" className="block text-white hover:text-blue-400 text-lg">
            Pricing
          </Link>
          <Button href="/contact">Let's Talk</Button>
        </motion.div>
      )}
    </motion.nav>
  );
}