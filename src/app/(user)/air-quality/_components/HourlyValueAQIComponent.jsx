import { clsx } from "clsx";
import Image from "next/image";
import React from "react";

const LineVertical = () => (
  <div className="flex justify-center items-center">
    <hr className="w-px h-36 border-1 " />
  </div>
);

const HourlyValueAQIComponent = ({ isActive }) => {
  return (
    <>
      <div
        className={clsx(
          "w-[200px] flex flex-col items-center gap-3 px-6 py-4 rounded-xl",
          {
            "bg-light-gray px-": isActive,
          }
        )}
      >
        <span className="text-lg font-medium text-darker-gray">Now</span>
        <Image
          src="/assets/air_quality_images/Sun.svg"
          alt="Logo"
          width={36}
          height={36}
        />
        <span className="text-2xl font-semibold text-darker-gray">
          40<sup>o</sup>
        </span>
        {/* Value Of AQI */}
        <div className="bg-strong-green rounded-lg w-[60px] h-[30px] leading-[30px] ">
          <p className="text-center font-medium text-white">12</p>
        </div>
      </div>
      <LineVertical />
    </>
  );
};

export default HourlyValueAQIComponent;
