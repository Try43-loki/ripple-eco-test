import React from "react";

const ActionVolunteerComponent = ({ name, date, status, isAlternateRow }) => {
  return (
    <section
      className={`w-full flex py-5 px-4 justify-between items-center ${
        isAlternateRow ? "bg-white" : "bg-light-gray"
      } rounded-2xl`}
    >
      {/* Volunteer Name - Fixed width */}
      <p className="min-w-[160px]">{name}</p>

      {/* Date - Fixed width */}
      <p className="min-w-[120px]">{date}</p>

      {/* Status - Fixed width */}
      <div className="min-w-[120px]">
        <div className="py-1 px-4 bg-white shadow text-dark-green rounded-full flex justify-center">
          <p>{status}</p>
        </div>
      </div>

      {/* Actions - Fixed width */}
      <div className="flex gap-3 min-w-[160px]">
        <div className="py-1 px-4 bg-green text-white rounded-full cursor-pointer">
          <p>Approve</p>
        </div>
        <div className="py-1 px-5 bg-red text-white rounded-full cursor-pointer">
          <p>Reject</p>
        </div>
      </div>
    </section>
  );
};

export default ActionVolunteerComponent;
