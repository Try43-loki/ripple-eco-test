import React from "react";
import OrganizerProfileComponent from "./_component/OrganizerProfileComponent";
import SideComponent from "./_component/SideComponent";

function ProfilePage() {
  return (
    <>
      <section className="flex flex-row gap-x-4 items-start w-full">
        <div className="w-170">
          <OrganizerProfileComponent/>
        </div>
        <div className="w-auto">
          <SideComponent/>
        </div>
        
      </section>
    </>
  )
}

export default ProfilePage;
