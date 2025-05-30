import React from "react";
import DiscussionCardComponent from "../../discussion-forums/_component/DiscussionCardComponent";
import CardDiscussionComponent from "@/components/CardDiscussionComponent";

const DisccusionComponent = ({ operator }) => {
  return (
    <main>
      <section className="flex flex-col items-center gap-y-5">
        {/* <CardDiscussionComponent discussions={"Discussion"} image={"https://i.pinimg.com/564x/24/76/ef/2476efbf3daa04c675e03e0083ad38ac.jpg"}/>
            <CardDiscussionComponent discussions={"Discussion"} image={"https://i.pinimg.com/564x/24/76/ef/2476efbf3daa04c675e03e0083ad38ac.jpg"}/>
            <CardDiscussionComponent discussions={"Discussion"} image={"https://i.pinimg.com/564x/24/76/ef/2476efbf3daa04c675e03e0083ad38ac.jpg"}/>
            <CardDiscussionComponent discussions={"Discussion"} image={"https://i.pinimg.com/564x/24/76/ef/2476efbf3daa04c675e03e0083ad38ac.jpg"}/> */}
        <DiscussionCardComponent operator={other} />
      </section>
    </main>
  );
};

export default DisccusionComponent;
