import React from "react";
import OrganizerProfileComponent from "./_component/OrganizerProfileComponent";
import SideComponent from "./_component/SideComponent";

function ProfilePage() {
  return (
    <>
      <section className="flex flex-row gap-x-4 items-start">
        <div className="w-180">
          <OrganizerProfileComponent/>
        </div>
        <SideComponent/>
      </section>
    </>
  )
}

export default ProfilePage;
