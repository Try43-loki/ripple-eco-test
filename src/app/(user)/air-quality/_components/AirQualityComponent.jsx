import { Cloud, Droplet, Wind } from "lucide-react";
import React from "react";

const iconColor = "#f9c300";

const AirQualityComponent = () => {
  return (
    <article className="w-full flex flex-col gap-7 bg-white/50 rounded-3xl p-6 shadow-2xl">
      {/* Title */}
      <div className="flex flex-col">
        <h2 className="text-black text-xl font-semibold">Air Quality</h2>
        <p className="text-darker-gray text-lg">
          What is the current air quality in Phnom Penh?
        </p>
      </div>
      {/* Row Of Card */}
      <div className="flex justify-between">
        {/* Card */}
        <div className="flex flex-col w-3/12 gap-2  rounded-md px-4 py-5 border-2">
          <div className="flex w-full gap-1.5 justify-end items-center">
            <Wind color={iconColor} size={32} />
            <h3 className="text-dark-gray text-lg">Wind Status</h3>
          </div>
          <p className="flex justify-end items-center gap-1.5 text-2xl font-semibold text-dark-gray w-full">
            5.5 <span className="text-xl">km/h</span>
          </p>
        </div>
        {/* Card 2 */}
        <div className="flex flex-col w-3/12 gap-2  rounded-md px-4 py-5 border-2">
          <div className="flex w-full gap-1.5 justify-end items-center">
            <Droplet color={iconColor} fill={iconColor} size={32} />
            <h3 className="text-dark-gray text-lg">Humidity</h3>
          </div>
          <p className="flex justify-end items-center gap-1.5 text-2xl font-semibold text-dark-gray w-full">
            62 <span className="text-2xl">%</span>
          </p>
        </div>
        {/* Card 3 */}
        <div className="flex flex-col w-3/12 gap-2 rounded-md px-4 py-5 border-2">
          <div className="flex w-full gap-1.5 justify-end items-center">
            <Cloud color={iconColor} fill={iconColor} size={32} />
            <h3 className="text-dark-gray text-lg">Weather</h3>
          </div>
          <p className="flex justify-end items-center gap-1.5 text-2xl font-semibold text-dark-gray w-full">
            30 <sup>o</sup>
          </p>
        </div>
      </div>

      {/* Air Pollutants Card */}
      <div className="flex flex-col p-4 gap-5 border-2 rounded-xl">
        {/* Card Top */}
        <div className="flex justify-between">
          {/* Left Side */}
          <div className="flex gap-2.5 justify-center items-center">
            <Wind color={iconColor} size={32} />
            <h3 className="text-dark-gray text-lg">Air Pollutants</h3>
          </div>
          {/* Right Side */}
          <div className="flex flex-col items-end">
            <h2 className="text-xl text-yellow font-semibold">Moderate</h2>
            <div className="flex gap-1.5 items-center">
              <span className=" text-dark-gray text-2xl font-semibold">
                PM2.5 - 14.5
              </span>
              <span className=" text-dark-gray text-xl font-medium">
                µg/m<sup>3</sup>
              </span>
            </div>
          </div>
        </div>
        {/* Last */}
        <div className="text-base text-dark-gray">
          <p className="flex justify-end">
            PM2.5 concentration is currently
            <span className="font-bold px-1">1.8</span>times
          </p>
          <p className="flex justify-end">
            the World Health Organization annual PM2.5 guideline value.
          </p>
        </div>
      </div>
    </article>
  );
};

export default AirQualityComponent;
