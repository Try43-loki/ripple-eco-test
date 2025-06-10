import React from "react";
import TagComponent from "../../../../components/TagComponent";
import { cn } from "@/lib/utils";
import Image from "next/image";
const DiscussionCardComponent = ({ image, fullWidth }) => {
  return (
    <article
      className={cn("py-4 bg-white", fullWidth ? "w-full" : "max-w-md mx-auto")}
    >
      <div className="flex flex-col items-start gap-4 border border-light-white py-3 px-4 rounded-2xl">
        {/* User Info */}
        <div className="flex gap-4">
          <Image
            alt="business_main"
            src="/assets/overivew_images/business_main.jpg"
            width={100}
            height={100}
            className="object-cover object-top md:h-12 md:w-12 lg:h-14 lg:w-14 rounded-full bg-gray-300"
          ></Image>
          <div className="flex flex-col justify-start">
            <h2 className="text-sm md:text-base lg:text-lg font-semibold text-dark-green">
              Sochetra
            </h2>
            <p className="text-xs md:text-sm lg:text-base text-lighters-green">
              8:00 PM
            </p>
          </div>
        </div>

        {/* Card Details */}
        <div className="w-full">
          <h2 className="text-base md:text-lg lg:text-xl font-semibold text-dark-green wrap-break-word">
            Have you participated in river-cleanup efforts or citizen-science
            water testing?
          </h2>
          <p className="text-xs md:text-sm lg:text-base text-lighters-green mt-2 wrap-break-word">
            These hands-on initiatives empower locals to remove debris, monitor
            pollution levels, and contribute valuable data to guide river
            conservation.
          </p>

          {/* Image */}
          {image && (
            <img
              src={image}
              alt="discussion visual"
              className="w-full h-[200px] mt-4 rounded-xl object-cover"
            />
          )}

          {/* Tag */}
          <div className="flex justify-between mt-4">
            <TagComponent />
          </div>
        </div>
      </div>
    </article>
  );
};

export default DiscussionCardComponent;
