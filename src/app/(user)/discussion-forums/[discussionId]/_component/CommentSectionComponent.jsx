import React from "react";
import CommentComponent from "./CommentComponent";

const CommentSectionComponent = () => {
  const img = "/assets/tree-planting.png";
  return (
    <main className="w-full mt-8">
      <article className="flex flex-col">
        <h2 className="text-dark-gray font-semibold">7 Comments</h2>
        <CommentComponent image={img} />
      </article>
    </main>
  );
};

export default CommentSectionComponent;
