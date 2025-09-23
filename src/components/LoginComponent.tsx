"use client";

import { useState } from "react";

interface LoginProps {
  onLogin: () => void;
}

export default function LoginComponent({ onLogin }: LoginProps) {
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (password === "admin123") {
      localStorage.setItem("isLoggedIn", "true");
      onLogin();
    } else {
      alert("Wrong password");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-80">
        <h1 className="text-2xl font-bold mb-6 text-center text-[#020202]">
          Admin Login
        </h1>
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-2 mb-4 rounded outline-none focus:ring-2 focus:ring-[#0072ff]"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-[#0072ff] text-white py-2 rounded hover:bg-[#005fcc]">
          Login
        </button>
      </div>
    </div>
  );
}
