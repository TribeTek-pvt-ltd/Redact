'use client';

import Link from 'next/link';
import { FaLinkedin, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa'; // Import icons

export default function Footer() {
  return (
    <nav className="bg-black text-white py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Left Side: Nav Items */}
        <div className="flex space-x-6">
          <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
          <Link href="/work" className="hover:text-blue-400 transition-colors">Work</Link>
          <Link href="/services" className="hover:text-blue-400 transition-colors">Service</Link>
          <Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link>
        </div>
        {/* Right Side: Social Links */}
        <div className="flex space-x-4">
          <a href="https://www.linkedin.com/company/redactmedia/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
            <FaLinkedin size={24} className="hover:opacity-80 transition-opacity" />
          </a>
          <a href="https://www.instagram.com/theredactmedia/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
            <FaInstagram size={24} className="hover:opacity-80 transition-opacity" />
          </a>
          <a href="https://www.tiktok.com/@redact700?_r=1&_t=ZS-94BGS4OIIM9" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
            <FaTiktok size={24} className="hover:opacity-80 transition-opacity" />
          </a>
          <a href="https://www.youtube.com/@RedactMedia" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
            <FaYoutube size={24} className="hover:opacity-80 transition-opacity" />
          </a>
        </div>
      </div>
    </nav>
  );
}