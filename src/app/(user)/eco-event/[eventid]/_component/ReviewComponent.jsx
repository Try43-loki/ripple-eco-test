import React from "react";
import { Star } from "lucide-react";
import Image from "next/image";

const ReviewComponent = () => {
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

  return (
    <article className="w-full mx-auto p-8 bg-white rounded-3xl">
      {/* Rating Summary */}
      <div className="flex items-start gap-8 md:gap-16 lg:gap-24 mb-8">
        {/* Left side - Rating bars */}
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-sm text-dark-green w-2">5</span>
            <div className="w-32 md:w-40 lg:w-48 bg-light-gray rounded-full h-2">
              <div className="bg-strong-yellow h-full rounded-full w-full" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-dark-green w-2">4</span>
            <div className="w-32 md:w-40 lg:w-48 bg-light-gray rounded-full h-2">
              <div className="bg-strong-yellow h-full rounded-full w-3/4" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-dark-green w-2">3</span>
            <div className="w-32 md:w-40 lg:w-48 bg-light-gray rounded-full h-2">
              <div className="bg-strong-yellow h-full rounded-full w-1/3" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-dark-green w-2">2</span>
            <div className="w-32 md:w-40 lg:w-48 bg-light-gray rounded-full h-2">
              <div className="bg-strong-yellow h-full rounded-full w-1/2" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-dark-green w-2">1</span>
            <div className="w-32 md:w-40 lg:w-48 bg-light-gray rounded-full h-2">
              <div className="bg-strong-yellow h-full rounded-full w-1/4" />
            </div>
          </div>
        </div>

        {/* Right side - Overall rating */}
        <div className="text-center">
          <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-dark-green mb-2">
            4.0
          </div>
          <div className="flex justify-center gap-1 mb-1">{renderStars(4)}</div>
          <div className="text-xs md:text-sm lg:text-base text-dark-green">
            5,085 reviews
          </div>
        </div>
      </div>

      {/* Volunteer's Feedback Section */}
      <div className="flex flex-col">
        <h2 className="text-sm md:text-base lg:text-lg font-semibold text-dark-green mb-3">
          Volunteer's Feedback
        </h2>

        {/* First Review */}
        <div className="flex flex-col mb-6 border p-4 rounded-2xl border-lightes-white">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-orange-800">L</span>
              </div>
              <div>
                <div className="font-medium text-dark-green text-sm md:text-base lg:text-lg">
                  Lucifer MorningStar
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs md:text-sm lg:text-lg font-medium text-lighter-green">
                    4.2
                  </span>
                  <div className="flex items-center gap-1">
                    {renderStars(4)}
                  </div>
                </div>
              </div>
            </div>
            <div className="text-xs md:text-sm lg:text-lg text-lighter-green">
              Just now
            </div>
          </div>
          <p className="text-lighter-green text-xs md:text-sm lg:text-lg leading-relaxed">
            Remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages
          </p>
        </div>

        {/* Second Review with Image */}
        <div className="border p-4 rounded-2xl border-lightes-white">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-orange-800">L</span>
              </div>
              <div>
                <div className="font-medium text-dark-green text-sm md:text-base lg:text-lg">
                  Lucifer MorningStar
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs md:text-sm lg:text-lg font-medium text-lighter-green">
                    4.0
                  </span>
                  <div className="flex gap-1">{renderStars(4)}</div>
                </div>
              </div>
            </div>
            <div className="text-xs md:text-sm lg:text-lg text-lighter-green">
              Just now
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-64 lg:w-72 flex-shrink-0 relative h-48 md:h-40">
              <Image
                src="/assets/ReviewRating.png"
                alt="Volunteers in green shirts"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="flex-1">
              <p className="text-lighter-green text-xs md:text-sm lg:text-lg leading-relaxed">
                Remaining essentially unchanged. It was popularised in the 1960s
                with the release of Letraset sheets containing Lorem Ipsum
                passages remaining essentially unchanged. It was popularised in
                the 1960s with the release of Letraset sheets containing Lorem
                Ipsum passages
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ReviewComponent;
