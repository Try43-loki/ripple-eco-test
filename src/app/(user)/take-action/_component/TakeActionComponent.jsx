import React from "react";
import TakeActionCard from "@/components/TakeActionCard";

const TakeActionComponent = ({ cardData }) => {
  return (
    <>
      <section className="mt-lg mb-[48px] w-full mx-auto lg:px-32 flex flex-wrap md:px-20 md:gap-y-10 gap-y-5 justify-between items-start"
      >
        {/* Card */}
        {cardData?.map(
          (data, index) =>
            data?.deleted === false && (
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
            )
        )}
      </section>
    </>
  );
};

export default TakeActionComponent;
