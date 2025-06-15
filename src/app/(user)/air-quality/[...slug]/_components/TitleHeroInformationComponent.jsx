"use client";

import React from "react";
import { useCurrentPathSegment } from "@/utils/pathUtils";
import { splitCamelCase } from "@/utils/format";

const TitleHeroInformationComponent = ({ mainPollution }) => {
  const mainPollutionInDistrict = mainPollution || "Unknown";
  const provincePath = useCurrentPathSegment(2);
  const splitCamelCastDistrictPath = splitCamelCase(provincePath);
  return (
    <div className="flex flex-col gap-1 items-start">
      <h2 className="font-bold  text-2xl lg:text-4xl">
        Air Quality In {splitCamelCastDistrictPath}
      </h2>
      <p className="text-sm lg:text-xl max-w-2xl text-start">
        Air quality index (AQI*) and {mainPollutionInDistrict} air pollution in{" "}
        {splitCamelCastDistrictPath}
      </p>
    </div>
  );
};

export default TitleHeroInformationComponent;
