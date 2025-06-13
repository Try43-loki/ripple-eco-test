import { Award, CalendarDays, CircleDollarSign, Users } from "lucide-react";
import React from "react";
function TotalStatisticComponent({ total }) {
  const totalStatisticData = [
    {
      title: "Total Badge",
      icon: <Award size={20} />,
      total: total?.totalBadges ? total?.totalBadges : 0,
    },
    {
      title: "Total Participants",
      icon: <Users size={20} />,
      total: total?.totalParticipants ? total?.totalParticipants : 0,
    },
    {
      title: "Total Donation",
      icon: <CircleDollarSign size={20} />,
      total: total?.totalDonation ? total?.totalDonation : 0,
    },
  ];
  return (
    <>
      <section className="flex justify-center items-center gap-x-5 mt-5">
        {totalStatisticData?.map((item, index) => (
          <div
            key={index}
            className="flex grow justify-start items-center gap-x-4 p-1 px-4 rounded-2xl border border-light-strok"
          >
            <span className="h-10 w-10 flex justify-center items-center text-brown bg-lighter-brown rounded-full p-1 ">
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
