import React from "react";

const ErrorPlant = () => {
  return (
    <div className="w-8 h-8 relative">
      <svg viewBox="0 0 32 32" className="w-full h-full">
        {/* Droopy stem */}
        <path
          d="M16 28 Q14 22 12 18"
          stroke="#dc2626"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Wilted leaves */}
        <path d="M12 18 Q8 16 6 20 Q10 22 12 20" fill="#ef4444" opacity="0.7" />
        <path
          d="M12 16 Q16 14 18 18 Q14 20 12 18"
          fill="#dc2626"
          opacity="0.8"
        />
        {/* Sad soil */}
        <ellipse cx="16" cy="29" rx="6" ry="1" fill="#92400e" opacity="0.5" />
      </svg>
    </div>
  );
};

export default ErrorPlant;
