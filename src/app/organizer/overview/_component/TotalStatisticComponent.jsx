import { CalendarDays } from "lucide-react";
import React from "react";
const totalStatisticData = [
  {
    title: "Total Badge",
    icon: <CalendarDays size={20} />,
    total: 100,
  },
  {
    title: "Total Participants",
    icon: <CalendarDays size={20} />,
    total: 120,
  },
  {
    title: "Total Donation",
    icon: <CalendarDays size={20} />,
    total: "$1999.00",
  },
];
function TotalStatisticComponent() {
  return (
    <>
      <section className="flex justify-center items-center gap-x-5 mt-5">
        {totalStatisticData?.map((item, index) => (
          <div
            key={index}
            className="flex grow justify-start items-center gap-x-4 p-2 px-4 rounded-2xl border border-light-strok"
          >
            <span className="h-11 w-11 flex justify-center items-center text-brown bg-lighter-brown rounded-full p-1 ">
              {item?.icon}
            </span>
            <div className="flex justify-start items-start flex-col ">
              <p className="text-light-green text-sm">{item?.title}</p>
              <h3 className="text-2xl text-strong-green font-semibold">
                {item?.total}
              </h3>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default TotalStatisticComponent;
