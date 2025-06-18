// components/toast/SuccessTree.jsx
import React from "react";

const SuccessTree = () => {
  return (
    <div className="w-8 h-8 relative">
      <svg viewBox="0 0 32 32" className="w-full h-full">
        {/* Tree trunk */}
        <rect x="14" y="24" width="4" height="6" fill="#92400e" rx="1" />
        {/* Tree crown */}
        <circle
          cx="16"
          cy="18"
          r="8"
          fill="#22c55e"
          className="animate-bounce-gentle"
        />
        <circle
          cx="12"
          cy="16"
          r="5"
          fill="#16a34a"
          className="animate-bounce-gentle"
          style={{ animationDelay: "0.2s" }}
        />
        <circle
          cx="20"
          cy="16"
          r="5"
          fill="#16a34a"
          className="animate-bounce-gentle"
          style={{ animationDelay: "0.4s" }}
        />
        {/* Sparkles */}
        <circle
          cx="10"
          cy="12"
          r="1"
          fill="#fbbf24"
          className="animate-twinkle"
        />
        <circle
          cx="24"
          cy="14"
          r="1"
          fill="#fbbf24"
          className="animate-twinkle"
          style={{ animationDelay: "0.5s" }}
        />
        <circle
          cx="16"
          cy="8"
          r="1"
          fill="#fbbf24"
          className="animate-twinkle"
          style={{ animationDelay: "1s" }}
        />
      </svg>
    </div>
  );
};

export default SuccessTree;
