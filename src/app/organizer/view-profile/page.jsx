import React from "react";
import { getCurrentUserProfileService } from "@/service/profileService";
import OrganizerProfileComponent from "../profile/_component/OrganizerProfileComponent";
import SideComponent from "../profile/_component/SideComponent";

const ViewProfilePage = async () => {
  const currentUser = await getCurrentUserProfileService();
  const isOrganizer = currentUser?.data?.organizer;
  let organizerData = {};
  if (isOrganizer === true) {
    organizerData = currentUser?.data;
  }
  return (
    <>
      <section className="flex flex-row w-full gap-x-4 items-start">
        <div className="w- basis-[60%]">
          <OrganizerProfileComponent
            operator={isOrganizer}
            organizerData={organizerData}
          />
        </div>

        <div className="basis-[40%] h-180">
          <SideComponent operator={isOrganizer} userId={organizerData}/>
        </div>
      </section>
    </>
  );
};

export default ViewProfilePage;
