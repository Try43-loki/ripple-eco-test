import React from "react";
import DiscussionCardComponent from "../../discussion-forums/_component/DiscussionCardComponent";
import CardDiscussionComponent from "@/components/CardDiscussionComponent";
import { getAllOwnDiscussionsService } from "@/service/discussionService";
import CardDiscussion from "./CardDisscussion";

const DisccusionComponent = ({ disccusionData }) => {
  return (
    <main>
      <section className="flex flex-wrap justify-start items-start gap-2.5">
        <CardDiscussion discussions={disccusionData} />
      </section>
    </main>
  );
};

export default DisccusionComponent;
