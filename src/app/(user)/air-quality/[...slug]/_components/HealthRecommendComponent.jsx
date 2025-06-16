import Image from "next/image";
import React from "react";
import TitleAirQualityAndHealthComponent from "./TitleAirQualityAndHealthComponent";
import { checkAqiInformation } from "@/utils/airQuality";

const HealthRecommendComponent = ({ dataDaily, dataProvince }) => {
  const { exercise, windows, mask, airPurifier } =
    dataDaily.heathRecommendation;
  const title = "Health Recommendation";

  const currentLevel = checkAqiInformation(dataProvince?.aqi);

  return (
    <article className="w-full flex flex-col h-full gap-7 bg-white rounded-3xl p-6 border-2 text-light-gray">
      <TitleAirQualityAndHealthComponent title={title} />
      {/* Warning Icon and Guideline */}
      <div className="flex flex-col gap-2">
        {/* Bike */}
        {exercise && (
          <div className="flex items-center gap-3.5">
            <Image
              alt="Bike-Yellow"
              width={36}
              height={36}
              src={`/assets/air_quality_images/Bike-${currentLevel?.title}.svg`}
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
              src={`/assets/air_quality_images/Mask-${currentLevel?.title}.svg`}
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
              src={`/assets/air_quality_images/Fan-${currentLevel?.title}.svg`}
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
              src={`/assets/air_quality_images/Windows-${currentLevel?.title}.svg`}
            />
            <span className="text-dark-gray text-lg">{windows?.text}</span>
          </div>
        )}
      </div>
    </article>
  );
};

export default HealthRecommendComponent;
