'use client';

import Link from 'next/link';
import { FaLinkedin, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa'; // Import icons

export default function Footer() {
  return (
    <nav className="bg-black text-white py-4 sm:py-3 border-t border-white/5 relative z-10 p-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
        {/* Left Side: Nav Items */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 sm:gap-x-8">
          <Link href="/" className="text-white/70 hover:text-white transition-colors text-xs sm:text-sm font-medium uppercase tracking-widest">Home</Link>
          <Link href="/works" className="text-white/70 hover:text-white transition-colors text-xs sm:text-sm font-medium uppercase tracking-widest">Work</Link>
          <Link href="/services" className="text-white/70 hover:text-white transition-colors text-xs sm:text-sm font-medium uppercase tracking-widest">Service</Link>
          <Link href="/about" className="text-white/70 hover:text-white transition-colors text-xs sm:text-sm font-medium uppercase tracking-widest">About Us</Link>
        </div>

        {/* Right Side: Social Links */}
        <div className="flex space-x-6 sm:space-x-5">
          <a href="https://www.linkedin.com/company/redactmedia/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-all hover:scale-110">
            <FaLinkedin size={20} className="transition-opacity" />
          </a>
          <a href="https://www.instagram.com/theredactmedia/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-all hover:scale-110">
            <FaInstagram size={20} className="transition-opacity" />
          </a>
          <a href="https://www.tiktok.com/@redactmedia" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-all hover:scale-110">
            <FaTiktok size={20} className="transition-opacity" />
          </a>
          <a href="https://www.youtube.com/@RedactMedia" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-all hover:scale-110">
            <FaYoutube size={20} className="transition-opacity" />
          </a>
        </div>
      </div>

      {/* Credits Section */}
      <div className="mt-4 sm:mt-3 border-t border-white/5 pt-3 text-center text-[10px] text-white/30 tracking-widest uppercase">
        Designed & Developed by{' '}
        <a
          href="https://tribetek.info"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors font-semibold text-white/50 inline-block px-1"
        >
          TribeTek
        </a>
      </div>
    </nav>
  );
}