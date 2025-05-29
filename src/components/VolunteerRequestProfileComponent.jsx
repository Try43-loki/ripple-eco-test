// components/VolunteerRequestProfileComponent.jsx
import React from "react";

export default function VolunteerRequestProfileComponent({
  volunteer,
  onClose,
}) {
  const {
    name,
    profileUrl,
    eventsParticipated,
    date,
    contact,
    address,
    reason,
  } = volunteer;

  return (
    <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 max-w-lg w-full relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-lg"
        >
          ×
        </button>

        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-2xl font-semibold text-dark-green">{name}</h2>
            <p className="text-green-600">
              {eventsParticipated} events participated
            </p>
          </div>
          <div className="relative w-20 h-20 rounded-full overflow-hidden ring-2 ring-green-600">
            <img
              src={profileUrl}
              alt={name}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Meta Info */}
        <div className="text-sm text-gray-700 space-y-1 mb-4">
          <p>
            <span className="font-medium">Requested at:</span> {date}
          </p>
          <p>
            <span className="font-medium">Contact:</span> {contact}
          </p>
          <p>
            <span className="font-medium">Address:</span> {address}
          </p>
        </div>
        <hr className="mb-8 text-meduim-gray" />
        {/* Reason Box */}
        <div className="bg-light-gray p-4 rounded-xl shadow-sm mb-6  ">
          <h3 className="font-medium mb-2 text-lg text-dark-green">
            Reason of joining :
          </h3>
          <p className="leading-relaxed text-sm text-light-green">{reason}</p>
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <button className="flex-1 bg-green text-white py-2 cursor-pointer rounded-lg hover:bg-green">
            Approve
          </button>
          <button className="flex-1 bg-red-500 text-white py-2 cursor-pointer rounded-lg hover:bg-red">
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}
