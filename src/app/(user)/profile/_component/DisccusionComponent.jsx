import React from "react";
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
