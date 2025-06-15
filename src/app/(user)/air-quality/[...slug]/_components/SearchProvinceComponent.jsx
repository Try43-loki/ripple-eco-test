import React from "react";
import MultiSelectDropdown from "./MultiSelectDropdownComponent";
import TitleHeroInformationComponent from "./TitleHeroInformationComponent";
import { getAllDistricts } from "@/service/airQualityService";

const SearchProvinceComponent = async ({ mainPollution }) => {
  const districtList = await getAllDistricts();
  return (
    <div className="flex flex-col gap-8 w-full justify-between">
      <TitleHeroInformationComponent mainPollution={mainPollution} />
      <div className="w-2xl text-dark-gray ">
        <MultiSelectDropdown districtList={districtList} />
      </div>
    </div>
  );
};

export default SearchProvinceComponent;
