import CreateDiscussionComponent from "@/components/CreateDiscussionComponent";
import { UpdateEventComponent } from "@/components/UpdateEventComponent";
import React from "react";

function page() {
  return (
    <div>
      <UpdateEventComponent />
      <CreateDiscussionComponent />
    </div>
  );
}

export default page;
