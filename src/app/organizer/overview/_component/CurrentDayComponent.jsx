import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
const currentDate = [
  {
    date: "12",
    day: "Tue",
  },
  {
    date: "13",
    day: "Wed",
  },
  {
    date: "14",
    day: "Thu",
  },
  {
    date: "15",
    day: "Fri",
  },
  {
    date: "16",
    day: "Sat",
  },
];
function CurrentDayComponent() {
  const isCurrentDate = (date) => {
    const today = 14;
    return date == today;
  };
  return (
    <>
      <section className="w-full border border-light-strok p-4 rounded-2xl ">
        <div className="flex justify-between items-center ">
          <span className="bg-lighter-brown text-brown rounded-full flex justify-center items-center p-1 h-7 w-7">
            <ChevronLeft size={18} />
          </span>
          <p className="text-2xl text-black font-semibold">May 2025</p>
          <span className="bg-lighter-brown text-brown rounded-full flex justify-center items-center p-1 h-7 w-7">
            <ChevronRight size={18} />
          </span>
        </div>
        <div className="flex justify-center items-center gap-x-3 mt-3">
          {currentDate?.map((item, index) => (
            <span
              className={`flex justify-center items-center flex-col gap-y-1 rounded-lg w-20 p-1 py-2 ${
                isCurrentDate(item?.date) ? "bg-green text-white" : ""
              }`}
              key={index}
            >
              <p
                className={`text-sm ${
                  isCurrentDate(item?.date) ? "text-white" : "text-light-green"
                }`}
              >
                {item?.day}
              </p>
              <h2
                className={`text-lg  font-semibold ${
                  isCurrentDate(item?.date) ? "text-white" : "text-black"
                }`}
              >
                {item?.date}
              </h2>
            </span>
          ))}
        </div>
      </section>
    </>
  );
}

export default CurrentDayComponent;
