"use client";
import React, { useState } from "react";
import { MessageCircle, Trash2, User2, SendHorizonal, X } from "lucide-react";
import UserCommentComponent from "./UserCommentComponent";
import { useCommentSocket } from "../../../../../../socket/socket";

const CommentComponent = ({ discussions }) => {
  const [commentInputs, setCommentInputs] = useState("");
  const [replyTarget, setReplyTarget] = useState(null);

  const { comments, addComment, updateComment } = useCommentSocket(
    discussions.data.discussionId
  );

  const formattedDate = (date) => new Date(date).toLocaleString();

  const handleReply = (comment) => {
    setReplyTarget(comment);
    setCommentInputs(`@${comment.appUser.firstName} `); // Optional prefill
  };

  const handleInputChange = (value) => {
    setCommentInputs(value);
  };

  const handleAddComment = () => {
    const input = commentInputs;
    if (input) {
      const commentDetail = {
        content: input,
        commentRepliedToId: "efdc3d4f-e951-41ea-a4fa-15f1273cfcf1",
        userId: "bc3f154f-a06c-4f30-829e-9e335f71a497",
      };
      console.log(commentDetail);
      addComment(commentDetail);
      setCommentInputs("");
      setReplyTarget(null);
    }
  };

  // const handleUpdateComment = (discussionId, commentId, updateComment) => {
  //   const input = commentInputs[discussionId]?.trim();
  //   let comment = {
  //     commentId: commentId,
  //     content: input,
  //   };

  //   if (input) {
  //     updateComment(comment);
  //     setCommentInputs((prev) => ({
  //       ...prev,
  //       [data.discussionId]: "",
  //     }));
  //   }
  // };
  return (
    <main className="w-full mt-4">
      <article className="flex-col gap-4">
        {/* User Comment Section */}
        <UserCommentComponent comments={comments} onReply={handleReply} />

        {/* Reply Box */}
        <div className="flex flex-col mt-10">
          {/* Replying to Header */}
          <div className="py-4 px-4 md:px-6 bg-lighter-white rounded-t-2xl border-b border-b-lightes-white flex justify-between items-center">
            <p className="text-xs md:text-sm text-lighter-green">
              Replying to Sochetra
            </p>
            <button
              onClick={() => {
                setReplyTarget(null);
                setCommentInputs("");
              }}
              className="flex w-8 h-8 md:w-9 md:h-9 bg-meduim-gray items-center justify-center rounded-full"
            >
              <X className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </button>
          </div>

          {/* Input + Send Button */}
          <div className="rounded-b-2xl border border-lightes-white flex items-center px-4 md:px-6 py-3 bg-white gap-3">
            <input
              type="text"
              value={commentInputs || ""}
              onChange={(e) => handleInputChange(e.target.value)}
              placeholder="Comments here"
              className="flex-1 text-xs md:text-sm lg:text-base placeholder:text-lighter-green focus:outline-none"
            />
            <button
              onClick={handleAddComment}
              className="flex w-8 h-8 md:w-9 md:h-9 bg-green items-center justify-center rounded-full"
            >
              <SendHorizonal className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </button>
          </div>
        </div>
      </article>
    </main>
  );
};

export default CommentComponent;
