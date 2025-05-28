import React from "react";
import { MessageCircleMore } from "lucide-react";

const CommentButtonComponent = () => {
  return (
    <article className="flex gap-2 items-center text-lighter-green mt-1 text-xs md:text-sm lg:text-base bg-lighter-white w-fit rounded-full py-1 px-3 md:px-3">
      <MessageCircleMore className="w-4 h-4" />
      <p>7 Comments</p>
    </article>
  );
};

export default CommentButtonComponent;
