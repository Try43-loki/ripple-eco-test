import React from "react";
import TakeActionCard from "../../../../components/TakeActionCard";

const TakeActionComponent = ( {cardData} ) => {
  return (
    <main>
      <section className="w-full flex flex-row flex-wrap justify-between items-center">
        {cardData.map((data, index) => 
        <div className="w-70" key={index}>
          <TakeActionCard
            image={data?.image}
            id ={data?.takeActionId}
            title={data?.title}
            description={
              data?.description
            }
            support={data?.numberOfSupporter}
            isPublic={data?.anonymous}
            isOwner={true}
          />
        </div>
        )}
        
      </section>
    </main>
  );
};

export default TakeActionComponent;
