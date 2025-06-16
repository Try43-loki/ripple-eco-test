import React from "react";

export default function VolunteerRequestProfileComponent({
  volunteer,
  onClose,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add submit logic here if needed
  };

  return (
    <div
      className="fixed inset-0 bg-black/20 flex items-center justify-center z-50"
      onClick={onClose} // close modal when clicking outside
    >
      <form
        onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
        className="bg-white rounded-2xl p-6 max-w-lg w-full relative"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-light-brown hover:text-gray-800 text-lg"
        >
          ×
        </button>

        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-2xl font-semibold text-dark-green">
              {volunteer?.appUserResponse?.firstName}{" "}
              {volunteer?.appUserResponse?.lastName}
            </h2>
            <p className="text-green">
              {volunteer?.participantsCount} : events participated
            </p>
          </div>
          <div className="relative w-20 h-20 rounded-full overflow-hidden ring-2 ring-green-600">
            <img
              src={volunteer?.appUserResponse?.profileImageUrl}
              alt={volunteer?.appUserResponse?.lastName}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Meta Info */}
        <div className="text-sm text-gray-700 space-y-1 mb-4">
          <p>
            <span className="font-medium">Requested at:</span>{" "}
            {volunteer?.requestedTime}
          </p>
          <p>
            <span className="font-medium">Contact:</span>{" "}
            {volunteer?.appUserResponse?.phoneNumber}
          </p>
          <p>
            <span className="font-medium">Address:</span>{" "}
            {volunteer?.appUserResponse?.address}
          </p>
        </div>
        <hr className="mb-8 text-meduim-gray" />

        {/* Reason Box */}
        <div className="bg-light-gray p-4 rounded-xl shadow-sm mb-6 min-h-[200px] relative">
          <h3 className="font-medium mb-2 text-lg text-dark-green absolute -top-4">
            Reason of joining :
          </h3>
          <p className="leading-relaxed text-sm text-light-green">
            {volunteer?.answer}
          </p>
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => {
              // Add approval logic here
              onClose();
            }}
            className="flex-1 bg-green text-white py-2 cursor-pointer rounded-lg hover:bg-green"
          >
            Approve
          </button>
          <button
            type="button"
            onClick={() => {
              // Add rejection logic here
              onClose();
            }}
            className="flex-1 bg-red-500 text-white py-2 cursor-pointer rounded-lg hover:bg-red"
          >
            Reject
          </button>
        </div>
      </form>
    </div>
  );
}
