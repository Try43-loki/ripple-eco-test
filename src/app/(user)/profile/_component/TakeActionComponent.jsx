import React from "react";
import TakeActionCard from "../../../../components/TakeActionCard";

const TakeActionComponent = ({ cardData }) => {
  return (
    <main>
      <section className="w-full flex flex-row flex-wrap justify-start gap-7 items-start">
        {cardData.map((data, index) => (
          <div className="w-70 mt-5" key={index}>
            <TakeActionCard
              key={index}
              image={data?.image}
              id={data?.takeActionId}
              idUser={data?.appUser?.appUserId}
              title={data?.title}
              description={data?.description}
              support={data?.numberOfSupporter}
              isCompleted={data?.completed}
              isPublic={data?.anonymous}
              isOwner={true}
            />
          </div>
        ))}
      </section>
    </main>
  );
};

export default TakeActionComponent;
