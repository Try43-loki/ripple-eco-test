import React from "react";
import DiscussionCardComponent from "../../discussion-forums/_component/DiscussionCardComponent";
import CardDiscussionComponent from "@/components/CardDiscussionComponent";
import { getAllOwnDiscussionsService } from "@/service/discussionService";
import CardDiscussion from "./CardDisscussion";

const DisccusionComponent = ({ disccusionData }) => {
  return (
    <main>
      <section className="flex flex-wrap justify-start items-start gap-2.5">
        {/* <CardDiscussionComponent discussions={disccusionData} image={"https://i.pinimg.com/564x/24/76/ef/2476efbf3daa04c675e03e0083ad38ac.jpg"}/> */}
        <CardDiscussion discussions={disccusionData} />
      </section>
    </main>
  );
};

export default DisccusionComponent;
