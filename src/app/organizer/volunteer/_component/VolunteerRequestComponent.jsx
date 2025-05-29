import React from "react";
import ActionVolunteerComponent from "./ActionVolunteerComponent";

const VolunteerRequestComponent = () => {
  // Sample data — replace this with real data if available
  const volunteerRequests = [
    { name: "Matt Dickerson", date: "13/05/2022", status: "Pending" },
    { name: "Wiktoria", date: "22/05/2022", status: "Pending" },
    { name: "John Doe", date: "14/05/2022", status: "Pending" },
    { name: "Alice Smith", date: "15/05/2022", status: "Pending" },
    { name: "Alice Smith", date: "15/05/2022", status: "Pending" },
    { name: "Alice Smith", date: "15/05/2022", status: "Pending" },
    { name: "Alice Smith", date: "15/05/2022", status: "Pending" },
    { name: "Alice Smith", date: "15/05/2022", status: "Pending" },
  ];

  return (
    <section className="flex flex-col">
      <p className="text-base text-dark-green pb-5 font-medium">
        Volunteer Request : {volunteerRequests.length}/100
      </p>

      {/* Table Header */}
      <div className="w-full flex py-3 px-4 justify-between text-lighter-green font-medium border border-lightes-white rounded-2xl items-center">
        {/* Volunteer Name */}
        <p className="min-w-[140px]">Volunteer Name</p>

        {/* Requested Date */}
        <p className="min-w-[170px]">Requested Date</p>

        {/* Status */}
        <div className="min-w-[140px]">
          <p>Status</p>
        </div>

        {/* Action */}
        <div className="min-w-[120px] flex">
          <p>Action</p>
        </div>
      </div>

      {/* Volunteer Rows */}
      <div className="mt-5">
        {volunteerRequests.map((request, index) => (
          <ActionVolunteerComponent
            key={index}
            name={request.name}
            date={request.date}
            status={request.status}
            isAlternateRow={index % 2 === 1} // alternate every other row
          />
        ))}
      </div>
    </section>
  );
};

export default VolunteerRequestComponent;
