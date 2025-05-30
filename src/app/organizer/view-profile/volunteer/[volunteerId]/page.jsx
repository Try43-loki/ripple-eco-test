import OrganizerProfileComponent from "@/app/organizer/profile/_component/OrganizerProfileComponent";
import SideComponent from "@/app/organizer/profile/_component/SideComponent";
import React from "react";

function ProfilePage({ params }) {
  return (
    <>
      <section className="flex flex-row gap-x-4 items-start">
        <div className="basis-[60%]">
          <OrganizerProfileComponent operator={"volunteer"} />
        </div>

        <div className="basis-[40%] h-180">
          <SideComponent operator={"volunteer"} />
        </div>
      </section>
    </>
  );
}

export default ProfilePage;
