"use client";
import { splitCamelCase } from "@/utils/format";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

const HealthRecommendComponent = ({ levelColor, dataCard }) => {
  const { exercise, windows, mask, airPurifier } = dataCard;

  // For Get Province AQI
  const pathName = usePathname();
  const path = pathName.split("/")[2];

  return (
    <article className="w-full flex flex-col h-full gap-7 bg-white rounded-3xl p-6 border-2 text-light-gray">
      {/* Title */}
      <div className="flex flex-col">
        <h2 className="text-black text-xl font-semibold">
          Health Recommendation
        </h2>
        <p className="text-darker-gray text-lg">
          What is the current air quality in {splitCamelCase(path)}?
        </p>
      </div>
      {/* Warning Icon and Guideline */}
      <div className="flex flex-col gap-2">
        {/* Bike */}
        {exercise && (
          <div className="flex items-center gap-3.5">
            <Image
              alt="Bike-Yellow"
              width={36}
              height={36}
              src={`/assets/air_quality_images/Bike-${levelColor?.title}.svg`}
            />
            <span className="text-dark-gray text-lg">{exercise?.text}</span>
          </div>
        )}

        {/* Mask */}
        {mask && (
          <div className="flex items-center gap-3.5">
            <Image
              alt="Bike-Yellow"
              width={36}
              height={36}
              src={`/assets/air_quality_images/Mask-${levelColor?.title}.svg`}
            />
            <span className="text-dark-gray text-lg">{mask?.text}</span>
          </div>
        )}

        {/* Air */}
        {airPurifier && (
          <div className="flex items-center gap-3.5">
            <Image
              alt="Bike-Yellow"
              width={36}
              height={36}
              src={`/assets/air_quality_images/Fan-${levelColor?.title}.svg`}
            />
            <span className="text-dark-gray text-lg">{airPurifier?.text}</span>
          </div>
        )}

        {/* Windows */}
        {windows && (
          <div className="flex items-center gap-3.5">
            <Image
              alt="Bike-Yellow"
              width={36}
              height={36}
              src={`/assets/air_quality_images/Windows-${levelColor?.title}.svg`}
            />
            <span className="text-dark-gray text-lg">{windows?.text}</span>
          </div>
        )}
      </div>
    </article>
  );
};

export default HealthRecommendComponent;
