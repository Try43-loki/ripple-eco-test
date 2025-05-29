// components/ActionVolunteerComponent.jsx
import React from "react";

export default function ActionVolunteerComponent({
  name,
  date,
  status,
  isAlternateRow,
  onClick,
}) {
  return (
    <section
      onClick={onClick}
      className={`w-full flex py-5 px-4 justify-between items-center ${
        isAlternateRow ? "bg-white" : "bg-light-gray"
      } rounded-2xl cursor-pointer hover:bg-lighter-white transition`}
    >
      <p className="min-w-[160px]">{name}</p>
      <p className="min-w-[120px]">{date}</p>
      <div className="min-w-[120px]">
        <div className="py-1 px-4 bg-white shadow text-dark-green rounded-full flex justify-center">
          {status}
        </div>
      </div>
      <div className="flex gap-3 min-w-[160px]">
        <div className="py-1 px-4 bg-green text-white rounded-full">
          Approve
        </div>
        <div className="py-1 px-5 bg-red text-white rounded-full">Reject</div>
      </div>
    </section>
  );
}
