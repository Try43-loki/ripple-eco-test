import clsx from "clsx";
import { Cloud, Droplet, Wind } from "lucide-react";
import React from "react";

const aqiData = {
  value: 730,
  unit: "US AQI*",
  level: "Moderate",
  pollutant: "PM2.5",
  pollutantValue: "14.5 ug/m3",
  windSpeed: "5.5 Km/h",
  temperature: "33",
  humidity: "62%",
};

const iconColor = "#f9c300";

const IconLabel = ({ icon: Icon, label }) => {
  return (
    <span className="flex items-center gap-1.5 text-[#636A74] text-lg">
      <Icon color={iconColor} fill={iconColor} />
      <p>{label}</p>
    </span>
  );
};

const CardInformationAQI = () => {
  return (
    <article
      className="flex h-full w-fit gap-5 px-10 py-7 rounded-3xl bg-lighter-yellow"
      aria-label="Air Quality Information Card"
    >
      {/* AQI Value */}
      <div className="flex flex-col gap-2 px-6 items-center">
        <h2 className="text-7xl font-bold text-yellow">{aqiData.value}</h2>
        <p className="text-base text-status-volunteer">{aqiData.unit}</p>
      </div>

      {/* AQI Details */}
      <div className="flex flex-col w-full gap-3">
        <h2 className="text-2xl font-semibold text-status-volunteer">
          {aqiData.level}
        </h2>
        <div className="flex justify-between min-w-sm">
          <p className="text-lg text-[#636A74]">
            Main pollutant:
            <span className="text-status-volunteer pl-[5px]">
              {aqiData.pollutant}
            </span>
          </p>
          <p className="text-status-volunteer text-lg">
            {aqiData.pollutantValue}
          </p>
        </div>

        {/* Icons Row */}
        <div className="flex justify-between">
          <span className="flex items-center gap-1.5 text-[#636A74] text-lg">
            <Wind color={iconColor} />
            <p>{aqiData.windSpeed}</p>
          </span>
          <IconLabel
            icon={Cloud}
            label={
              <>
                {aqiData.temperature}
                <sup>o</sup>
              </>
            }
          />
          <IconLabel icon={Droplet} label={aqiData.humidity} />
        </div>
      </div>
    </article>
  );
};

export default CardInformationAQI;
