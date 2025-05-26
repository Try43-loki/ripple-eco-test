import { Wind } from "lucide-react";
import React from "react";

const HealthRecommendComponent = () => {
  return (
    <article className="w-full flex flex-col h-full gap-7 bg-white rounded-3xl p-6 shadow-2xl">
      {/* Title */}
      <div className="flex flex-col">
        <h2 className="text-black text-xl font-semibold">
          Health Recommendation
        </h2>
        <p className="text-darker-gray text-lg">
          What is the current air quality in Phnom Penh?
        </p>
      </div>
    </article>
  );
};

export default HealthRecommendComponent;
