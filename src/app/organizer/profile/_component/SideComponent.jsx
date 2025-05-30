import React from "react";
import CardOrgLeaderComponent from "./CardOrgLeaderComponent";
import { DatePickComponent } from "./DatePickComponent";
import CardSceduleComponent from "./CardSceduleComponent";
import Link from "next/link";

const SideComponent = ({ operator }) => {
  return (
    <>
      <section className="rounded-2xl bg-light-gray p-3.75 border-none w-full h-full flex flex-col gap-y-5">
        <CardOrgLeaderComponent operator={operator} />

        {operator == "volunteer" ? (
          ""
        ) : (
          <div className="flex flex-col gap-y-4 p-6.25 bg-white rounded-2xl">
            <div className="flex items-center justify-between">
              <h2>My Schedule</h2>
              <DatePickComponent />
            </div>
            <div className="flex flex-col gap-y-4">
              <Link href="/organizer/eco-event/1">
                <CardSceduleComponent />
              </Link>
              <Link href="/organizer/eco-event/2">
                <CardSceduleComponent />
              </Link>
              <Link href="/organizer/eco-event/3">
                <CardSceduleComponent />
              </Link>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default SideComponent;
