"use client";
import CardDiscussionComponent from "@/components/CardDiscussionComponent";
import DiscussionButtonComponent from "@/components/DiscussionButtonComponent";
import { MessageCircleQuestion } from "lucide-react";
import PostComponent from "./PostComponent";
import SearchBarComponent from "@/components/SearchBarComponent";
import Link from "next/link";
import CreateDiscussionComponent from "@/components/CreateDiscussionComponent";
import { useState } from "react";

const DiscussionBodyComponent = ({
  discussionData,
  totalDiscussion,
  popularDiscussion,
}) => {
  const buttonText = "Create Discussion";
  const [open, setOpen] = useState(false);
  return (
    <main>
      <article className="flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-center px-6 md:px-20 lg:px-[150px] my-6 w-full">
        <SearchBarComponent placeholder="Search Title or Tag" />
        <div onClick={() => setOpen(true)}>
          <DiscussionButtonComponent text={buttonText} />
        </div>
      </article>

      <article className="flex flex-col w-full px-6 md:px-20 lg:px-[150px] md:flex-row lg:flex-row">
        <div className="w-full flex-col">
          <h2 className="text-sm md:text-base lg:text-xl font-bold text-dark-green">
            {totalDiscussion} Discussions
          </h2>
          <div className="w-full border-b py-2 border-lighter-white"></div>
          {discussionData?.map((data) => (
            <Link
              href={`/discussion-forums/${data.discussionId}`}
              key={data.discussionId}
            >
              <CardDiscussionComponent discussions={data} />
            </Link>
          ))}
        </div>
        {/* Centered Post Components */}
        <div className="flex justify-center mt-6 h-fit md:ml-7 lg:ml-7">
          <div className="w-full md:w-[350px] lg:w-[400px] p-6 border border-lighter-white bg-white rounded-[20px]">
            {/* Title + Icon */}
            <div className="flex items-center gap-2 md:gap-3">
              <h2 className="text-base md:text-lg lg:text-xl font-bold text-dark-green">
                Popular Discussion
              </h2>
              <MessageCircleQuestion className="h-4 w-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-green" />
            </div>
            {/* Subtext */}
            <p className="text-xs md:text-sm lg:text-base text-lighters-green">
              10 Discussions found
            </p>
            {popularDiscussion?.map((data, index) => (
              <div key={index}>
                <PostComponent popular={data} />
              </div>
            ))}
          </div>
        </div>
      </article>
      {/* Create Discussion Modal */}
      <CreateDiscussionComponent
        open={open}
        onOpenChange={() => setOpen(false)}
      />
    </main>
  );
};

export default DiscussionBodyComponent;
