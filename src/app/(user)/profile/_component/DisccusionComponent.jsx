import React from "react";
import CardDiscussion from "./CardDisscussion";
import { getAllOwnDiscussionsService } from "@/service/discussionService";

const DisccusionComponent = async () => {
  const ownDiscussionsData = await getAllOwnDiscussionsService();
  return (
    <main>
      <section className="flex flex-wrap justify-start items-start gap-2.5">
        <CardDiscussion discussions={ownDiscussionsData?.data} />
      </section>
    </main>
  );
};

export default DisccusionComponent;
