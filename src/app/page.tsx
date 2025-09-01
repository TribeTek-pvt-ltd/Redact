'use client'

import { motion } from 'framer-motion';
import { FaCamera, FaVideo, FaEdit } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 text-center"
      >
        <h1 className="text-5xl font-bold mb-4">Welcome to Redact Editing Shop</h1>
        <p className="text-xl mb-6">Professional Photo & Video Editing Services</p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold"
        >
          Get Started
        </motion.button>
      </motion.section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <FaCamera className="text-4xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Photo Editing</h3>
            <p className="text-gray-600">Enhance your photos with professional retouching.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <FaVideo className="text-4xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Video Editing</h3>
            <p className="text-gray-600">Create stunning videos with seamless edits.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <FaEdit className="text-4xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Custom Edits</h3>
            <p className="text-gray-600">Tailored editing solutions for your needs.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}