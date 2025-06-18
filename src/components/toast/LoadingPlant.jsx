import React from "react";

const LoadingPlant = () => {
  return (
    <div className="w-8 h-8 relative">
      <svg viewBox="0 0 32 32" className="w-full h-full animate-pulse">
        {/* Stem */}
        <path
          d="M16 28 L16 16"
          stroke="#22c55e"
          strokeWidth="2"
          strokeLinecap="round"
          className="animate-grow-up"
        />
        {/* Left leaf */}
        <path
          d="M16 20 Q12 16 8 18 Q12 20 16 18"
          fill="#22c55e"
          className="animate-leaf-grow"
          style={{
            animationDelay: "0.5s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        />
        {/* Right leaf */}
        <path
          d="M16 18 Q20 16 24 18 Q20 20 16 20"
          fill="#16a34a"
          className="animate-leaf-grow"
          style={{
            animationDelay: "1s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        />
        {/* Small dots for seeds/growth */}
        <circle cx="16" cy="28" r="1" fill="#15803d" />
        <circle cx="14" cy="28" r="0.5" fill="#15803d" opacity="0.7" />
        <circle cx="18" cy="28" r="0.5" fill="#15803d" opacity="0.7" />
      </svg>
    </div>
  );
};

export default LoadingPlant;
