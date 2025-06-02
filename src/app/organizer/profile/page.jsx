import React from "react";
import OrganizerProfileComponent from "./_component/OrganizerProfileComponent";
import SideComponent from "./_component/SideComponent";

function ProfilePage() {
  return (
    <section className="flex gap-4 w-full">
      <div className="flex flex-col w-full">
        <OrganizerProfileComponent />
      </div>
      <div className="flex w-full">
        <SideComponent />
      </div>
    </section>
  );
}

export default ProfilePage;
