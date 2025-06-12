// "use client";
// import React, { use, useState } from "react";
// import { MessageCircle, Trash2, User2, SendHorizonal, X } from "lucide-react";
// import UserCommentComponent from "./UserCommentComponent";
// import { useCommentSocket } from "../../../../../../socket/socket";
// import { sendCommentAction } from "@/action/NotificationAction";

// const CommentComponent = ({ discussions }) => {
//   const [commentInputs, setCommentInputs] = useState("");
//   const [commentId, setCommentId] = useState();
//   const [replyTarget, setReplyTarget] = useState(null);
//   const [showInputComment, setShowInputComment] = useState(false);
//   const postOwner = discussions?.data?.appUser?.appUserId;

//   const { comments, addComment, updateComment } = useCommentSocket(
//     discussions.data?.discussionId
//   );
//   const handleReply = (comment) => {
//     setReplyTarget(comment);
//     setCommentId(comment?.commentId);
//   };

//   const handleInputChange = (value) => {
//     setCommentInputs(value);
//     // setShowInputComment(true);
//     // console.log("showInputComment", showInputComment);
//   };

//   const handleAddComment = () => {
//     const input = commentInputs;
//     if (input) {
//       const commentDetail = {
//         content: input,
//         commentRepliedToId: commentId,
//         userId: "1cc41c34-9ed8-4b61-8825-2b6370bfd2ea",
//       };
//       addComment(commentDetail);
//       setCommentInputs("");
//       setReplyTarget(null);
//       sendCommentAction("add");
//     }
//   };

//   // const handleUpdateComment = (discussionId, commentId, updateComment) => {
//   //   const input = commentInputs[discussionId]?.trim();
//   //   let comment = {
//   //     commentId: commentId,
//   //     content: input,
//   //   };

//   //   if (input) {
//   //     updateComment(comment);
//   //     setCommentInputs((prev) => ({
//   //       ...prev,
//   //       [data.discussionId]: "",
//   //     }));
//   //   }
//   // };
//   return (
//     <main className="w-full mt-4">
//       <article className="flex-col gap-4">
//         <article className="flex flex-col">
//           <h2 className="text-dark-gray font-semibold">
//             {discussions?.data?.commentCount} Comments
//           </h2>
//           {/* User Comment Section */}
//           <UserCommentComponent
//             comments={comments}
//             onReply={handleReply}
//             postOwner={postOwner}
//           />

//           {/* Reply Box */}
//           <div className="flex flex-col mt-10">
//             {/* Reply Header */}
//             {replyTarget && (
//               <div className="py-4 px-4 md:px-6 bg-lighter-white rounded-t-2xl border-b border-b-lightes-white flex justify-between items-center">
//                 <p className="text-xs md:text-sm text-lighter-green">
//                   Replying to {replyTarget?.appUser?.firstName}{" "}
//                   {replyTarget?.appUser?.lastName}
//                 </p>
//                 <button
//                   onClick={() => {
//                     setReplyTarget(null);
//                     setCommentInputs("");
//                   }}
//                   className="flex w-8 h-8 md:w-9 md:h-9 bg-meduim-gray items-center justify-center rounded-full"
//                 >
//                   <X className="w-4 h-4 md:w-5 md:h-5 text-white" />
//                 </button>
//               </div>
//             )}

//             {/* Input + Send Button */}
//             <div className="rounded-b-2xl border border-lightes-white flex items-center px-4 md:px-6 py-3 bg-white gap-3">
//               <input
//                 type="text"
//                 value={commentInputs || ""}
//                 onChange={(e) => handleInputChange(e.target.value)}
//                 placeholder="Comments here"
//                 className="flex-1 text-xs md:text-sm lg:text-base placeholder:text-lighter-green focus:outline-none"
//               />
//               <button
//                 onClick={handleAddComment}
//                 className="flex w-8 h-8 md:w-9 md:h-9 bg-green items-center justify-center rounded-full"
//               >
//                 <SendHorizonal className="w-4 h-4 md:w-5 md:h-5 text-white" />
//               </button>
//             </div>
//           </div>
//         </article>
//       </article>
//     </main>
//   );
// };

// export default CommentComponent;
