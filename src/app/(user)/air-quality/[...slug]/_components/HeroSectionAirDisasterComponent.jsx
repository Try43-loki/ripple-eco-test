import Image from "next/image";
import React from "react";
import CardInformationAQIComponent from "./CardInformationAQIComponent";
import SearchProvinceComponent from "./SearchProvinceComponent";

const HeroSectionAirDisasterComponent = async ({ provinceData }) => {
  return (
    <React.Fragment>
      <Image
        src="/assets/sub-banner.jpg"
        alt="sub-banner"
        fill
        className="object-cover"
      />
      <div className="absolute w-full px-6 lg:px-[180px] mt-20 text-white text-center lg:flex-row lg:justify-between ">
        <article className="flex flex-col-reverse gap-10 lg:flex-row">
          <SearchProvinceComponent
            mainPollution={provinceData?.mainPollution}
          />
          <div className="flex-shrink-0">
            <CardInformationAQIComponent provinceData={provinceData} />
          </div>
        </article>
      </div>
    </React.Fragment>
  );
};

export default HeroSectionAirDisasterComponent;
