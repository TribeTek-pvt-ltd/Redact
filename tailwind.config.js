/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-primary": "#3B82F6",
        "brand-blue-light": "#60A5FA",
        "brand-blue-dark": "#1E3A8A",
        "brand-blue-pale": "#DBEAFE",
        "brand-black": "#000000",
        "brand-black-soft": "#1F2937",
        "brand-white": "#FFFFFF",
        "brand-white-off": "#F9FAFB",
      },
      fontFamily: {
        uber: ["var(--font-uber-move)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
