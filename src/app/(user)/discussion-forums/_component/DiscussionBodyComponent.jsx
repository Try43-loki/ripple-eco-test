"use client";

import CardDiscussionComponent from "@/components/CardDiscussionComponent";
import DiscussionButtonComponent from "@/components/DiscussionButtonComponent";
import { MessageCircleQuestion } from "lucide-react";
import PostComponent from "./PostComponent";
import SearchBarComponent from "@/components/SearchBarComponent";
import CreateDiscussionComponent from "@/components/CreateDiscussionComponent";
import { useState } from "react";
import { getUserProfileService } from "@/service/auth/user-service";

const DiscussionBodyComponent = ({
  totalDiscussion,
  popularDiscussion,
  search,
  currentUserId,
}) => {
  const buttonText = "Create Discussion";
  const [open, setOpen] = useState(false);
  return (
    <main className="min-h-screen flex flex-col">
      {/* Top Search + Create Button */}
      <article className="flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-center px-6 md:px-20 lg:px-[150px] my-6 w-full">
        <SearchBarComponent
          placeholder="Search Title or Tag"
          pagePath={`/discussion-forums`}
        />
        <div onClick={() => setOpen(true)}>
          <DiscussionButtonComponent text={buttonText} />
        </div>
      </article>

      {/* Scrollable layout */}
      <article className="flex flex-1 overflow-hidden px-6 md:px-20 lg:px-[150px] gap-6">
        {/* Scrollable card list */}
        <div className="flex-1 overflow-y-auto pr-4 h-[160vh] scrollbar-hide">
          <h2 className="text-sm md:text-base lg:text-xl font-bold text-dark-green">
            {search?.length ?? totalDiscussion} Discussions
          </h2>
          <div className="w-full border-b py-2 border-lighter-white"></div>
          {search?.length > 0 ? (
            search.map((data) => (
              <div className="cursor-pointer" key={data.discussionId}>
                <CardDiscussionComponent
                  discussions={data}
                  currentUserId={currentUserId}
                />
              </div>
            ))
          ) : (
            <p className="text-red text-center w-full">No discussion found.</p>
          )}
        </div>

        {/* popular discussion */}
        <div className="hidden md:flex md:w-[350px] lg:w-[400px] sticky top-6 self-start">
          <div className="w-full p-6 border border-lighter-white bg-white rounded-[20px]">
            {/* Title + Icon */}
            <div className="flex items-center gap-2 md:gap-3">
              <h2 className="text-base md:text-lg lg:text-xl font-bold text-dark-green">
                Popular Discussion
              </h2>
              <MessageCircleQuestion className="h-4 w-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-green" />
            </div>
            {/* Subtext */}
            <p className="text-xs md:text-sm lg:text-base text-lighters-green">
              {popularDiscussion?.length} Discussions found
            </p>
            {popularDiscussion?.map((data, index) => (
              <div key={index}>
                <PostComponent popular={data} />
              </div>
            ))}
          </div>
        </div>
      </article>

      {/* Modal */}
      <CreateDiscussionComponent
        open={open}
        onOpenChange={() => setOpen(false)}
      />
    </main>
  );
};

export default DiscussionBodyComponent;
