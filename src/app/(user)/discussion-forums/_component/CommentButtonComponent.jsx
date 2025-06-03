import React from "react";
import { MessageCircleMore } from "lucide-react";

const CommentButtonComponent = ({ commentsCount }) => {
  return (
    <article className="flex gap-2 items-center text-lighters-green mt-1 text-xs md:text-sm lg:text-sm bg-lighter-white w-fit rounded-full py-1 px-3 md:px-3">
      <MessageCircleMore className="w-4 h-4" />
      <p>{commentsCount} Comments</p>
    </article>
  );
};

export default CommentButtonComponent;
