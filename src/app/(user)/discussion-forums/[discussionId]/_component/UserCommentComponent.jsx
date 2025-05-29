import React from "react";
import { MessageCircle, Trash2, User2 } from "lucide-react";
const UserCommentComponent = ({ comments, image, onReply }) => {
  return (
    <>
      {comments.map((data) => (
        <div key={data.commentId} className="flex flex-col">
          <div className="flex py-4">
            <img
              src={image || "/assets/tree-planting.png"}
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
                        {data.appUser.firstName} {data.appUser.lastName}
                      </p>
                      <div className="flex-row w-1 h-1 md:w-1.5 md:h-1.5 lg:w-2 lg:h-2 rounded-full bg-description ml-5 mr-1"></div>
                      <span className="text-xs md:text-sm lg:text-base text-lighter-green">
                        {/* reply to <span className="font-medium">Spider Man</span> */}
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
                    {data.content}
                  </p>
                </div>

                {/* Reply and Delete */}
                <div className="flex items-center gap-4 text-xs md:text-sm lg:text-base text-lighter-green pl-1">
                  <span>{data.createdAt}</span>

                  <button
                    className="flex items-center hover:text-green transition"
                    aria-label="Comment on post"
                    onClick={() => onReply?.(data)}
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
          <div className="ml-12">
            <UserCommentComponent comments={data.commentResponses} />
          </div>
        </div>
      ))}
    </>
  );
};

export default UserCommentComponent;
