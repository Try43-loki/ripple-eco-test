import React from "react";
import CardDiscussion from "./CardDisscussion";
import { getAllDiscussionByUserIdService, getAllOwnDiscussionsService } from "@/service/discussionService";

const DisccusionComponent = async ({userId}) => {
  let ownDiscussionsData = [];
  if(userId){
    ownDiscussionsData = await getAllDiscussionByUserIdService(userId);
  } else {
    ownDiscussionsData = await getAllOwnDiscussionsService();
  }
  return (
    <main>
      <section className="flex flex-wrap justify-start items-start gap-2.5">
        <CardDiscussion discussions={ownDiscussionsData?.data} />
      </section>
    </main>
  );
};

export default DisccusionComponent;
