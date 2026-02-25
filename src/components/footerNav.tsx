'use client';

import Link from 'next/link';
import { FaLinkedin, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa'; // Import icons

export default function Footer() {
  return (
    <nav className="bg-black text-white py-8 sm:py-4 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-8 sm:gap-0">
        {/* Left Side: Nav Items */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 sm:gap-x-10">
          <Link href="/" className="hover:text-blue-400 transition-colors text-sm sm:text-base font-medium uppercase tracking-wider">Home</Link>
          <Link href="/work" className="hover:text-blue-400 transition-colors text-sm sm:text-base font-medium uppercase tracking-wider">Work</Link>
          <Link href="/services" className="hover:text-blue-400 transition-colors text-sm sm:text-base font-medium uppercase tracking-wider">Service</Link>
          <Link href="/about" className="hover:text-blue-400 transition-colors text-sm sm:text-base font-medium uppercase tracking-wider">About Us</Link>
        </div>
        {/* Right Side: Social Links */}
        <div className="flex space-x-8 sm:space-x-6">
          <a href="https://www.linkedin.com/company/redactmedia/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-all hover:scale-110">
            <FaLinkedin size={26} className="transition-opacity" />
          </a>
          <a href="https://www.instagram.com/theredactmedia/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-all hover:scale-110">
            <FaInstagram size={26} className="transition-opacity" />
          </a>
          <a href="https://www.tiktok.com/@redactmedia" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-all hover:scale-110">
            <FaTiktok size={26} className="transition-opacity" />
          </a>
          <a href="https://www.youtube.com/@RedactMedia" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-all hover:scale-110">
            <FaYoutube size={26} className="transition-opacity" />
          </a>
        </div>
      </div>
    </nav>
  );
}