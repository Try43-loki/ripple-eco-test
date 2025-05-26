import React from "react";
import DiscussionButtonComponent from "../../discussion-forums/_component/DiscussionButtonComponent";

const TakeActionSectionComponent = () => {
  const btnTakeAction = "Call to Action";
  return (
    <div>
      <section className="w-full py-16 px-6 md:px-20 lg:px-45 flex flex-col lg:flex-row bg-white">
        {/* Left Side Vertical Bar (only on large screens) */}
        <div className="hidden lg:block w-[100px] bg-white">
          <div className="w-full h-[140px] bg-primary"></div>
        </div>

        {/* Content Wrapper */}
        <div className="w-full flex flex-col lg:flex-row flex-wrap items-center lg:items-start bg-[#F6F6EE] pb-8 px-0 rounded-2xl">
          <img
            src="/assets/TakeActionSection.jpg"
            alt="Take action image"
            className="w-full max-w-full lg:w-[50%] object-cover rounded-tr-2xl rounded-br-2xl"
          />
          <div className="flex flex-col w-full lg:w-[50%] mt-8 px-4 md:px-8 lg:pl-10 z-10 text-center lg:text-left">
            <p className="text-primary text-base md:text-lg lg:text-xl">
              TAKE ACTION
            </p>
            <h2 className="text-title text-2xl md:text-3xl lg:text-4xl font-bold">
              Change Starts With You Take the First Green Step
            </h2>
            <p className="text-description text-xs md:text-sm lg:text-base mt-2">
              Every pledge adds up. Commit to eco-action and help build a
              sustainable tomorrow.
            </p>
            <div className="mt-6">
              <DiscussionButtonComponent text={btnTakeAction} />
            </div>
          </div>
        </div>

        {/* Right Side Vertical Bar (only on large screens) */}
        <div className="hidden lg:block w-[100px] bg-white">
          <div className="w-full h-[140px] bg-primary"></div>
        </div>
      </section>
    </div>
  );
};

export default TakeActionSectionComponent;
