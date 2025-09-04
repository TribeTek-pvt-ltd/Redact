'use client';

import Link from 'next/link';
import { FaLinkedin, FaInstagram } from 'react-icons/fa'; // Import icons

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
          <a href="https://www.linkedin.com/company/redact44/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
            <FaLinkedin size={24} className="hover:opacity-80 transition-opacity" />
          </a>
          <a href="https://www.instagram.com/redact05/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
            <FaInstagram size={24} className="hover:opacity-80 transition-opacity" />
          </a>
        </div>
      </div>
    </nav>
  );
}