import React from "react";
import { getCurrentUserProfileService, viewUserProfileService } from "@/service/profileService";
import OrganizerProfileComponent from "../../profile/_component/OrganizerProfileComponent";
import SideComponent from "../../profile/_component/SideComponent";

const ViewProfilePage = async ({params}) => {
  const viewProfile = await viewUserProfileService(params?.userID);
  const isOrganizer = viewProfile?.data?.organizer;
  let organizerData = {};
  if (isOrganizer === true) {
    organizerData = viewProfile?.data;
  }
  return (
    <>
      <section className="flex flex-row w-full gap-x-4 items-start">
        <div className="w- basis-[60%]">
          <OrganizerProfileComponent
            operator={isOrganizer}
            organizerData={organizerData}
            isViewProfile={true}
          />
        </div>

        <div className="basis-[40%] h-180">
          <SideComponent operator={isOrganizer} userId={organizerData} isViewProfile={true}/>
        </div>
      </section>
    </>
  );
};

export default ViewProfilePage;
