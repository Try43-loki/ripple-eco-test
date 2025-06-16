import React from "react";
import CardArchivesComponent from "./CardArchivesComponent";

const ArchivesComponent = async ({ cardData }) => {
  return (
    <>
      <div className="flex flex-col gap-5 overflow-y-scroll h-[350px]">
        {cardData?.map((data, index) => (
          <CardArchivesComponent
            key={index}
            cardData={data}
            cardId={data?.eventId}
          />
        ))}
      </div>
    </>
  );
};

export default ArchivesComponent;
