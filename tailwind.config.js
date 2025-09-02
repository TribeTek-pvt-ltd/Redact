/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: '#3B82F6', // Primary blue (similar to Tailwind's blue-500)
          light: '#60A5FA',  // Lighter blue (blue-400)
          dark: '#1E3A8A',   // Darker blue (blue-900)
          pale: '#DBEAFE',   // Very light blue (blue-100)
        },
        black: {
          DEFAULT: '#000000', // True black
          soft: '#1F2937',    // Off-black (gray-800 for softer contrast)
        },
        white: {
          DEFAULT: '#FFFFFF', // True white
          off: '#F9FAFB',     // Off-white (gray-50 for subtle backgrounds)
        },
      },
    //   spacing: {
    //   '130': '32.5rem', // 130px approximated as 32.5rem (1rem = 16px)
    // },
    },
  },
  plugins: [],
};