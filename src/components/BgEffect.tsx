"use client";

import React from "react";

const BgEffect = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="w-full h-full relative">
        {/* Animated colored circles */}
        <div
  className="absolute top-[-5%] left-[-5%] w-[500px] h-[500px] rounded-full animate-firstCircle"
  style={{
    background: "linear-gradient(135deg, #0072ff, #3399ff)", // dark blue → medium blue
  }}
></div>

<div
  className="absolute bottom-[5%] right-[5%] w-[300px] h-[300px] rounded-full animate-secondCircle"
  style={{
    background: "linear-gradient(135deg, #3399ff, #66ccff)", // medium blue → light blue
  }}
></div>
        {/* Glass overlay */}
        <div className="absolute inset-0  backdrop-blur-[250px]"></div>
      </div>

      <style jsx>{`
        @keyframes firstCircle {
          0% { transform: translate(0,0) rotate(180deg); }
          50% { transform: translate(500px,500px) rotate(280deg); }
          100% { transform: translate(0,0) rotate(360deg); }
        }

        @keyframes secondCircle {
          0% { transform: translate(0,0) rotate(180deg); }
          50% { transform: translate(-500px,-500px) rotate(280deg); }
          100% { transform: translate(0,0) rotate(360deg); }
        }

        .animate-firstCircle {
          animation: firstCircle 10s linear infinite;
        }

        .animate-secondCircle {
          animation: secondCircle 10s linear infinite 2s;
        }
      `}</style>
    </div>
  );
};

export default BgEffect;
