import { MessageCircleQuestion } from "lucide-react";
import React from "react";
import TagComponent from "../../../../components/TagComponent";

const PostComponent = () => {
  return (
    <article className="flex flex-col w-full max-w-sm md:max-w-md lg:max-w-lg mt-3">
      {/* Title + Icon */}
      <div className="flex items-center gap-2 md:gap-3">
        <h2 className="text-base md:text-lg lg:text-xl font-bold text-dark-green">
          Popular Discussion
        </h2>
        <MessageCircleQuestion className="h-4 w-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-green" />
      </div>

      {/* Subtext */}
      <p className="text-xs md:text-sm lg:text-base text-lighter-green">
        10 Discussions found
      </p>

      {/* Main Question */}
      <h3 className="truncate text-sm md:text-base lg:text-lg font-medium mt-2 text-dark-green">
        Have you participated in river-cleanup efforts or citizen-science water
        testing?
      </h3>

      {/* Tag */}
      <TagComponent />
    </article>
  );
};

export default PostComponent;
