import React from "react";
import OrganizerProfileComponent from "./_component/OrganizerProfileComponent";
import SideComponent from "./_component/SideComponent";

function ProfilePage() {
  return (
    <>
      <section className="flex flex-row gap-x-4 items-start">
        <div className="basis-[60%]">
          <OrganizerProfileComponent />
        </div>
        <div className="basis-[40%]">
          <SideComponent />
        </div>
      </section>
    </>
  );
}

export default ProfilePage;
