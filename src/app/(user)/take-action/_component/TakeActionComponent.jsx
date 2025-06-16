import React from "react";
import TakeActionCard from "@/components/TakeActionCard";
import { getCurrentUserProfileService } from "@/service/profileService";

const TakeActionComponent = async ({ cardData }) => {
  const userData = await getCurrentUserProfileService();
  return (
    <>
      <section className="mt-lg mb-[48px] w-full mx-auto lg:px-32 flex flex-wrap md:px-20 md:gap-y-10 gap-y-5 justify-start items-start gap-x-10">
        {/* Card */}
          <TakeActionCard
            cardData={cardData}
            isOwner={false}
            layout={"col"}
            isOrganizer={userData?.data?.organizer}
          />
      </section>
    </>
  );
};

export default TakeActionComponent;
