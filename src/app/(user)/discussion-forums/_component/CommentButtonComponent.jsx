import React from "react";
import { MessageCircleMore } from "lucide-react";

const CommentButtonComponent = ({ totalComment }) => {
  return (
    <article className="flex gap-2 items-center text-center mt-0.5 text-lighters-green text-xs bg-lighter-white w-fit rounded-full py-1 px-3 md:px-3">
      <MessageCircleMore className="w-4 h-4" />
      <p>{totalComment} Comments</p>
    </article>
  );
};

export default CommentButtonComponent;
