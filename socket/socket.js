"use client";
import { Client } from "@stomp/stompjs";
import { useEffect, useRef, useState } from "react";
import SockJS from "sockjs-client";

export const useCommentSocket = (postId) => {
  const [comments, setComments] = useState([]);
  const clientRef = useRef(null);

  useEffect(() => {
    if (!postId) return;

    const client = new Client({
      brokerURL: undefined, // SockJS fallback
      webSocketFactory: () => new SockJS("http://34.101.216.70:8883/comment"),
      reconnectDelay: 5000, // auto reconnect
      connectHeaders: {
        discussionId: postId, // The discussion you're viewing
        userId: "0323694b-27a6-4833-bd49-f3d96d800abc",
      },

      onConnect: () => {
        client.subscribe("/topic/comments/" + postId, (message) => {
          const parsed = JSON.parse(message.body);
          // console.log("comment ", parsed);

          if (Array.isArray(parsed)) {
            // Initial fetch
            setComments(parsed);
          } else {
            setComments((prev) => {
              const index = prev.findIndex(
                (c) => c.commentId === parsed.commentId
              );
              if (index !== -1) {
                // 🔁 Replace existing comment
                const updated = [...prev];
                updated[index] = parsed;
                console.log("update ", updated);

                return updated;
              } else {
                // ➕ Add as new comment
                return [...prev, parsed];
              }
            });
          }
          // console.log(parsed);
        });
        // client.publish({ destination: "/app/fetch-comments." + postId });
      },
      onStompError: (frame) => {
        console.error("Broker error:", frame.headers["message"]);
      },
      onWebSocketError: (err) => {
        console.error("WebSocket error:", err);
      },
    });

    client.activate();
    clientRef.current = client;

    return () => {
      client.deactivate();
    };
  }, [postId]);

  const addComment = (content) => {
    const client = clientRef.current;
    if (client && client.connected && content) {
      client.publish({
        destination: `/app/${postId}.comment.add`,
        body: JSON.stringify(content),
      });
    }
  };

  const updateComment = (commentData) => {
    const client = clientRef.current;
    if (client && client.connected && commentData) {
      const comment = {
        commentId: commentData.commentId,
        content: commentData.content,
      };
      client.publish({
        destination: `/app/${postId}.comment.update`,
        body: JSON.stringify(comment),
      });
    }
  };

  return { comments, addComment, updateComment };
};

function insertCommentInTree(comments, newComment) {
  return comments.map((comment) => {
    if (comment.commentId === newComment.commentRepliedToId) {
      // Found parent, insert reply
      return {
        ...comment,
        commentResponses: [...(comment.commentResponses || []), newComment],
      };
    }

    // Recurse into replies
    return {
      ...comment,
      commentResponses: insertCommentInTree(
        comment.commentResponses || [],
        newComment
      ),
    };
  });
}
