import React from "react";
import Image from "next/image";
import DiscussionButtonComponent from "../../discussion-forums/_component/DiscussionButtonComponent";

const DiscussionSectionComponent = () => {
  const btnDiscussion = "Start Discussion";
  return (
    <div>
      <section className="w-full py-16 px-6 md:px-20 lg:px-45 flex bg-white ">
        <div className="flex flex-col md:flex-col lg:flex-row  items-center  ">
          <div className="flex-col w-full lg:mr-20 ">
            <p className="text-green text-base md:text-xl lg:text-2xl mb-2">
              DISCUSSION
            </p>
            <h2 className="text-dark-green text-2xl md:text-3xl lg:text-4xl font-bold">
              Green Conversations For a Cleaner Tomorrow
            </h2>
            <p className="text-light-green text-sm md:text-base lg:text-lg mt-2 ">
              Share ideas, explore solutions, and connect with others driving
              environmental change.
            </p>
            <div className="my-6">
              <DiscussionButtonComponent text={btnDiscussion} />
            </div>
          </div>
          <div className="mt-5">
            <Image
              src="/assets/DiscussionSection.jpg"
              alt="Discussion Image"
              width={1000}
              height={500}
              className="rounded-tl-2xl rounded-bl-2xl"
            ></Image>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DiscussionSectionComponent;
