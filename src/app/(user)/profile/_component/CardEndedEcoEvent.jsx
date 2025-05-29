import React from "react";

const CardEndedEcoEvent = () => {
  return (
    <main>
      <div className="overflow-x-auto scroll-smooth snap-x snap-mandatory [&::-webkit-scrollbar]:hidden scrollbar-none border-1 border-[#E4E8ED] rounded-[20px]">
        <div className="flex gap-8 w-max">
          <div className="w-full h-full pb-6 bg-white rounded-2xl snap-start shrink-0">
            <img
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSlJ1CyI7O6QyGxZqGwepPYFoAEP0vm2NiOZE2iOr3HTMhxDTPB"
              alt="Event Image"
              className="rounded-t-2xl "
              height={110}
            />
            <div className="px-5">
              <p className="text-ongoing text-sm pt-2">. Finish</p>
              <p className="text-status-volunteer text-md">
                Mon, 12 May at 8 AM
              </p>
              <h3 className="text-title text-2xl/7 font-bold">
                Green Oasis going <span className="block">Miyawaki</span>{" "}
              </h3>
              <p className="text-cancel text-sm pt-1">Phnom Penh, Cambodia</p>
              <p className="text-description text-sm pt-1">100 going</p>

              <div className="pt-4 flex w-full">
                <button className="py-2 w-full px-10 bg-light-gray rounded-md flex gap-2 items-center text-center justify-center">
                  <p className="text-md text-title font-bold">Event Ended</p>
                </button>

               
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CardEndedEcoEvent;