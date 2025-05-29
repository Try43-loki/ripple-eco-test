import React from "react";
import Image from "next/image";
import DiscussionButtonComponent from "@/components/DiscussionButtonComponent";
import Link from "next/link";

const TakeActionSectionComponent = () => {
  const btnTakeAction = "Call to Action";
  return (
    <div>
      <section className="w-full py-16 px-6 md:px-20 lg:px-45 flex flex-col lg:flex-row bg-white">
        {/* Left Side Vertical Bar (only on large screens) */}
        <div className="hidden lg:block w-[100px] bg-white">
          <div className="w-full h-[180px] bg-green"></div>
        </div>

        {/* Content Wrapper */}
        <div className="w-full flex flex-col lg:flex-col xl:flex-row items-center lg:items-start bg-[#F6F6EE] pb-8 px-0 rounded-2xl">
          <Image
            src="/assets/homepage/TakeActionSection.jpg"
            alt="Take action image"
            width={500}
            height={500}
            className="w-full max-w-full xl:w-[50%] object-cover rounded-tr-2xl rounded-br-2xl"
          ></Image>
          <div className="flex flex-col w-full xl:w-[50%] mt-8 px-4 md:px-8 lg:pl-10 z-10 text-left">
            <p className="text-green text-base md:text-xl lg:text-2xl mb-2">
              TAKE ACTION
            </p>
            <h2 className="text-dark-green text-2xl md:text-3xl lg:text-4xl font-bold">
              Change Starts With You Take the First Green Step
            </h2>
            <p className="text-light-green text-sm md:text-base lg:text-lg mb-4 lg:mb-6 mt-2">
              Every pledge adds up. Commit to eco-action and help build a
              sustainable tomorrow.
            </p>
            <Link href="/take-action">
              <DiscussionButtonComponent text={btnTakeAction} />
            </Link>
          </div>
        </div>

        {/* Right Side Vertical Bar (only on large screens) */}
        <div className="hidden lg:block w-[100px] bg-white">
          <div className="w-full h-[180px] bg-green"></div>
        </div>
      </section>
    </div>
  );
};

export default TakeActionSectionComponent;
