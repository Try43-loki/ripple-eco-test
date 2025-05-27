import { DollarSign, Mail } from "lucide-react";

const CardEcoEventComponent = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm w-full max-w-[265px] lg:w-full flex-shrink-0 pb-6">
      {/* Event Image */}
      <img
        src="/assets/eventImage.png"
        alt="Green Oasis going Miyawaki event"
        className="rounded-t-2xl w-full h-[150px] object-cover"
      />

      {/* Event Content */}
      <div className="px-5 pt-3">
        <p className="text-blue-600 text-sm font-medium">• Ongoing</p>
        <p className="text-gray-500 text-sm mt-1">Mon, 12 May at 8 AM</p>
        <h3 className="text-gray-900 text-xl font-bold leading-snug mt-1">
          Green Oasis going <span className="block">Miyawaki</span>
        </h3>
        <p className="text-gray-600 text-sm mt-1">Phnom Penh, Cambodia</p>
        <p className="text-gray-400 text-sm mt-1">100 going</p>

        {/* Action Buttons */}
        <div className="flex gap-2 mt-4">
          <button className="flex w-full justify-center items-center gap-2 bg-light-gray py-2 px-4 rounded-md text-gray-900 font-medium">
            <img
              src="/assets/tick-circle.png"
              alt="Going"
              className="h-5 w-5"
            />
            <span>Going</span>
          </button>
          <button className="bg-light-gray p-2 rounded-md">
            <DollarSign className="h-5 w-5 text-gray-700" />
          </button>
          <button className="bg-light-gray p-2 rounded-md">
            <Mail className="h-5 w-5 text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardEcoEventComponent;
