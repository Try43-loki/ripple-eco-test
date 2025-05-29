"use client";
import { useCommentSocket } from "@/socket/socket";
import React, { useState } from "react";

const DiscussionCard = ({ res }) => {
  const [commentInputs, setCommentInputs] = useState({});

  const formattedDate = (date) => new Date(date).toLocaleString();

  const handleInputChange = (discussionId, value) => {
    setCommentInputs((prev) => ({
      ...prev,
      [discussionId]: value,
    }));
  };

  const handleAddComment = (discussionId, addComment) => {
    const input = commentInputs[discussionId]?.trim();
    if (input) {
      addComment(input);
      setCommentInputs((prev) => ({
        ...prev,
        [discussionId]: "",
      }));
    }
  };

  const handleUpdateComment = (discussionId, commentId, updateComment) => {
    const input = commentInputs[discussionId]?.trim();
    let comment = {
      commentId: commentId,
      content: input,
    };

    console.log("input", comment);

    if (input) {
      updateComment(comment);
      setCommentInputs((prev) => ({
        ...prev,
        [discussionId]: "",
      }));
    }
  };

  return (
    <>
      {res?.map((data) => {
        const { comments, addComment, updateComment } = useCommentSocket(
          data.discussionId
        );

        return (
          <div key={data.discussionId} className="mb-6">
            <div className="border rounded-md p-4 shadow-md max-w-md mx-auto bg-white">
              <h2 className="text-xl font-bold mb-1">
                {data.title || "Untitled"}
              </h2>
              <p className="text-sm text-gray-500 mb-3">Tag: {data.tag}</p>

              {data.image ? (
                <img
                  src={data.image}
                  alt="Discussion Image"
                  className="w-full h-auto rounded mb-3"
                />
              ) : (
                <div className="w-full h-40 bg-gray-200 flex items-center justify-center mb-3 rounded">
                  <span className="text-gray-500">No image available</span>
                </div>
              )}

              <p className="mb-3">{data.description}</p>
              <div className="text-xs text-gray-400">
                Created at: {formattedDate(data.createdAt)}
              </div>
            </div>

            <div className="flex items-center justify-center mt-4">
              <div className="w-full max-w-md">
                <h3 className="text-md font-semibold mb-2">Comments</h3>
                {comments.length === 0 ? (
                  <p className="text-sm text-gray-500">No comments yet.</p>
                ) : (
                  <ul className="mb-3 space-y-2">
                    {comments.map((comment, index) => (
                      <li
                        key={index}
                        className="flex justify-between bg-gray-100 p-2 rounded text-sm"
                      >
                        {comment.content}

                        <button
                          className="p-4 bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600"
                          onClick={() =>
                            handleUpdateComment(
                              data.discussionId,
                              comment.commentId,
                              updateComment
                            )
                          }
                        >
                          Update
                        </button>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={commentInputs[data.discussionId] || ""}
                    onChange={(e) =>
                      handleInputChange(data.discussionId, e.target.value)
                    }
                    placeholder="Write a comment..."
                    className="flex-1 p-2 border rounded text-sm"
                  />
                  <button
                    onClick={() =>
                      handleAddComment(data.discussionId, addComment)
                    }
                    className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600"
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default DiscussionCard;
