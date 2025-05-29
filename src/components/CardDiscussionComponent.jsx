import React from "react";
import TagComponent from "./TagComponent";

const CardDiscussionComponent = ({ image }) => {
  return (
    <article className="w-full mt-8">
      <div className="flex flex-col items-start gap-4">
        <div className="flex gap-4">
          {/* Avatar */}
          <div className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 rounded-full bg-gray-300"></div>

          {/* User Info */}
          <div className="flex flex-col justify-start">
            <h2 className="text-sm md:text-base lg:text-lg font-semibold text-dark-green">
              Sochetra
            </h2>
            <p className="text-xs md:text-sm lg:text-base text-lighter-green">
              8:00 PM
            </p>
          </div>
        </div>
        {/* Card Details */}
        <div className="w-full">
          <h2 className="text-base md:text-lg lg:text-xl font-semibold text-dark-green">
            Have you participated in river-cleanup efforts or citizen-science
            water testing?
          </h2>
          <p className="text-xs md:text-sm lg:text-base text-lighter-green mt-2">
            These hands-on initiatives empower locals to remove debris, monitor
            pollution levels, and contribute valuable data to guide river
            conservation.
          </p>

          {/* Image */}
          {image && (
            <img
              src={image}
              alt="discussion visual"
              className="w-full mt-4 rounded-xl object-cover"
            />
          )}
          {/* <Image src={`${image}`} width={100} height={100}></Image> */}
          {/* Tag */}
          <div className="flex justify-between mt-4">
            <TagComponent />
          </div>
        </div>
      </div>
    </article>
  );
};

export default CardDiscussionComponent;
