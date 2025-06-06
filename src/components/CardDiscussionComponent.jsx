import React from "react";
import TagComponent from "./TagComponent";
import Image from "next/image";
import TagCardComponent from "@/app/(user)/discussion-forums/_component/TagCardComponent";
import { getDiscussionById } from "@/service/discussionService";
import { useTimeFormat } from "@/hooks/dayjs";

const CardDiscussionComponent = ({ discussions }) => {
  const formatTime = useTimeFormat();
  return (
    <div className="w-full mt-8 space-y-8">
      <article className="w-full">
        <div className="flex flex-col items-start gap-4">
          <div className="flex gap-4">
            {/* Avatar */}
            {discussions?.appUser?.profileImageUrl && (
              <div className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 rounded-full bg-gray-300 relative overflow-hidden">
                <Image
                  src={discussions?.appUser?.profileImageUrl}
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {/* User Info */}
            <div className="flex flex-col justify-start">
              <h2 className="text-sm md:text-base lg:text-lg font-semibold text-dark-green">
                {discussions?.appUser?.firstName}{" "}
                {discussions?.appUser?.lastName}
              </h2>
              <p className="text-xs md:text-sm lg:text-base text-lighters-green">
                {formatTime(discussions?.createdAt)}
              </p>
            </div>
          </div>

          {/* Card Details */}
          <div className="w-full">
            <h2 className="text-base md:text-lg lg:text-xl font-semibold text-dark-green">
              {discussions?.title}
            </h2>
            <p className="text-xs md:text-sm lg:text-base text-lighters-green mt-2">
              {discussions?.description}
            </p>

            {/* Image */}
            {discussions?.image && (
              <img
                src={discussions?.image}
                alt="discussion visual"
                className="w-full h-72 mt-4 rounded-xl object-cover"
              />
            )}

            {/* Tags */}
            <div className="flex justify-between mt-4">
              <TagCardComponent
                tags={discussions?.tag}
                counts={discussions?.commentCount}
              />
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default CardDiscussionComponent;
