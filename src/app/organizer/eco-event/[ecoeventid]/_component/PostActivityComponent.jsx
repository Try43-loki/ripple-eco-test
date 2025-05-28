import { Button } from "@/components/ui/button";
import React from "react";

const PostActivityComponent = () => {
  return (
    <main>
      <article className="flex items-center justify-between w-full bg-white py-5 px-5 mt-9 rounded-2xl">
        <p className="text-dark-green font-medium">Event Activity</p>
        <Button className="bg-green text-white py-6 px-5 rounded-2xl">
          Post Activity
        </Button>
      </article>
    </main>
  );
};

export default PostActivityComponent;
