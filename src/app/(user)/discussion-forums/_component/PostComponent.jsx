import React from "react";
import TagComponent from "../../../../components/TagComponent";
import Link from "next/link";

const PostComponent = ({ popular }) => {
  return (
    <Link href={`/discussion-forums/${1}`}>
      <article className="flex flex-col w-full max-w-sm md:max-w-md lg:max-w-lg mt-3">
        {/* Main Question */}
        <h3 className="truncate text-sm md:text-base lg:text-lg font-medium mt-2 text-dark-green">
          {popular?.title}
        </h3>

        {/* Tag */}
        <TagComponent tagData={popular} />
      </article>
    </Link>
  );
};

export default PostComponent;
