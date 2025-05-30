import React from "react";
import CardEcoEvnentOrgProfile from "./ArchivesComponent";
import CardOrgLeaderComponent from "./CardOrgLeaderComponent";

const SideComponent = () => {
  return (
    <>
      <section className="rounded-2xl bg-light-gray p-3.75 border-none w-full">
        <CardOrgLeaderComponent />
      </section>
    </>
  );
};

export default SideComponent;
