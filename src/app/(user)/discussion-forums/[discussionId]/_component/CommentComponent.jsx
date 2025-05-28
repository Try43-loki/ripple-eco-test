"use client";
import React, { useState } from "react";
import { MessageCircle, Trash2, User2, SendHorizonal, X } from "lucide-react";

const CommentComponent = ({ image }) => {
  const [Comment, UseComment] = useState([]);

  return (
    <main className="w-full mt-4">
      <article className="flex-col gap-4">
        {/* User Avatar */}
        <div className="flex ">
          <img
            src={image || "/tree-planting.png"}
            alt="User avatar"
            className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 rounded-full object-cover"
          />
          {/* Post Content */}
          <div className="flex-1 ml-5">
            <div className="flex flex-col space-y-2">
              {/* Comment Box */}
              <div className="py-2 px-3 md:py-3 md:px-4 bg-lighter-white rounded-2xl">
                <div className="flex flex-wrap items-center justify-between">
                  {/* Left: Name and reply info */}
                  <div className="flex flex-wrap items-center gap-1">
                    <p className="text-sm md:text-base lg:text-lg font-semibold text-dark-green">
                      Spider Man
                    </p>
                    <div className="flex-row w-1 h-1 md:w-1.5 md:h-1.5 lg:w-2 lg:h-2 rounded-full bg-description ml-5 mr-1"></div>
                    <span className="text-xs md:text-sm lg:text-base text-lighter-green">
                      reply to <span className="font-medium">Spider Man</span>
                    </span>
                  </div>

                  {/* Right: Owner label */}
                  <div className="flex items-center gap-1 text-xs md:text-sm lg:text-base text-lighter-green">
                    <User2 className="h-4 w-4" />
                    <span>Owner</span>
                  </div>
                </div>

                {/* Comment Text */}
                <p className="text-xs md:text-sm lg:text-base text-lighter-green mt-1">
                  The effects of climate change are becoming more evident each
                  year.
                </p>
              </div>

              {/* Reply and Delete */}
              <div className="flex items-center gap-4 text-xs md:text-sm lg:text-base text-lighter-green pl-1">
                <span>6hrs</span>

                <button
                  className="flex items-center hover:text-green transition"
                  aria-label="Comment on post"
                >
                  <MessageCircle className="h-4 w-4 lg:h-5 lg:w-5" />
                </button>

                <button
                  className="flex items-center hover:text-red transition"
                  aria-label="Delete post"
                >
                  <Trash2 className="h-4 w-4 lg:h-5 lg:w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Reply Box */}
        <div className="flex flex-col mt-10">
          {/* Replying to Header */}
          <div className="py-4 px-4 md:px-6 bg-lighter-white rounded-t-2xl border-b border-b-lightes-white flex justify-between items-center">
            <p className="text-xs md:text-sm text-lighter-green">
              Replying to Sochetra
            </p>
            <button className="flex w-8 h-8 md:w-9 md:h-9 bg-meduim-gray items-center justify-center rounded-full">
              <X className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </button>
          </div>

          {/* Input + Send Button */}
          <div className="rounded-b-2xl border border-lightes-white flex items-center px-4 md:px-6 py-3 bg-white gap-3">
            <input
              type="text"
              placeholder="Comments here"
              className="flex-1 text-xs md:text-sm lg:text-base placeholder:text-lighter-green focus:outline-none"
            />
            <button className="flex w-8 h-8 md:w-9 md:h-9 bg-green items-center justify-center rounded-full">
              <SendHorizonal className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </button>
          </div>
        </div>
      </article>
    </main>
  );
};

export default CommentComponent;
