"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

function getSurroundingDates(centerDate, range = 2) {
  const dates = [];
  for (let i = -range; i <= range; i++) {
    const date = new Date(centerDate);
    date.setDate(centerDate.getDate() + i);
    dates.push({
      date: date.getDate().toString(),
      day: date.toLocaleDateString("en-US", { weekday: "short" }),
      fullDate: date.toDateString(),
    });
  }
  return dates;
}

function CurrentDayComponent() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const currentDate = getSurroundingDates(selectedDate);
  const today = new Date().toDateString();

  const handleArrowClick = (direction) => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() + (direction === "next" ? 1 : -1));
    setSelectedDate(newDate);
  };

  return (
    <section className="w-full border border-light-strok p-4 rounded-2xl">
      <div className="flex justify-between items-center">
        <span
          onClick={() => handleArrowClick("prev")}
          className="bg-lighter-brown text-brown rounded-full flex justify-center items-center p-1 h-7 w-7 cursor-pointer"
        >
          <ChevronLeft size={18} />
        </span>
        <p className="text-2xl text-black font-semibold">
          {selectedDate.toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          })}
        </p>
        <span
          onClick={() => handleArrowClick("next")}
          className="bg-lighter-brown text-brown rounded-full flex justify-center items-center p-1 h-7 w-7 cursor-pointer"
        >
          <ChevronRight size={18} />
        </span>
      </div>

      <div className="flex justify-center items-center gap-x-3 mt-3">
        {currentDate.map((item, index) => {
          const isToday = item.fullDate === today;
          return (
            <div
              key={index}
              className={`flex justify-center items-center flex-col gap-y-1 rounded-lg w-20 p-1 py-2 transition duration-200 ${
                isToday
                  ? "bg-green text-white"
                  : "hover:bg-light-green/20 cursor-default"
              }`}
            >
              <p
                className={`text-sm ${
                  isToday ? "text-white" : "text-light-green"
                }`}
              >
                {item.day}
              </p>
              <h2
                className={`text-lg font-semibold ${
                  isToday ? "text-white" : "text-black"
                }`}
              >
                {item.date}
              </h2>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default CurrentDayComponent;
