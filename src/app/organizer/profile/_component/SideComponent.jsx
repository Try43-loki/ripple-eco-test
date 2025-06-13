import React, { use } from "react";
import CardOrgLeaderComponent from "./CardOrgLeaderComponent";
import { DatePickComponent } from "./DatePickComponent";
import CardSceduleComponent from "./CardSceduleComponent";
import { getAllEcoEventByUserIDService, getOwnUpComingEventService } from "@/service/ecoEventService";

const SideComponent =async ({ operator, userId, isViewProfile }) => {
  const upcoming = await getOwnUpComingEventService();
  const upcomingOther = await getAllEcoEventByUserIDService(userId?.appUserId);
  let upcomingData = [];
  if (isViewProfile === true) {
    upcomingData = upcomingOther;
  } else {
    upcomingData = upcoming?.data;
  }
  
  return (
    <>
      <section className="rounded-2xl bg-light-gray p-3.75 border-none w-full h-full flex flex-col gap-y-5">
        <CardOrgLeaderComponent operator={operator} userID={userId} />

        {operator === false ? (
          ""
        ) : (
          <div className="flex flex-col gap-y-4 p-6.25 bg-white rounded-2xl">
            <div className="flex items-center justify-between">
              <h2>My Schedule</h2>
              <DatePickComponent />
            </div>
            <div className="flex flex-col gap-y-4 overflow-y-scroll h-120">
                <CardSceduleComponent cardData={upcomingData}/>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default SideComponent;
