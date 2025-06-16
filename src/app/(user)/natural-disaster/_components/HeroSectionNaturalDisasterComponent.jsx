import Image from "next/image";
import React from "react";
import CardCurrentDisasterComponent from "./CardCurrentDisasterComponent";

const HeroSectionNaturalDisasterComponent = ({ naturalData }) => {
  return (
    <React.Fragment>
      <Image
        src="/assets/sub-banner.jpg"
        alt="sub-banner"
        fill
        className="object-cover"
      />
      <div className="absolute w-full mt-20 px-6 lg:px-[180px]  text-white text-center lg:flex-row lg:justify-between ">
        <article className="flex flex-col-reverse gap-10 lg:flex-row ">
          {/* Title */}
          <div className="flex flex-col  justify-center items-start gap-8 w-full">
            <div className="flex flex-col gap-1 items-start">
              <h2 className="font-bold  text-2xl lg:text-4xl">
                Natural Disaster
              </h2>
              <p className="text-sm lg:text-xl max-w-xl">
                Monitor And Track Natural Disaster
              </p>
            </div>
          </div>

          {/* Current Cards Disaster*/}
          <div className="flex flex-col items-end gap-1.5 w-auto">
            <h2 className="text-sm lg:text-xl max-w-xl self-start">
              Current Disaster
            </h2>
            <div className="flex justify-between gap-3">
              <CardCurrentDisasterComponent naturalData={naturalData} />
            </div>
          </div>
        </article>
      </div>
    </React.Fragment>
  );
};

export default HeroSectionNaturalDisasterComponent;
