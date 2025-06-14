"use client";
import React, { useEffect, useState } from "react";
import { Droplet, Flame, Waves, Wind } from "lucide-react";

const CardCurrentDisasterComponent = ({ naturalData }) => {
  const [disasterCounts, setDisasterCounts] = useState({
    ER: 0,
    FL: 0,
    TC: 0,
    WF: 0,
  });

  useEffect(() => {
    const counts = {
      ER: naturalData.filter((v) => v.eventType === "ER").length,
      FL: naturalData.filter((v) => v.eventType === "FL").length,
      TC: naturalData.filter((v) => v.eventType === "TC").length,
      WF: naturalData.filter((v) => v.eventType === "WF").length,
    };
    setDisasterCounts(counts);
  }, [naturalData]);
  return (
    <React.Fragment>
      <div className="flex flex-col ">
        <div className="flex flex-col items-end gap-1 pl-9 pr-5 py-5 bg-white min-w-32 rounded-xl">
          <Waves size={20} color="#048D4C" />
          <span className="text-dark-gray">Earthquakes</span>
          <div className="text-dark-gray flex items-center justify-end gap-1.5">
            <strong className="text-2xl font-semibold">
              {disasterCounts.ER || 0}
            </strong>
            <span className="text-xl font-medium">Active</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col ">
        <div className="flex flex-col items-end gap-1 pl-9 pr-5 py-5 bg-white min-w-32 rounded-xl">
          <Droplet size={20} color="#048D4C" />
          <span className="text-dark-gray">Flood</span>
          <div className="text-dark-gray flex items-center justify-end gap-1.5">
            <strong className="text-2xl font-semibold">
              {disasterCounts.FL || 0}
            </strong>
            <span className="text-xl font-medium">Active</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col ">
        <div className="flex flex-col items-end gap-1 pl-9 pr-5 py-5 bg-white min-w-32 rounded-xl">
          <Wind size={20} color="#048D4C" />
          <span className="text-dark-gray">Typhoons</span>
          <div className="text-dark-gray flex items-center justify-end gap-1.5">
            <strong className="text-2xl font-semibold">
              {disasterCounts.TC || 0}
            </strong>
            <span className="text-xl font-medium">Active</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col ">
        <div className="flex flex-col items-end gap-1 pl-9 pr-5 py-5 bg-white min-w-32 rounded-xl">
          <Flame size={20} color="#048D4C" />
          <span className="text-dark-gray">Wildfires</span>
          <div className="text-dark-gray flex items-center justify-end gap-1.5">
            <strong className="text-2xl font-semibold">
              {disasterCounts.WF || 0}
            </strong>
            <span className="text-xl font-medium">Active</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CardCurrentDisasterComponent;
