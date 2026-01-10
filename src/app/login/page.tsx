"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function AdminLoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  // Fixed admin credentials
  const FIXED_EMAIL = "admin@gmail.com";
  const FIXED_PASSWORD = "Admin@123";

  const handleLogin = () => {
    if (email === FIXED_EMAIL && password === FIXED_PASSWORD) {
      setError("");

      // Store admin session
      localStorage.setItem("isAdmin", "true");

      // Redirect to admin page
      router.push("/admin");
    } else {
      setError("Invalid email or password!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 p-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="
          w-full max-w-md p-8 rounded-3xl
          bg-white/10 backdrop-blur-xl border border-white/20
          shadow-[0_18px_40px_-10px_rgba(0,0,0,0.6)]
        "
      >
        <h2 className="text-3xl font-semibold text-white text-center mb-8">
          Admin Login
        </h2>

        {/* Email */}
        <div className="mb-6">
          <label className="text-white/80 text-sm">Email</label>
          <input
            type="email"
            placeholder="Enter admin email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="
              w-full mt-2 p-3 rounded-xl bg-white/10 text-white 
              outline-none border border-white/20 
              placeholder-white/40 focus:border-blue-500
            "
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="text-white/80 text-sm">Password</label>
          <div className="relative mt-2">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="
                w-full p-3 rounded-xl bg-white/10 text-white 
                outline-none border border-white/20 
                placeholder-white/40 focus:border-blue-500
              "
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <p className="text-red-400 text-sm text-center mb-4">
            {error}
          </p>
        )}

        {/* Login Button */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleLogin}
          className="
            w-full py-3 rounded-xl text-lg font-semibold
            bg-blue-600 hover:bg-blue-700 text-white
            transition-all shadow-lg
          "
        >
          Login
        </motion.button>

        <p className="text-white/50 text-sm text-center mt-6 cursor-pointer hover:text-white">
          Forgot Password?
        </p>
      </motion.div>
    </div>
  );
}
