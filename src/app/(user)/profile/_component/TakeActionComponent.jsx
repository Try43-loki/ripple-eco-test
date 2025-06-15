import React from "react";
import TakeActionCard from "../../../../components/TakeActionCard";
import { getCurrentUserProfileService } from "@/service/profileService";
import { getOwnTakeActionService, getTakeActionByUserIdService } from "@/service/takeActionService";

const TakeActionComponent = async ({userId}) => {
  let cardData = [];
  let userData = [];
  if(userId){
    userData = await viewUserProfileService(userId);
    cardData = await getTakeActionByUserIdService(userId);
  } else {
    userData = await getCurrentUserProfileService();
    const ownTakeActionData = await getOwnTakeActionService();
    cardData = ownTakeActionData?.data || [];
  }
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
