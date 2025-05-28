import { LayoutDashboard } from "lucide-react";
import React from "react";

function UpcomingEventComponent() {
  return (
    <>
      <section>
        <h1 className="text-md font-semibold  text-dark-green my-3">
          Upcoming Event
        </h1>
        <section className="flex justify-center items-center flex-col gap-y-4 w-full">
          <article className="bg-lightest-green p-2 px-3 rounded-xl flex justify-start gap-x-4 items-center w-full">
            <div className="flex justify-center items-center flex-col  p-1 py-2 rounded-lg bg-green w-12">
              <h3 className="text-white text-xl font-semibold">12</h3>
              <p className="text-sm text-white font-light">Tue</p>
            </div>
            <div>
              <h4 className="text-black text-label font-medium ">
                Green Oasis going Miyawaki
              </h4>
              <p className="text-light-green text-sub-info">
                Phnom Penh, Cambodia . 8:00 AM
              </p>
              <div>
                <span className="flex justify-start text-sub-info items-center font-light text-strong-gray gap-x-1">
                  <LayoutDashboard size={12} />
                  Seminar| Tree Planting
                </span>
              </div>
            </div>
          </article>
          <article className="bg-lightest-green p-2 px-3 rounded-xl flex justify-start gap-x-4 items-center w-full">
            <div className="flex justify-center items-center flex-col  p-1 py-2 rounded-lg bg-green w-12">
              <h3 className="text-white text-xl font-semibold">12</h3>
              <p className="text-sm text-white font-light">Tue</p>
            </div>
            <div>
              <h4 className="text-black text-label font-medium ">
                Green Oasis going Miyawaki
              </h4>
              <p className="text-light-green text-sub-info">
                Phnom Penh, Cambodia . 8:00 AM
              </p>
              <div>
                <span className="flex justify-start text-sub-info items-center font-light text-strong-gray gap-x-1">
                  <LayoutDashboard size={12} />
                  Seminar| Tree Planting
                </span>
              </div>
            </div>
          </article>
        </section>
      </section>
    </>
  );
}

export default UpcomingEventComponent;
