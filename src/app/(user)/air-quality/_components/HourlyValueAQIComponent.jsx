import { SunIcon } from "lucide-react";
import React from "react";

const HourlyValueAQIComponent = () => {
  return (
    <div className="w-[200px] flex flex-col items-center gap-3 ">
      <span>Now</span>
      <SunIcon />
      <span className="text-2xl">
        40<sup>o</sup>
      </span>
      {/* Value Of AQI */}
      <div className="bg-strong-green rounded-lg w-[60px] h-[30px] leading-[30px] ">
        <p className="text-center">12</p>
      </div>
    </div>
  );
};

export default HourlyValueAQIComponent;
