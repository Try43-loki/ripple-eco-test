import React from "react";
import OrganizerProfileComponent from "./_component/OrganizerProfileComponent";
import SideComponent from "./_component/SideComponent";
import { getCurrentUserProfileService } from "@/service/profileService";

const ProfilePage = async () => {
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
            isViewProfile={false}
          />
        </div>

        <div className="basis-[40%] h-180">
          <SideComponent operator={isOrganizer} userId={organizerData} isViewProfile={false}/>
        </div>
      </section>
    </>
  );
};

export default ProfilePage;
