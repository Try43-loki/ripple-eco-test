import CommentButtonComponent from "@/app/(user)/discussion-forums/_component/CommentButtonComponent";
import React from "react";

const TagComponent = () => {
  return (
    <main className="w-full">
      <article className="flex justify-between items-center">
        <div className="mt-1 text-xs md:text-sm lg:text-base bg-lighter-white w-fit rounded-full py-1 px-2 md:px-3">
          <p>#MekongRiver</p>
        </div>
        {/* Comment Button */}
        <CommentButtonComponent />
      </article>
      <div className="w-full border-b border-lightes-white py-2"></div>
    </main>
  );
};

export default TagComponent;
