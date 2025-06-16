import React from "react";
import TakeActionCard from "../../../../components/TakeActionCard";
import { getCurrentUserProfileService } from "@/service/profileService";
import { getOwnTakeActionService } from "@/service/takeActionService";

const TakeActionComponent = async () => {
  const userData = await getCurrentUserProfileService();
  const ownTakeActionData = await getOwnTakeActionService();
  const cardData = ownTakeActionData?.data || [];
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
