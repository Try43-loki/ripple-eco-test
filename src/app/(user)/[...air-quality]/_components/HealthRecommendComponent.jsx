import Image from "next/image";
import React from "react";

const HealthRecommendComponent = ({ levelColor }) => {
  return (
    <article className="w-full flex flex-col h-full gap-7 bg-white rounded-3xl p-6 border-2 text-light-gray">
      {/* Title */}
      <div className="flex flex-col">
        <h2 className="text-black text-xl font-semibold">
          Health Recommendation
        </h2>
        <p className="text-darker-gray text-lg">
          What is the current air quality in Phnom Penh?
        </p>
      </div>
      {/* Warning Icon and Guideline */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3.5">
          <Image
            alt="Bike-Yellow"
            width={36}
            height={36}
            src={`/assets/air_quality_images/Bike-${levelColor?.title}.svg`}
          />
          <span className="text-dark-gray text-lg">
            Sensitive group should reduce outdoor exercise
          </span>
        </div>
        <div className="flex items-center gap-3.5">
          <Image
            alt="Bike-Yellow"
            width={36}
            height={36}
            src={`/assets/air_quality_images/Mask-${levelColor?.title}.svg`}
          />
          <span className="text-dark-gray text-lg">
            Sensitive group should wear a mask outdoors
          </span>
        </div>
        <div className="flex items-center gap-3.5">
          <Image
            alt="Bike-Yellow"
            width={36}
            height={36}
            src={`/assets/air_quality_images/Fan-${levelColor?.title}.svg`}
          />
          <span className="text-dark-gray text-lg">
            Sensitive group should run an air purifier
          </span>
        </div>
        <div className="flex items-center gap-3.5">
          <Image
            alt="Bike-Yellow"
            width={36}
            height={36}
            src={`/assets/air_quality_images/Windows-${levelColor?.title}.svg`}
          />
          <span className="text-dark-gray text-lg">
            Close your windows to avoid dirty outdoors
          </span>
        </div>
      </div>
    </article>
  );
};

export default HealthRecommendComponent;
