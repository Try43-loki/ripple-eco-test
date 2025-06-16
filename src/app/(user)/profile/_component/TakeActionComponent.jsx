import React from "react";
import TakeActionCard from "../../../../components/TakeActionCard";
import { getCurrentUserProfileService, viewUserProfileService } from "@/service/profileService";
import { getOwnTakeActionService, getTakeActionByUserIdService } from "@/service/takeActionService";

const TakeActionComponent = async ({userId}) => {
  let cardData = [];
  let userData = [];
  if(userId){
    userData = await viewUserProfileService(userId);
    cardData = await getTakeActionByUserIdService(userId);
  } else {
    userData = await getCurrentUserProfileService();
    cardData = await getOwnTakeActionService();
  }

  return (
    <main>
      <section className="w-full">
            <TakeActionCard
              cardData={cardData?.data}
              isOwner={true}
              layout={"row"}
              isOrganizer={userData?.data?.organizer}
            />
      </section>
    </main>
  );
};

export default TakeActionComponent;
