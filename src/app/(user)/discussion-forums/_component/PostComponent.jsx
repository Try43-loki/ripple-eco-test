import React from "react";

const PostComponent = () => {
  return (
    <article className="flex flex-col w-[300px] md:w-full mt-3">
      <h2 className="truncate text-sm md:text-base lg:text-lg">
        Have you participated in river-cleanup efforts or citizen-science water
        testing?
      </h2>
      <div className="mt-2 text-xs md:text-sm lg:text-base bg-[#EDF0F3] w-fit rounded-full py-1 px-2 md:px-3">
        <p>#MekongRiver</p>
      </div>
      <div className="w-full border-b py-2 border-stroke"></div>
    </article>
  );
};

export default PostComponent;
