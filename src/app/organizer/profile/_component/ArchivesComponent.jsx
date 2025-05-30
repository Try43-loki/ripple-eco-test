import React from "react";
import CardArchivesComponent from "./CardArchivesComponent";

const ArchivesComponent = () => {
  return (
    <div className="flex flex-col gap-5 overflow-y-scroll">
      <CardArchivesComponent />
      <CardArchivesComponent />
      <CardArchivesComponent />
    </div>
  );
};

export default ArchivesComponent;
