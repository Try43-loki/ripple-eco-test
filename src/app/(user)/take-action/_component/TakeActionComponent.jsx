import React from "react";
import TakeActionCard from "@/components/TakeActionCard";

const TakeActionComponent = ({ cardData }) => {
  console.log("cardData", cardData);
  return (
    <>
      <section className="mt-lg mb-[48px] w-full mx-auto lg:px-32 flex flex-wrap md:px-20 md:gap-y-10 gap-y-5 justify-start items-start gap-x-10">
        {/* Card */}
        {cardData?.map((data, index) => (
          <TakeActionCard
            key={index}
            image={data?.image}
            id={data?.takeActionId}
            title={data?.title}
            description={data?.description}
            support={data?.numberOfSupporter}
            isPublic={data?.anonymous}
            isOwner={false}
          />
        ))}
      </section>
    </>
  );
};

export default TakeActionComponent;
