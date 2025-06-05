import CommentButtonComponent from "@/app/(user)/discussion-forums/_component/CommentButtonComponent";
import React from "react";

const TagComponent = ({ tagData }) => {
  return (
    <main className="w-full">
      <article className="flex justify-between">
        <article className="flex justify-start items-center gap-4 flex-wrap">
          {tagData?.map((data, index) => (
            <div
              key={index}
              className="mt-1 text-xs bg-lighter-white w-fit rounded-full py-1 px-2 md:px-3"
            >
              <p>{data}</p>
            </div>
          ))}
          {/* Comment Button */}
        </article>
      </article>
      <div className="w-full border-b border-lightes-white py-2"></div>
    </main>
  );
};

export default TagComponent;
