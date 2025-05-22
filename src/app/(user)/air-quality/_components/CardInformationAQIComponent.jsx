import clsx from "clsx";
import React from "react";

const CardInformationAQI = () => {
  const colorLevel = {
    lightYellow: "#FAF0CC",
  };

  const levelAQI = {
    level: "Moderate",
    pollutant: "PM.25",
  };

  return (
    <article
      className={`flex h-full w-fit px-10 py-7 rounded-3xl bg-[${colorLevel.lightYellow}]`}
    >
      {/* Amount Of AQI */}
      <div className="flex px-6 flex-col gap-2 items-center">
        <h2 className="text-7xl text-strong-yellow">730</h2>
        <p className="text-base text-status-volunteer">US AQI*</p>
      </div>
      <div className="flex flex-col w-full gap-3 ">
        <h2 className="text-2xl font-semibold text-status-volunteer">
          {levelAQI.level}
        </h2>
        <div className="flex justify-between min-w-sm ">
          <p className="text-lg text-[#636A74] ">
            Main pollutant:
            <span className="text-status-volunteer pl-[5px]">
              {levelAQI.pollutant}
            </span>
          </p>
          <p className="text-status-volunteer text-lg">14.5 ug/m3</p>
        </div>
        {/* Icon */}
        <div className="flex justify-between text-[#636A74] text-lg">
          <span>
            <p>5.5Km/h</p>
          </span>
          <span>
            <p>33</p>
          </span>
          <span>
            <p>62%</p>
          </span>
        </div>
      </div>
    </article>
  );
};

export default CardInformationAQI;
