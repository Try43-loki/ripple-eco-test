"use client";

import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getAllFeedbacksByEcoEventId } from "@/service/ecoEventService";

const ReviewComponent = ({ operator, eventid }) => {
  const [feedbacks, setFeedbacks] = useState([]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < Math.floor(rating)
            ? "fill-strong-yellow text-strong-yellow"
            : "fill-white text-strong-yellow"
        }`}
      />
    ));
  };

  useEffect(() => {
    const fetchFeedbacks = async () => {
      const res = await getAllFeedbacksByEcoEventId(eventid);
      if (res?.data?.userFeedbackRates) {
        setFeedbacks(res.data.userFeedbackRates);
      }
    };

    fetchFeedbacks();
  }, [eventid]);

  return (
    <article className="w-full mx-auto p-8 bg-white rounded-3xl">
      {/* Rating Summary */}
      <div className="flex items-start gap-8 md:gap-16 lg:gap-24 mb-8">
        {/* Left side - Placeholder Rating bars */}
        <div className="space-y-1">
          {/* Example bars — You can later calculate based on feedback */}
          {[5, 4, 3, 2, 1].map((rating, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="text-sm text-dark-green w-2">{rating}</span>
              <div className="w-32 md:w-40 lg:w-48 bg-light-gray rounded-full h-2">
                <div
                  className={`bg-strong-yellow h-full rounded-full w-${
                    rating === 5
                      ? "full"
                      : rating === 4
                      ? "3/4"
                      : rating === 3
                      ? "1/3"
                      : rating === 2
                      ? "1/2"
                      : "1/4"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Right side - Example Overall rating */}
        <div className="text-center">
          <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-dark-green mb-2">
            4.0
          </div>
          <div className="flex justify-center gap-1 mb-1">{renderStars(4)}</div>
          <div className="text-xs md:text-sm lg:text-base text-dark-green">
            {feedbacks.length} reviews
          </div>
        </div>
      </div>

      {/* Volunteer's Feedback Section */}
      <div className="flex flex-col">
        <h2 className="text-sm md:text-base lg:text-lg font-semibold text-dark-green mb-3">
          Volunteer's Feedback
        </h2>

        {feedbacks.length === 0 ? (
          <p className="text-lighter-green text-xs md:text-sm lg:text-lg">
            No feedbacks yet.
          </p>
        ) : (
          feedbacks.map((feedback, index) => (
            <div
              key={index}
              className="flex flex-col mb-6 border p-4 rounded-2xl border-lightes-white"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Link
                    href={
                      operator == "organizer"
                        ? `/organizer/view-profile/volunteer/${feedback.user.appUserId}`
                        : `/view-profile/volunteer/${feedback.user.appUserId}`
                    }
                  >
                    {/* Profile image */}
                    {feedback.user.profileImageUrl ? (
                      <Image
                        src={feedback.user.profileImageUrl}
                        width={40}
                        height={40}
                        alt={`${feedback.user.firstName} ${feedback.user.lastName}`}
                        className="rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium text-orange-800">
                          {feedback.user.firstName?.[0] ?? "U"}
                        </span>
                      </div>
                    )}
                  </Link>

                  <div>
                    <div className="font-medium text-dark-green text-sm md:text-base lg:text-lg">
                      {feedback.user.firstName} {feedback.user.lastName}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs md:text-sm lg:text-lg font-medium text-lighter-green">
                        {feedback.overallRating}
                      </span>
                      <div className="flex items-center gap-1">
                        {renderStars(feedback.overallRating)}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-xs md:text-sm lg:text-lg text-lighter-green">
                  Just now
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                {feedback.image && (
                  <div className="md:w-64 lg:w-72 flex-shrink-0 relative h-48 md:h-40">
                    <Image
                      src={feedback.image}
                      alt="Feedback image"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                )}
                <div className="flex-1">
                  <p className="text-lighter-green text-xs md:text-sm lg:text-lg leading-relaxed">
                    {feedback.feedback}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </article>
  );
};

export default ReviewComponent;
