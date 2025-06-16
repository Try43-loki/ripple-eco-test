import React from "react";
import TakeActionCard from "../../../../components/TakeActionCard";
import { getCurrentUserProfileService } from "@/service/profileService";

const TakeActionComponent = async ({ cardData }) => {
  const userData = await getCurrentUserProfileService();
  return (
    <main>
      <section className="w-full">
            <TakeActionCard
              cardData={cardData}
              isOwner={true}
              layout={"row"}
              isOrganizer={userData?.data?.organizer}
            />
      </section>
    </main>
  );
};

export default TakeActionComponent;
