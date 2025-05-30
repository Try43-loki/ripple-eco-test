"use client";
import Link from "next/link";
import React, { useState } from "react";

const generateUniqueId = () => Math.random().toString(36).substring(2, 11);

function CreateAgendaComponent({ setFormData, formData, onBack }) {
  const [days, setDays] = useState([
    {
      id: generateUniqueId(),
      date: "",
      activities: [
        {
          id: generateUniqueId(),
        },
      ],
    },
  ]);

  const [jsonOutput, setJsonOutput] = useState("");

  const addDay = () => {
    setDays((prevDays) => [
      ...prevDays,
      {
        id: generateUniqueId(),
        date: "",
        activities: [],
      },
    ]);
  };

  const removeDay = (dayId) => {
    setDays((prevDays) => prevDays.filter((day) => day.id !== dayId));
  };

  // Function to update the date of a specific day
  const handleDayDateChange = (dayId, newDate) => {
    setDays((prevDays) =>
      prevDays.map((day) =>
        day.id === dayId ? { ...day, date: newDate } : day
      )
    );
  };

  const addActivity = (dayId) => {
    setDays((prevDays) =>
      prevDays.map((day) =>
        day.id === dayId
          ? {
              ...day,
              activities: [
                ...day.activities,
                {
                  id: generateUniqueId(),
                  time: "",
                  task: "",
                },
              ],
            }
          : day
      )
    );
  };

  const removeActivity = (dayId, activityId) => {
    setDays((prevDays) =>
      prevDays.map((day) =>
        day.id === dayId
          ? {
              ...day,
              activities: day.activities.filter(
                (activity) => activity.id !== activityId
              ),
            }
          : day
      )
    );
  };

  // Function to handle changes in activity input fields (time or task)
  const handleActivityChange = (dayId, activityId, field, value) => {
    setDays((prevDays) =>
      prevDays.map((day) =>
        day.id === dayId
          ? {
              ...day,
              activities: day.activities.map((activity) =>
                activity.id === activityId
                  ? { ...activity, [field]: value }
                  : activity
              ),
            }
          : day
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const cleanData = days.map((day) => ({
      date: day.date,
      activities: day.activities.map((activity) => ({
        time: activity.time,
        task: activity.task,
      })),
    }));
    setJsonOutput(JSON.stringify(cleanData, null, 2));
    setFormData({
      ...formData,
      agenda: cleanData,
    });
  };
  console.log("Data", formData);

  return (
    <section className="w-full ">
      <div className="w-full  ">
        <h1 className="text-lg text-dark-green font-semibold mb-5">
          Event details
        </h1>

        <button
          onClick={addDay}
          className="flex items-center px-4 py-2 bg-blue text-white rounded-lg cursor-pointer focus:outline-none mb-8"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            />
          </svg>
          Add day
        </button>

        <form onSubmit={handleSubmit} className="w-full">
          {/* Render each day */}
          {days.map((day, dayIndex) => (
            <div key={day.id} className="bg-[#EDF0F3] p-5 rounded-xl mt-5">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center flex-grow">
                  <h2 className="text-xl font-semibold text-dark-green mr-3">
                    Day {dayIndex + 1}
                  </h2>
                  <input
                    type="text"
                    placeholder="No date (e.g., 2025-05-28)"
                    value={day.date}
                    onChange={(e) =>
                      handleDayDateChange(day.id, e.target.value)
                    }
                    className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-700"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => removeDay(day.id)}
                  className="ml-4 p-2 text-red hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 rounded-full transition duration-200 ease-in-out"
                  aria-label="Remove day"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </div>
              {/* Render each activity for the current day */}
              {day.activities.map((activity) => (
                <div
                  key={activity.id}
                  className="grid grid-cols-12 gap-4 items-center mb-3"
                >
                  <div className="col-span-4 sm:col-span-3">
                    <label htmlFor="">Time</label>
                    <input
                      type="time"
                      value={activity.time}
                      onChange={(e) =>
                        handleActivityChange(
                          day.id,
                          activity.id,
                          "time",
                          e.target.value
                        )
                      }
                      className="w-full p-2 bg-white border border-lighter-white text-gray-600 rounded-md outline-0 "
                    />
                  </div>
                  <div className="col-span-7 sm:col-span-8">
                    <label htmlFor="">Task</label>
                    <input
                      type="text"
                      placeholder="About what you do"
                      value={activity.task}
                      onChange={(e) =>
                        handleActivityChange(
                          day.id,
                          activity.id,
                          "task",
                          e.target.value
                        )
                      }
                      className="w-full p-2 bg-white border border-lighter-white text-gray-600 rounded-md outline-0 text-label "
                    />
                  </div>
                  <div className="col-span-1 sm:col-span-1 flex justify-end pt-5">
                    <button
                      type="button"
                      onClick={() => removeActivity(day.id, activity.id)}
                      className="p-2 text-red-500 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 rounded-full transition duration-200 ease-in-out"
                      aria-label="Remove activity"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}

              {/* Button to add one more activity for the current day */}
              <button
                type="button"
                onClick={() => addActivity(day.id)}
                className="flex items-center text-green font-medium mt-4 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
                Add one more activity
              </button>
            </div>
          ))}
        </form>
        <div className="flex w-full justify-between items-center">
          <button
            onClick={onBack}
            className="flex justify-center items-center gap-x-1 text-lg text-dark-gray border border-light-strok bg-white rounded-xl h-10 w-28 self-end mt-5"
          >
            Previous
          </button>
          <Link href={"/organizer/eco-event"}>
            <button
              type="submit"
              // Call handleSubmit when this button is clicked
              className="flex cursor-pointer justify-center items-center gap-x-1 text-lg text-white bg-green rounded-xl h-10 w-28 self-end mt-5"
            >
              Submit
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CreateAgendaComponent;
